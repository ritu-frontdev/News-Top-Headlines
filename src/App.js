import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import FirstPage from './Component/FirstPage';
import NewsApp from './Component/NewsApp';
import "./Component/FirstPage.css";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='NewsApp' element={<NewsApp/>}/>
      </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
