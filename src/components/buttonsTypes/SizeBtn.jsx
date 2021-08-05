import React from 'react'

const SizeBtn = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ButtonComponent
                    title='<Button size=”sm” />'
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
                    title='<Button size=”md” />'
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
            <ThemeProvider theme={theme}>
                <ButtonComponent
                    title='<Button size=”lg” />'
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

export default SizeBtn
