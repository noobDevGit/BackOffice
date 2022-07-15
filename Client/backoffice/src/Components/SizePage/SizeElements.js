import styled from "styled-components";


export const MainContainer = styled.div`
height: 100vh;
width: 100%;

`


export const TitleContianer = styled.div`
    width: 100%;
    padding: 25px 0;
    border-bottom: 1px solid #3e68d5;
`

export const TitleContent = styled.p`
    
    font-size: 26px;
    align-items: center;
    color: #3e68d5 ;

`

export const FormContainer = styled.div`

    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    padding: 30px 0;


`

export const MainForm = styled.form`



`

export const Label = styled.label`

    font-size: 16px;

`

export const Input = styled.input`

    height: 40px;
    width: 200px;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:focus{
    outline: none;
    box-shadow:0 0 5px #3e68d5;
    }

`


export const Button = styled.input.attrs({
    // we can define static props
    type: "submit",
  
})`

    height: 40px;
    width: 200px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #3e68d5;

    &:hover{
    cursor: pointer;
    box-shadow:0 0 5px #3e68d5;
    }
  

`