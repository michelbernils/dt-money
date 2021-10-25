import React from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'


import {Container} from './styles'

interface Props {
    
}

export const Summary = (props: Props) => {

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit'){
            acc.deposits += transaction.price;
            acc.total += transaction.price;
        } else{
            acc.withdraw -= transaction.price;
            acc.total -= transaction.price;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Income Logo" />
                </header>
                <strong>R$ {summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Outcome Logo" />
                </header>
                <strong>R$ {summary.withdraw}</strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total Logo" />
                </header>
                <strong>R$ {summary.total}</strong>
            </div>
        </Container>
    )
}
