import { ChangeEvent, useState, FormEvent } from "react";
import { insertarUsuario } from "./services/request";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./components/FormInput";
import { User, Input } from "./types/user";
import "./App.css";

function App() {
  // Estado local para almacenar información del usuario
  const [users, setUsers] = useState<User>({
    nombre: "",
    apellido: "",
    correo: "",
    pass: "",
    confirmPass: "",
  });

 const navigate = useNavigate()

  // Definición de inputs para el formulario
  const inputs: Input[] = [
    {
      id: 1,
      name: "nombre",
      type: "text",
      placeholder: "Nombre",
      label: "Nombre",
      errorMsg:
        "El nombre debe tener entre 2-20 carácteres y no debe tener números",
      pattern: "^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ']{2,20}$",
      required: true,
    },
    {
      id: 2,
      name: "apellido",
      type: "text",
      placeholder: "Apellido",
      label: "Apellido",
      errorMsg:
        "El apellido debe tener entre 2-20 carácteres y no debe tener números",
      pattern: "^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ']{2,20}$",
      required: true,
    },
    {
      id: 3,
      name: "correo",
      type: "email",
      placeholder: "Correo",
      label: "Correo",
      errorMsg: "El formato de correo no es válido",
      required: true,
    },
    {
      id: 4,
      name: "pass",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      errorMsg:
        "La contraseña debe tener entre 8-20 carácteres y tener al menos una letra, un número y un carácter especial",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*\\/])[ -~]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPass",
      type: "password",
      placeholder: "Confirmar Contraseña",
      label: "Confirmar Contraseña",
      errorMsg: "Las contraseñas no coinciden",
      pattern: users.pass,
      required: true,
    },
  ];

  // Maneja el cambio en los inputs del formulario
  const onChange = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    const name = (event.target as HTMLInputElement).name;
    setUsers({ ...users, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await insertarUsuario(users);
      navigate('/usuarios')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-slate-400">
      <form onSubmit={(e) => handleSubmit(e)} className="form ">
        <h1 className="title">Registro X </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={users[input.name]}
            onChange={onChange}
          />
        ))}
        <input
          type="submit"
          value="Registrarse"
          className="bg-sky-400 text-white p-4 rounded cursor-pointer hover:bg-sky-500"
        />
      </form>
    </main>
  );
}

export default App;
