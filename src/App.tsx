import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Layout from "./pages/pageLayout";
import ContactUs from "./pages/contactusPage";
// import ErrorPage from "./pages/errorPage"; // Uncomment when ErrorPage is created
import Transition from "./components/transition";
import AnimatedRoutes from "./components/Animatedroutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedRoutes />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="*" element={<ErrorPage />} /> */} {/* Uncomment when ErrorPage is created */}
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <Transition>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </Transition>
  );
};

export default App;