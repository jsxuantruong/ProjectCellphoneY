
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Login from "./Components/Login";


function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/home" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>


        </Routes>
        </BrowserRouter>
    </React.StrictMode>


    
    
  );
}

export default App;
