import React from 'react'

import dtLogo from '../../assets/logo.svg'
import {Container, Content} from './styles'

interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <Container>
            <Content> 
                <img src={dtLogo} alt="dt-money logo" />

                <button>Nova Transação</button>
            </Content>
        </Container>
    )
}
