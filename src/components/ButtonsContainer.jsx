import React from 'react'
import styled from 'styled-components'
import Default from './buttonsTypes/Default';
import Disable from './buttonsTypes/Disable';
import DisableShadow from './buttonsTypes/DisableShadow';
import IconBtn from './buttonsTypes/IconBtn';
import Outline from './buttonsTypes/Outline';
import VariantText from './buttonsTypes/VariantText';
import SizeBtn from './buttonsTypes/SizeBtn';
import ColorBtn from './buttonsTypes/ColorBtn';
import ColorBtnHover from './buttonsTypes/ColorBtnHover';

const Container = styled.div `
    margin: 55px 0 0 90px;
`

const ButtonsRow = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: flex-start;
    margin-bottom: 45px;
`

const Title = styled.p `
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #4F4F4F;
    margin-bottom: 30px;
`;

const ButtonsContainer = () => {
    return (
        <Container className="col2">
            <Title>Buttons</Title>
            <ButtonsRow>
                <Default />
            </ButtonsRow>
            <ButtonsRow>
                <Outline />
            </ButtonsRow>
            <ButtonsRow>
                <VariantText />
            </ButtonsRow>
            <ButtonsRow>
                <DisableShadow />
            </ButtonsRow>
            <ButtonsRow>
                <Disable />
            </ButtonsRow>
            <ButtonsRow>
                <IconBtn />
            </ButtonsRow>
            <ButtonsRow>
                <SizeBtn />
            </ButtonsRow>
            <ButtonsRow>
                <ColorBtn />
            </ButtonsRow>
            <ButtonsRow>
                <ColorBtnHover />
            </ButtonsRow>
        </Container>
    )
}

export default ButtonsContainer
