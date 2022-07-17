import styled from "styled-components";



export const MainContainer = styled.div`

    width:100% ;
    height:100% ;

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


export const TableContainer = styled.div`

    width: 100%;
    height: 500px;
    padding: 30px 30px;

`

export const ButtonEdit = styled.button`

    background-color: green ;
    color: white ;
    width:60px ;
    height:30px ;
    border:none ;
    border-radius:4px ;
    margin-right: 5px ;


`

export const ButtonDelete = styled(ButtonEdit)`
 background-color: red ;
`