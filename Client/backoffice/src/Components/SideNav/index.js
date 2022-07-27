import { NavUl, 
         NavLi,
         NavContainer,
         NavTitle,
          } from "./SideNavElements";

import {LinkTo} from '../LinkStyleElements'
         
import { useState } from "react";    
         
         const SideNav = () => {
  
            const [ActiveState,setActiveState] = useState([
              {state : true},
              {state : false},
              {state : false},
              {state : false},
              {state : false},
            ])


            const ActiveLink =(index)=>{
              

              let temp_state = [...ActiveState];
             
              for (let i = 0; i < temp_state.length; i++) {

                  if (i === index) {

                    temp_state[i].state = true

                  } else {
                    
                    temp_state[i].state = false

                  }
                
              }

              setActiveState(temp_state)

             
            }

           

           return (
            <NavContainer>
                <NavTitle>
                    Main Master
                </NavTitle>
                <NavUl>
                  <LinkTo 
                  to={'/'}>
                    <NavLi State={ActiveState[0].state} onClick={()=>ActiveLink(0)} >Home</NavLi>
                  </LinkTo>
                  
                  <NavLi State={ActiveState[1].state} onClick={()=>ActiveLink(1)}>User Management</NavLi>

                  <LinkTo to={'/size_page'} >
                    <NavLi State={ActiveState[2].state} onClick={()=>ActiveLink(2)} >Product Size</NavLi>
                  </LinkTo>

                  <LinkTo to={'/type_page'} >
                    <NavLi State={ActiveState[3].state} onClick={()=>ActiveLink(3)}>Product Type</NavLi>
                  </LinkTo>

                  
                    <LinkTo to={'/product_page'}>
                      <NavLi State={ActiveState[4].state} onClick={()=>ActiveLink(4)} > Product</NavLi>
                    </LinkTo>

                      </NavUl>
             </NavContainer>
           )
         }
         
         export default SideNav