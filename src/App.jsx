import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contect from './Pages/Contect';
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'


const App = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/menu" element={<Menu/> }/>
          <Route path="/contect" element={<Contect/> } />
          <Route path="/about" element={<About/> }/>
          <Route path="*" element={<PageNotFound/> }/>
      </Routes>
      </BrowserRouter>
      </>
    );
  
}

export default App
