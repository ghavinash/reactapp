import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Datatable from "./datatable";
import NotFound from "./notfound";
import UserList from "./userlist";
import Welcome from "./welcome";
import App from "../App";

const Router  = (props) => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Welcome/>}/>
            <Route path="/app" element={<App/>}/>
            <Route path="/search" element={<Datatable/>}>
                <Route path=":username" element={<UserList/>}/>
            </Route>
            <Route path= "*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>    
);

export default Router;