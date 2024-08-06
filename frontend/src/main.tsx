import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <UserProvider>
         <RouterProvider router={router} />
         <ToastContainer />
      </UserProvider>
   </React.StrictMode>
);
