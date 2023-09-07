
import { createRoot } from 'react-dom/client';
import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  import Layout from "./Layout" 

  const path = process.env.REACT_APP_PUBLIC_URL + '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={path} element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path={path + "stuff"} element={<Stuff />}/>
      <Route path={path + "/contact"} element={<Contact />}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);