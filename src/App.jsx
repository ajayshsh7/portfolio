import React from 'react'
import './App.css';
import { Home, Contactpage, Casestudy } from './pages/main';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element ={<Home/>}/>
    <Route path = "/contactpage" element ={<Contactpage/>}/>
    <Route path = "/casestudy" element ={<Casestudy/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
