import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Topbar from "./Components/common/Topbar";
import {MainPage} from "./Pages/MainPage";

function App() {
  return (
    <>
       <Topbar/>
       <Navbar/>
       <Routes>
         <Route path='/' element={<MainPage/>}/>
       </Routes>
    </>
  );
}

export default App;
