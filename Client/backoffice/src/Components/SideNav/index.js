import { NavUl, 
         NavLi,
         NavContainer,
         NavTitle,
         LinkTo } from "./SideNavElements";


         
         
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
                  
                  <LinkTo to={'/contact/size_page'}>
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