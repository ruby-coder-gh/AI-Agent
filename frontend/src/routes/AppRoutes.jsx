import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Login from "../screens/Login";

const AppRoutes = () =>{
    return (
      <BrowserRouter>

        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<div> Register </div>} />
            
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;