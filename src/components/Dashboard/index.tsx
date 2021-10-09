import React from 'react'
import {Summary} from '../Summary/index'

import {Container} from './styles'

interface Props {
    
}

export const Dashboard = (props: Props) => {
    return (
        <Container>
            <Summary />
        </Container>
    )
}
