import { User } from '../types/user'



export async function obtenerUsuarios() : Promise<JSON> {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')

    }
}

export async function insertarUsuario(usuario: User) : Promise<JSON> {
    try {
        const response = await fetch(import.meta.env.VITE_SERVER, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'content-type' : 'application/json; charset=UTF-8'
            
            }
        });
        const usuarioCreado = await response.json()
        return usuarioCreado;
    } catch (error) {
        throw new Error('Ha ocurrido un error en el servidor')
    }
}