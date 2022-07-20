import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { MakePlan } from './pages/MakePlan';
import { Thanks } from './pages/Thanks';
import { NotFound } from './pages/NotFound';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='plan' element={<MakePlan />} />
        <Route path='thanks' element={<Thanks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
