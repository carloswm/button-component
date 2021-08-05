import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 120px;
`

const Tabs = styled.a `
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    color: #9E9E9E;
    text-decoration: none;
`

const TabExtended = styled(Tabs) `
    margin-top: 30px;
`

const ButtonTypes = () => {
    return (
        <Container>
            <Tabs href="#">Colors</Tabs>
            <TabExtended href="#">Colors</TabExtended>
            <TabExtended href="#">Typography</TabExtended>
            <TabExtended href="#">Spaces</TabExtended>
            <TabExtended href="#">Buttons</TabExtended>
            <TabExtended href="#">Inputs</TabExtended>
            <TabExtended href="#">Grid</TabExtended>
        </Container>
    )
}

export default ButtonTypes
