import React, { useEffect } from 'react';
import {obtenerUsuarios} from '../services/request'
import { useState } from 'react';



export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers () {
            const usuarios = await obtenerUsuarios()
            setUsers(usuarios)
        }
        getUsers()
    }, [])
    

  return (
    <table>
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
