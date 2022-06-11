import  express  from "express";


import ClientControlles from "./controllers/ClientControlles";


const routes = express.Router();
const clienteControlles = new ClientControlles(); // instancia da class ClientControllers



// Criar Clientes
routes.post('/create', clienteControlles.create);

//Listagem de clientes
routes.get('/clientlist',clienteControlles.index); 

//Atualizar Clientes
routes.put('/upclient/:id', clienteControlles.update);

// Deletar Clientes
routes.delete('/delclient/:id',clienteControlles.delete);



    export default routes;



    // index caso seja varias listagem 
    // show caso liste apenas UM UNICO REGISTRO
    