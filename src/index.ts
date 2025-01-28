import { env } from './config/env';
import express from 'express'
import { connectToDatabase } from './config/database';

const app = express();
const PORT = env.PORT || 3000;  

app.use(express.json()); 
connectToDatabase();

app.get('/', (req, res) => {
    res.send('API Controle de Medicamentos - Hogwarts')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})