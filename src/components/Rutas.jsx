import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/sections/Home";
 
const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    </>
  )
}
 
export default Rutas
