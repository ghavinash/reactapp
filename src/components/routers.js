import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Datatable from "./datatable";
import Header from "./header";
import Welcome from "./welcome";

const Router  = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Welcome/>}/>
            <Route path="/search" element={<Datatable/>} />
            <Route path="/view" element={<Header/>} />
        </Routes>
    </BrowserRouter>    
);

export default Router;