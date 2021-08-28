import React from 'react'
import ButtonComponent from '../ButtonComponent'

const ColorBtn = () => {
    return (
        <>
            <ButtonComponent
                title='<Button color=”default” />'
                background='#E0E0E0'
                borderColor='transparent'
                titleColor='black'
                btnColor='#3F3F3F'
                boxShadow='0px 2px 3px rgba(51, 51, 51, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='<Button color=”primary” />'
                background='#2962FF'
                borderColor='#2962FF'
                titleColor='black'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(41, 98, 255, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='<Button color=”secondary” />'
                background='#455A64'
                borderColor='#455A64'
                titleColor='black'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(69, 90, 100, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='<Button color=”danger” />'
                background='#D32F2F'
                borderColor='#D32F2F'
                titleColor='black'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(211, 47, 47, 0.2)'
                paddingBtn='8px 16px'
            />
        </>
    )
}

export default ColorBtn
