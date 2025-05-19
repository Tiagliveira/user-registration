import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"

import ListUsers from "./pages/Home/ListUsers/index.jsx"

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />
},
{
    path: "/listagem-de-Usuarios",
    element: <ListUsers />
}

])

export default router