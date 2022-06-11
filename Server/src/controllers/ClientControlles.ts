import { Request, Response } from 'express';
import knex from '../database/connection';






class ClientControlles {

    // Listar dados da Rota Cliente
    async index(request: Request, response: Response) {
        const clientResults = await knex('client');
        return response.json(clientResults);
    }

    //Criação Rotas para Cadastrar CLIENTE
    async create(request: Request, response: Response) {

        const { name, motorcycle, place, service, money } = request.body;
        const WorkObj = { name, motorcycle, place, service, money } //componentes da tabela dentro da variavel

        await knex('client').insert({
            name: name,
            motorcycle: motorcycle,     // abreviação sintaxe poderia ser apenas name,
            place: place,
            service: service,
            money: money,

        });
        return response.json(WorkObj);

    }



    //Atualizar Clientes
    async update(request: Request, response: Response) {
        // abreviação da sintação que seria escrita de forma const name = request.body
        const { name, motorcycle, place, service, money } = request.body;
        const { id } = request.params;
        const UpClient = await knex('client')
            .update({ name, motorcycle, place, service, money })
            .where({ id })

        return response.json(UpClient);

    }

    //Deletar Clientes
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        await knex('client')
            .where({ id })
            .del()
        return response.json({ message: true })






    }


}


export default ClientControlles;







