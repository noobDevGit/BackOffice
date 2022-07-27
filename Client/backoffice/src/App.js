import {GlobalStyle, RootContainer,MainContentContainer,NavContainer} from './GlobalStyle'
import SideNav from './Components/SideNav'
import SizePage from './Components/SizePage'
import HomePage from './Components/HomePage';
import SizeTablePage from './Components/SizeTablePage';
import TypePage from './Components/TypePage';
import TypeTablePage from './Components/TypeTablePage';
import ProductPage from './Components/ProductPage';
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

        <ToastContainer 
        position='top-center' 
        theme='colored'/>

      

      <NavContainer>
        <SideNav/>
      </NavContainer>
      
      <MainContentContainer>
        <Routes>
          
          <Route  path='/' element={ <HomePage/> }/>

          <Route  path='/product_page' element={ <ProductPage/> }/>

          <Route  path='/type_page' element={ <TypeTablePage/> }/>
          <Route  path='/type_page/add_type' element={ <TypePage/> }/>
          <Route  path='/type_page/edit_type/:id' element={ <TypePage/> }/>

          <Route  path='/size_page' element={ <SizeTablePage/>  }/>
          <Route  path='/size_page/add_size' element={ <SizePage/>  }/>
          <Route  path='/size_page/edit_size/:id' element={ <SizePage/>  }/>
        </Routes>
      </MainContentContainer>


    </RootContainer>
  </Router>
  );
}

export default App;
