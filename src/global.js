import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.color};
        transition: all 0.50s linear;
    }

    h1,
    h2{
        color: ${({theme}) => theme.color};
    }
`
