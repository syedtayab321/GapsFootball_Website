import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Topbar from "./Components/common/Topbar";
import {MainPage} from "./Pages/MainPage";
import About from "./Components/Main/About";
import Features from "./Components/Main/Features";
import Services from "./Components/Main/Services";

function App() {
  return (
    <>
       <Topbar/>
       <Navbar/>
       <Routes>
         <Route path='/' element={<MainPage/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/features' element={<Features/>}/>
         <Route path='/services' element={<Services/>}/>
       </Routes>
    </>
  );
}

export default App;
