import React from 'react'
import ButtonComponent from '../ButtonComponent'

const VariantText = () => {
    return (
        <>
            <ButtonComponent
                title='<Button variant=”text” />'
                background='transparent'
                borderColor='transparent'
                titleColor='#333333'
                btnColor='#3D5AFE'
            />
            <ButtonComponent
                title='<Button variant=”text” />'
                background='transparent'
                borderColor='transparent'
                titleColor='#828282'
                btnColor='#3D5AFE'
                hoverBackground='rgba(41, 98, 255, 0.1)'
            />
        </>
    )
}

export default VariantText
