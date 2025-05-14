import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Transition from "./transition";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Transition key={location.pathname}>
        <Outlet />
      </Transition>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
