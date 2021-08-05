import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    text-align: left;
`

const Title = styled.p `
    font-family: 'Ubuntu Mono', monospace;
    font-size: 12px;
    color: ${ props => props.titleColor };
`

const Button = styled.button `
    display: flex;
    align-items: center;
    flex-direction: ${props => props.flexDirection};
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    padding: ${props => props.theme.padding};
    border-radius: 6px;
    border: ${ props => props.borderColor };
    background: ${ props => props.background };
    color: ${ props => props.btnColor };
    box-shadow: ${ props => props.boxShadow };
    &:hover {
        background: ${ props => props.hoverBackground}
    }
`

Button.defaultProps = {
    theme: {
        padding: '8px 16px'
    }
}

const Span = styled.span `
    padding: ${ props => props.padding};
`

const ButtonComponent = ({
    title,
    background,
    flexDirection,
    borderColor,
    titleColor,
    btnColor,
    boxShadow,
    hoverBackground,
    padding,
    icon
    }) => {
    return (
        <Container>
            <Title
                titleColor={ titleColor }
            >
                {title}
            </Title>
            <Button
                background={ background }
                borderColor={ borderColor }
                btnColor={ btnColor }
                boxShadow={ boxShadow }
                hoverBackground={ hoverBackground }
                flexDirection={ flexDirection }
            >
                {
                    icon ? <img src={icon}/> : null
                }
                <Span
                    padding={ padding }
                >
                    Default
                </Span>
            </Button>
        </Container>
    )
}

export default ButtonComponent
