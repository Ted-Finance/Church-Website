import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./pages/pageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      {/* <Route path="" element={} errorElement={}/>
      <Route path="" element={} errorElement={}/>
      <Route path="" element={} errorElement={}/> */}
    </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App