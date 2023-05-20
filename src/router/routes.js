import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {Route} from "react-router-dom";

import ErrorMessage from "../pages/ErrorMessage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/', component: Posts, exact: false},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '*', component: ErrorMessage, exact: false}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: false},

]