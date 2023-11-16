import express from 'express';
import pool from '../database/config.js';
import {isValidEmail, hashPass} from '../validations/validations.js'

const router = express.Router();

const MIN_LENGTH = 1;


router.get("/registro", async (req, res) => {
    try {
        const sql = 'SELECT * FROM usuarios'
        const usuarios = await pool.query(sql);
        return res.status(200).json(usuarios.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error interno del servidor');

    }
});

router.post("/registro", async (req, res) => {
    try {
        const { nombre, apellido, correo, pass } = req.body;

        if ([nombre,apellido,correo,pass].some(value => value.length < MIN_LENGTH) ) {
            return res.status(400).send('No debe haber campos vacíos');
        } else if (!isValidEmail(correo)) {
            return res.status(400).send('Formato de correo electrónico inválido');
        } else {
            const hash = hashPass(pass)
            const sql = 'INSERT INTO usuarios(name, lastname, email, pass) VALUES($1, $2, $3, $4) returning *';
            const values = [nombre, apellido, correo, hash];
            const usuario = await pool.query(sql, values);
            return res.status(200).json(usuario.rows[0]);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    }
})

 export default router