// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Combo from "./components/Combo/Combo";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import HTML from "./components/Html/Html";
import CSS from "./components/Css/Css";
import Javascript from "./components/Javascript/Javascript";
import React from "./components/React/React";
import Signup from "./components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          {
                index: true,
                element: <Home />,
          },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/html",
                element: <HTML />,
            },
            {
                path: "/css",
                element: <CSS />,
            },
            {
                path: "/javascript",
                element: <Javascript />,
            },
            {
                path: "/react",
                element: <React />,
            },
            {
                path: "/combo",
                element: <Combo />,
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);