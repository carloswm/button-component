import React from 'react'
import ButtonComponent from '../ButtonComponent'
import cart from '../../assets/add_shopping_cart_white_18dp.svg'
import { ThemeProvider } from 'styled-components';

const theme = {
    padding: "8px 16px"
};

const IconBtn = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ButtonComponent
                    title='<Button startIcon=”local_grocery_store” />'
                    background='#2962FF'
                    borderColor='#2962FF'
                    titleColor='#000000'
                    btnColor='#FFFFFF'
                    boxShadow='0px 2px 3px rgba(0, 49, 202, 0.2)'
                    padding='0 0 0 10px'
                    icon={cart}
                />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <ButtonComponent
                    title='<Button endIcon=”local_grocery_store” />'
                    background='#2962FF'
                    borderColor='#2962FF'
                    titleColor='#000000'
                    btnColor='#FFFFFF'
                    boxShadow='0px 2px 3px rgba(0, 49, 202, 0.2)'
                    icon={cart}
                    flexDirection='row-reverse'
                    padding='0 10px 0 0'
                />
            </ThemeProvider>
        </>
    )
}

export default IconBtn
