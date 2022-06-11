import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import Handler from './handler';
import { useHref } from 'react-router-dom'

import api from '../services/api';




interface Service {
    id: number,
    name: string,
    motorcycle: string,
    place: string,
    service: string,
    money: string,
}





const Workservice = () => {





    const [inputData, setInputData] = useState({
        name: '',
        motorcycle: '',
        place: '',
        service: '',
        money: '',
    })
    



    const [clientlist, setClient] = useState<Service[]>([]);


    useEffect(() => {

        api.get('clientlist').then((response: { data: React.SetStateAction<Service[]>; }) => {
            setClient(response.data)

        })

    }, [])


    function CreateServiceInput(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setInputData({ ...inputData, [name]: value })
    }
    async function NewButton(event: FormEvent) {
        event.preventDefault();

        const { name, motorcycle, place, service, money } = inputData

        const data = {
            name,
            motorcycle,
            place,
            service,
            money
        }
        await api.post('create', data)

        window.location.reload();

    }

    
   
    
    




    async function deleteclient(id: number) {
        api.delete(`delclient/${id}`);

        await setClient(clientlist.filter(client => client.id !== id))// comparação para deletar
       
    }


    

    

    

    
    return (
        <div id="page-home">
            <header>
                <h1>Ordem de Serviço</h1>
            </header>
            <main>
                <button type="button"
                 onClick={Handler} 
                 className="btn darkgren" 
                 id="CreateClient">
                 Cadastrar
                </button>
                
                <table className="table-list" id="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Moto</th>
                            <th>Serviço</th>
                            <th>Placa</th>
                            <th>R$</th>
                            <th className="margin-action">Ação</th>
                        </tr>
                    </thead>
                    <tbody >
                        {clientlist.map(client => (
                            <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.motorcycle}</td>
                                <td>{client.service}</td>
                                <td>{client.place}</td>
                                <td>{client.money}</td>

                                <td className="margin-btn">
                                        
                                   

                                    <button
                                        type="button"
                                        className="btn red">
                                        <FiTrash2
                                            onClick={() => deleteclient(client.id)} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                
                 </tbody>
                    </table>
               
                <div className="create-new" id="create-new">
                    <div className="content">
                        <header className="content-header">
                            <h1>Novo Cliente</h1>
                            <span className="icon-close" onClick={Handler} id="icon-close"><FiX /></span>
                        </header>

                        <form onSubmit={NewButton} className="content-form">

                            <input type="text" className="field" name="name" placeholder="Nome" onChange={CreateServiceInput} />
                            <input type="text" className="field" name="motorcycle" placeholder="Moto" onChange={CreateServiceInput} />
                            <input type="text" className="field" name="place" placeholder="Placa" onChange={CreateServiceInput} />
                            <input type="text" className="field" name="service" placeholder="Serviço" onChange={CreateServiceInput} />
                            <input type="number" className="field" name="money" placeholder="R$" onChange={CreateServiceInput} />

                            <footer className="footer-form">
                                <div className="footer2"  >
                                    <button type="submit" id="edit" className="btn darkgren"   >Salvar</button>

                                </div>

                            </footer>
                        </form>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Workservice;