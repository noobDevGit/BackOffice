import styled from "styled-components"

import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

    *{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        

    }
`

export const RootContainer = styled.div`


    width: 100%;
    height: 100vh;



`

export const NavContainer = styled.div`
width: 20%;
display: inline-block;
height: 100vh;

`

export const MainContentContainer = styled.div`

width: 80%;
height: 100vh;
vertical-align:top;
padding: 0 10px;
display: inline-block;
`