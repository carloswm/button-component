import React from 'react'
import ButtonComponent from '../ButtonComponent'

const Outline = () => {
    return (
        <>
            <ButtonComponent
                title='<Button variant=”outline” />'
                background='transparent'
                borderColor='1px solid #3D5AFE'
                titleColor='#333333'
                btnColor='#3D5AFE'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='&:hover, &:focus'
                background='transparent'
                borderColor='1px solid #3D5AFE'
                titleColor='#828282'
                btnColor='#3D5AFE'
                hoverBackground='rgba(41, 98, 255, 0.1)'
                paddingBtn='8px 16px'
            />
        </>
    )
}

export default Outline
