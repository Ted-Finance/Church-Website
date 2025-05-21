import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./pages/pageLayout";
import ContactUs from "./pages/contactusPage";
import transition from "./components/transition";
import { AnimatePresence } from "motion/react";
import Transition from "./components/transition";
import AnimatedRoutes from "./components/Animatedroutes";
import SermonPage from "./pages/SermonPage";
import AboutUs from "./pages/aboutUs";
import Pastors from "./pages/pastorsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedRoutes />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sermons" element={<SermonPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pastors" element={<Pastors />} />
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