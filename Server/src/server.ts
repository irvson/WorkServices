import express from 'express';
import routes from './routes';
import 'express-async-errors'// Traz o problemas de erros de conexão com precisão

import cors from 'cors';


import errorHandler from './errors/handler';


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);



app.listen(3000);


