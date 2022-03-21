import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>

      <NavBar />
      <div className='container'>
        <Routes>
          <Route index element={<HomeScreen />}></Route>
          <Route path='/about' element={<AboutScreen />}></Route>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='*' element={<Navigate replace to="/" />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}
