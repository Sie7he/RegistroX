import { User } from '../types/user'

export async function insertarUsuario(usuario: User) : Promise<any> {
    try {
        const response = await fetch('http://localhost:3000/registro/', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'content-type' : 'application/json; charset=UTF-8'
            
            }
        });
        const usuarioCreado = await response.json()
        return usuarioCreado;
    } catch (error) {
        console.log(error)
    }
}