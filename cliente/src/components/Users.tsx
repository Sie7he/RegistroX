import  { useEffect } from 'react';
import {obtenerUsuarios} from '../services/request'
import { useState } from 'react';
import { User } from '../types/user';



const useUsuarios = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        async function getUsers () {
            const usuarios = await obtenerUsuarios()
            setUsers(usuarios)
        }
        getUsers()
    }, [])
    
    return users
}

export const Users = () => {

    const users = useUsuarios();

  return ( 
    <table className='text-center w-full' >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                </tr>
            )))}

        </tbody>
    </table>
  )
}
