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
    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400' >
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
                <th className='px-6 py-3'>Nombre</th>
                <th className='px-6 py-3'>Apellido</th>
                <th className='px-6 py-3'>Correo</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user => (
                <tr key={user.id} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    <td className='px-6 py-3'>{user.name}</td>
                    <td className='px-6 py-3'>{user.lastname}</td>
                    <td className='px-6 py-3'>{user.email}</td>
                </tr>
            )))}

        </tbody>
    </table>
  )
}
