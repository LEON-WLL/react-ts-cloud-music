import React from 'react';
import { Redirect } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
      }
    ]
  }
]