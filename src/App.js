import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import './App.css'
import Skill from "./Components/Skill"
import Footer from "./Components/Footer"
import Newmenu from "./Components/Newmenu"
import Myproject from "./Components/Myproject"



function App() {

  return (
     <div className="bg-black text-white">
      <Newmenu/>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/project" element={<Myproject/>}></Route>
  <Route path="/skill" element={<Skill/>}></Route>
 </Routes>
   <Footer/>

  
    </div>
  )
}

export default App
