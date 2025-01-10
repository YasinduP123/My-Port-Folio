import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import Intro from "./Intro/Intro";
import Navbar from "./common/NavBar";
import "flowbite-react"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
    </BrowserRouter>
  );  
}

export default App;
