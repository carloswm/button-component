import React from 'react'
import ButtonComponent from '../ButtonComponent'

const SizeBtn = () => {
    return (
        <>
            <ButtonComponent
                title='<Button size=”sm” />'
                background='#2962FF'
                borderColor='#2962FF'
                titleColor='#000000'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(0, 49, 202, 0.2)'
                paddingBtn='6px 12px'
            />
            <ButtonComponent
                title='<Button size=”md” />'
                background='#2962FF'
                borderColor='#2962FF'
                titleColor='#000000'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(0, 49, 202, 0.2)'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='<Button size=”lg” />'
                background='#2962FF'
                borderColor='#2962FF'
                titleColor='#000000'
                btnColor='#FFFFFF'
                boxShadow='0px 2px 3px rgba(0, 49, 202, 0.2)'
                paddingBtn='10px 22px'
            />
        </>
    )
}

export default SizeBtn
