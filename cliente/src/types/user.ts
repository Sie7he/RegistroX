export interface User {
    nombre : string,
    apellido : string,
    correo : string,
    pass : string,
    confirmPass: string,
    [key: string]: string | undefined
}

export interface Input {
    id: number,
    name: string,
    type: string,
    placeholder: string,
    label: string,
    errorMsg: string,
    pattern? : string,
    required : boolean
}