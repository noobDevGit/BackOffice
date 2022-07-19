import { NavUl, 
         NavLi,
         NavContainer,
         NavTitle,
          } from "./SideNavElements";

import {LinkTo} from '../LinkStyleElements'
         
         
         const SideNav = () => {
           return (
            <NavContainer>
                <NavTitle>
                    Main Master
                </NavTitle>
                <NavUl>
                  <LinkTo to={'/'} >
                    <NavLi>Home</NavLi>
                  </LinkTo>
                  
                  <LinkTo to={'/size_page'}>
                    <NavLi>Ukuran Pakaian</NavLi>
                  </LinkTo>

                    <NavLi>User Management</NavLi>
                    
                    <NavLi>Jenis Pakaian</NavLi>
                    <NavLi>Pakaian</NavLi>
                </NavUl>
             </NavContainer>
           )
         }
         
         export default SideNav