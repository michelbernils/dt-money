import React from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import {Container} from './styles'

interface Props {
    
}

export const Summary = (props: Props) => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Income Logo" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Outcome Logo" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total Logo" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
        </Container>
    )
}
