import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./pages/pageLayout";
import ContactUs from "./pages/contactusPage";
import transition from "./components/transition";
import { AnimatePresence } from "motion/react";
import Transition from "./components/transition";
import AnimatedRoutes from "./components/Animatedroutes";


const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedRoutes />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="" element={} errorElement={}/>
      <Route path="" element={} errorElement={}/> */}
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <Transition>
      <AnimatePresence mode="wait">
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AnimatePresence>
    </Transition>

  )
}

export default App