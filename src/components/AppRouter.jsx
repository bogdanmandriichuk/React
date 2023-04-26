import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import ErrorMessage from "../pages/ErrorMessage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/posts" element={<Posts/>}/>
            <Route path="*" element={<ErrorMessage/>}/>


        </Routes>
    );
};

export default AppRouter;