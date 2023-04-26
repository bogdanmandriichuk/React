import React from "react";
import './styles/App.css'
import {BrowserRouter, Navigate, Route, Routes, Switch,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import ErrorMessage from "./pages/ErrorMessage";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>


                <AppRouter/>
            </div>


        </BrowserRouter>
    )
}

export default App;
