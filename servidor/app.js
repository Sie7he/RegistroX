import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import registro from './src/routes/registro.js'

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));



app.use("/", registro);



app.listen(3000, () => {
    console.log('Server on Port 3000')
});
