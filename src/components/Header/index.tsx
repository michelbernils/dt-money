import React from 'react'

import dtLogo from '../../assets/logo.svg'
import {Container, Content} from './styles'

interface HeaderProps {
    onHandeOpenNewTransactionModal: () => void
}

export const Header = ( {onHandeOpenNewTransactionModal} : HeaderProps) => {

    return (
        <Container>
            <Content> 
                <img src={dtLogo} alt="dt-money logo" />

                <button onClick={onHandeOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}
