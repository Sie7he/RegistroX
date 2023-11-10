import { User } from '../types/user'

export async function insertarUsuario(usuario: User) : Promise<JSON> {
    try {
        const response = await fetch('https://service-x-j7eg.onrender.com/registro', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'content-type' : 'application/json; charset=UTF-8'
            
            }
        });
        const usuarioCreado = await response.json()
        return usuarioCreado;
    } catch (error) {
        throw new Error('Error: ' + error)
    }
}