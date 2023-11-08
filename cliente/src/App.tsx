import { ChangeEvent, useState, FormEvent } from 'react'

import './App.css'

function App() {

   interface User {
    name : string,
    lastName : string,
    email : string,
    pass : string
}

  const [users, setUsers] = useState<User>({
    name : '',
    lastName: '',
    email: '',
    pass: ''

  });

  const [pw, setPw] = useState('')

  const handleChange = (event : ChangeEvent, prop : string) => {
    const value = (event.target as HTMLInputElement).value
    setUsers(prevState => ({...prevState, [prop] : value}))
  }

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    if ( pw !== users.pass) {
      alert('Las contraseñas no coinciden')
    } else {
      console.log(users)
    }

  }


  return (
    <main className='flex justify-center items-center h-screen bg-slate-400'>
      <div className='-rotate-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl shadow-md h-96 w-96 relative '>
     
     </div>
      <form onSubmit={(e) => handleSubmit(e)} className='absolute h-96 w-96 rounded-xl shadow-md bg-white grid gap-4 p-4'>
        <h1 className='title'>Registro X </h1>
      <input type={'text'} value={users.name} onChange={e => handleChange(e, 'name')} className='input' placeholder='Nombre'/>
      <input type={'text'} value={users.lastName} onChange={e => handleChange(e, 'lastName')} className='input' placeholder='Apellido'/>
      <input type={'text'} value={users.email} onChange={e => handleChange(e, 'email')} className='input' placeholder='Correo'/>
      <input type={'password'} value={users.pass} onChange={e => handleChange(e, 'pass')} className='input' placeholder='Contraseña'/>
      <input type={'password'} value={pw} onChange={e => setPw(e.target.value)} className='input' placeholder='Repetir Contraseña'/>
      {/* <input type={'password'} value={user.pass} onChange={e => handleChange(e, '')}/> */}
 
      <input type='submit' value='Registrarse' className='p-4 bg-blue-500 text-white'/>
 
    </form>
    </main>
  )

}

export default App
