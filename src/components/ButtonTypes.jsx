import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import ButtonsContainer from './ButtonsContainer';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 120px;
`

const Tabs = styled.p `
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    color: #9E9E9E;
    text-decoration: none;
    margin: 0;
`

const TabExtended = styled(Tabs) `
    margin-top: 30px;
    margin-bottom: 0;
`

const linkStyle = {
    textDecoration: "none",
}

const ButtonTypes = () => {
    return (
        <Router>
            <Container>
                <Link to='/' style={linkStyle}>
                    <Tabs>Colors</Tabs>
                </Link>
                <Link to='/typography' style={linkStyle}>
                    <TabExtended>Typography</TabExtended>
                </Link>
                <Link to='/spaces' style={linkStyle}>
                    <TabExtended>Spaces</TabExtended>
                </Link>
                <Link to='/buttons' style={linkStyle}>
                    <TabExtended>Buttons</TabExtended>
                </Link>
                <Link to='/inputs' style={linkStyle}>
                    <TabExtended>Inputs</TabExtended>
                </Link>
                <Link to='/grid' style={linkStyle}>
                    <TabExtended>Grid</TabExtended>
                </Link>
            </Container>
        </Router>
    )
}

export default ButtonTypes
