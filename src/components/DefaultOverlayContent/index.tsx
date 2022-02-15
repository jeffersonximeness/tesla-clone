import React from 'react'

import { Container } from './styles'


interface Props {
    label: string
    description: string
}

const DefaultOverlayContent: React.FC<Props> = ({ label, description }) => {
    return (
        <Container>
            <h1>Default Overlay Content</h1>
        </Container>
    )
}

export default DefaultOverlayContent