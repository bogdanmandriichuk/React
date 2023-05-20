import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import ErrorMessage from "../pages/ErrorMessage";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router/routes";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
if (isLoading) {
    return <Loader/>
}
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                    exact={route.exact}
                />
            ))}
        </Routes>
            :
            <Routes>

                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                        exact={route.exact}
                    />
                ))}
                <Route path="*" element={<Login/>}/>
            </Routes>

    );
};

export default AppRouter;