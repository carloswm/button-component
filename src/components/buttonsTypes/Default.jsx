import React from 'react'
import styled from 'styled-components'
import ButtonComponent from '../ButtonComponent'

const Default = () => {
    return (
        <>
            <ButtonComponent
                title='<Button />'
                background='#E0E0E0'
                borderColor='transparent'
                titleColor='black'
                btnColor='#3F3F3F'
                boxShadow='0px 2px 3px rgba(51, 51, 51, 0.2)'
            />
            <ButtonComponent
                title='&:hover, &:focus'
                background='#E0E0E0'
                borderColor='transparent'
                titleColor='#828282'
                btnColor='#3F3F3F'
                boxShadow='0px 2px 3px rgba(51, 51, 51, 0.2)'
                hoverBackground='#AEAEAE'
            />
        </>
    )
}

export default Default
