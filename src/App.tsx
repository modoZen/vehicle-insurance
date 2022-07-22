import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { MakePlan } from './pages/MakePlan';
import { Thanks } from './pages/Thanks';
import { NotFound } from './pages/NotFound';
import { useAppSelector } from './store';

function App() {
  const isLogin = useAppSelector(state=>state.user.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='plan' element={isLogin?<MakePlan />:<Navigate replace to={'/'} />} />
        <Route path='thanks' element={<Thanks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
