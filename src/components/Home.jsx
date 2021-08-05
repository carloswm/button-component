import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './ButtonsContainer';
import Sidebar from './Sidebar';

const Main = styled.div `
    display: grid;
    grid-template-columns: 15% 85%;
    min-height: 100vh;
`;

const Home = () => {
    return (
        <Main className="main">
            <Sidebar />
            <ButtonsContainer />
        </Main>
    )
}

export default Home
