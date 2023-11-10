import { ChangeEvent, useState, FormEvent } from "react";
import { insertarUsuario } from './services/request';
import { User } from './types/user'
import "./App.css";

function App() {


  const [users, setUsers] = useState<User>({
    nombre: "",
    apellido: "",
    correo: "",
    pass: "",
  });

  const [pw, setPw] = useState("");

  const handleChange = (event: ChangeEvent, prop: string) => {
    const value = (event.target as HTMLInputElement).value;
    setUsers((prevState) => ({ ...prevState, [prop]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pw !== users.pass) {
      alert("Las contraseñas no coinciden");
    } else {
      const usuario = await insertarUsuario(users)
      console.log(usuario)
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-slate-400">
      <div className="-rotate-6 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl shadow-md h-96 w-96 relative "></div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="form "
      >
        <h1 className="title">Registro X </h1>
        <div className="flex gap-2">
        <label>
        <input
          id = {'nombre'}
          type={"text"}
          value={users.nombre}
          onChange={(e) => handleChange(e, "nombre")}
          className="input"
          required

        />
        <span>Nombre</span>
        </label>
        <label>
        <input
          type={"text"}
          value={users.apellido}
          onChange={(e) => handleChange(e, "apellido")}
          className="input"
          required
        />
        <span>Apellido</span>
        </label>
        </div>
       
        <label>
        <input
          type={"text"}
          value={users.correo}
          onChange={(e) => handleChange(e, "correo")}
          className="input"
          required
        />
        <span>Correo</span>
        </label>
       <label>
       <input
          type={"password"}
          value={users.pass}
          onChange={(e) => handleChange(e, "pass")}
          className="input"
          required
        />
        <span>Contraseña</span>
       </label>
        
    <label>
    <input
          type={"password"}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="input"
          required
        />
        <span>Repetir Contraseña</span>
    </label>
        <input
          type="submit"
          value="Registrarse"
          className="bg-blue-400 hover:bg-blue-500 text-white p-4 cursor-pointer delay-75"
        />
      </form>
    </main>
  );
}

export default App;
