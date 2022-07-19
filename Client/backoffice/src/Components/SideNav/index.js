import { NavUl, 
         NavLi,
         NavContainer,
         NavTitle,
          } from "./SideNavElements";

import {LinkTo} from '../LinkStyleElements'
         
         
         const SideNav = () => {


          const halo = (x)=>{

            window.confirm("Are you sure you want to delete? "+x)

          }

           return (
            <NavContainer>
                <NavTitle>
                    Main Master
                </NavTitle>
                <NavUl>
                  <LinkTo to={'/'} >
                    <NavLi id="bro">Home</NavLi>
                  </LinkTo>
                  
                  <LinkTo to={'/size_page'}>
                    <NavLi>Product Size</NavLi>
                  </LinkTo>

                    <NavLi>User Management</NavLi>
                    
                    <NavLi>Product Type</NavLi>
                    <NavLi>Product</NavLi>
                </NavUl>
             </NavContainer>
           )
         }
         
         export default SideNav