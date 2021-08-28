import React from 'react'
import ButtonComponent from '../ButtonComponent'

const Disable = () => {
    return (
        <>
            <ButtonComponent
                title='<Button disabled />'
                background='#E0E0E0'
                borderColor='#E0E0E0'
                titleColor='#000000'
                btnColor='#9E9E9E'
                paddingBtn='8px 16px'
            />
            <ButtonComponent
                title='<Button variant=”text” disabled />'
                background='#E0E0E0'
                borderColor='#E0E0E0'
                titleColor='#333333'
                btnColor='#9E9E9E'
                hoverBackground='transparent'
                paddingBtn='8px 16px'
            />
        </>
    )
}

export default Disable
