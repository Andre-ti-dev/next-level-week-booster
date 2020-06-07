import path from 'path';
import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

// Configurando cors
app.use(cors());

// Configurando express para trabalhar com dados em formato JSON
app.use(express.json());

// Configurando nossas rotas
app.use(routes);

// Servindo arquivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

// Iniciando servidor
app.listen(3333);