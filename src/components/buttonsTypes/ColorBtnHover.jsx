import React from 'react'
import ButtonComponent from '../ButtonComponent'

const ColorBtnHover = () => {
    return (
        <>
            <ButtonComponent
                title='&:hover, &:focus'
                background='#AEAEAE'
                borderColor='#AEAEAE'
                titleColor='#828282'
                btnColor='#3F3F3F'
                boxShadow='0px 2px 3px rgba(51, 51, 51, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='&:hover, &:focus'
                background='#0039CB'
                borderColor='#0039CB'
                btnColor='#FFFFFF'
                titleColor='#828282'
                boxShadow='0px 2px 3px rgba(41, 98, 255, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='&:hover, &:focus'
                background='#1C313A'
                borderColor='#1C313A'
                btnColor='#FFFFFF'
                titleColor='#828282'
                boxShadow='0px 2px 3px rgba(69, 90, 100, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='&:hover, &:focus'
                background='#9A0007'
                borderColor='#9A0007'
                btnColor='#FFFFFF'
                titleColor='#828282'
                boxShadow='0px 2px 3px rgba(211, 47, 47, 0.2)'
                paddingBtn='8px 16px'
            />
        </>
    )
}

export default ColorBtnHover
