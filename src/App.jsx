import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contect from './Pages/Contect';
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'


const App = () => {
    return (
      <>
      <HashRouter>
      <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/menu" element={<Menu/> }/>
          <Route path="/contect" element={<Contect/> } />
          <Route path="/about" element={<About/> }/>
          <Route path="*" element={<PageNotFound/> }/>
      </Routes>
      </HashRouter>
      </>
    );
  
}

export default App
