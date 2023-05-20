import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Navigate, Route, Routes, Switch,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import ErrorMessage from "./pages/ErrorMessage";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(()=> {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <AppRouter/>
                </div>


            </BrowserRouter>
        </AuthContext.Provider>

    )
}

export default App;
