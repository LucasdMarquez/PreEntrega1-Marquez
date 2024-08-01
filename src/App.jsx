import {BrowserRouter,Route, Routes} from "react-router-dom"


import { NavBar } from './components/NavBar';
import { Home } from './components/Home'; 
import { Detail } from './components/Detail'; 


function App() {
  return <BrowserRouter>   
          <NavBar/> 
          <Routes>    
          <Route path="/" element={<Home/>} />
          <Route path="/category/:categoyId" element={ <Home/>}/>
          <Route path="/detail/:detailId" element={ <Detail/>}/>
          <Route path="/contact" element={ <div><h1>Contact</h1></div>}/> 
          <Route path="*" element={404}/>
          </Routes>
          </BrowserRouter>;
}

export default App