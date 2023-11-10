import express from 'express';
import pool from '../database/config.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

const MIN_LENGTH = 1;
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

router.get("/registro", async (req, res) => {
  res.send('Hola')
});

router.post("/registro", async (req, res) => {
    try {
        const { nombre, apellido, correo, pass } = req.body;

        if ([nombre,apellido,correo,pass].some(value => value.length < MIN_LENGTH) ) {
            return res.status(400).send('No debe haber campos vacíos');
        } else if (!isValidEmail(correo)) {
            return res.status(400).send('Formato de correo electrónico inválido');
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(pass, salt);
            const sql = 'INSERT INTO usuarios(name, lastname, email, pass) VALUES($1, $2, $3, $4) returning *';
            const values = [nombre, apellido, correo, hash];
            const usuario = await pool.query(sql, values);
            return res.json(usuario.rows[0]);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
})

 export default router