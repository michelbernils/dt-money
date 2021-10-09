import React, {useEffect} from 'react'
import { Container } from './style'
import {api} from '../../services/api'


interface Props {
    
}

export const TransactionTable = (props: Props) => {




    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
