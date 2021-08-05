import React from 'react'
import styled from 'styled-components'
import ButtonTypes from './ButtonTypes';

const Container = styled.div `
    padding: 45px 55px;
    background: #FAFBFD;
`

const Title = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
`;

const TitleSpan = styled(Title) `
    color: #F7542E;
    margin: 0;
`

const Sidebar = () => {
    return (
        <Container className="col1">
            <Title>
                <TitleSpan>Dev</TitleSpan>challenges.io
            </Title>
            <ButtonTypes />
        </Container>
    )
}

export default Sidebar
