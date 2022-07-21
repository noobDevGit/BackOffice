import styled from "styled-components";


export const NavContainer = styled.ul`

background-color:transparent;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
padding: 20px 0;
box-shadow: 1px 0 5px -1px #3e68d5;
`

export const NavTitle = styled.p`

    font-size: 22px;
    font-style: bold;
    width: 150px;
    color: #3e68d5;
    margin-bottom: 10px;

`

export const NavUl = styled.ul`

width: 150px;
list-style-type:none;
`

export const NavLi = styled.li`



padding: 10px 10px;
font-size: 15px;
transition: 0.2s;
color: #6f7377;
${props => props.State ?'background-color:#e0f3ff;color: #3e68d5;':''}

&:hover {
       background-color:#e0f3ff;
       color: #3e68d5;
       cursor: pointer;
    }

`

