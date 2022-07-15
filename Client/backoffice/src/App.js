import {GlobalStyle, RootContainer,MainContentContainer,NavContainer} from './GlobalStyle'
import SideNav from './Components/SideNav'
import SizePage from './Components/SizePage'
import HomePage from './Components/HomePage';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as 
  Router, 
  Routes,
  Route,
 } from "react-router-dom";

function App() {
  return (
  <Router>
    <GlobalStyle/>
    <RootContainer>

        <ToastContainer position='top-center' />

      

      <NavContainer>
        <SideNav/>
      </NavContainer>
      
      <MainContentContainer>
        <Routes>
          <Route  path='/' element={ <HomePage/> }/>
          <Route  path='/contact/size_page' element={ <SizePage/> }/>
        </Routes>
      </MainContentContainer>


    </RootContainer>
  </Router>
  );
}

export default App;
