import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // pathname es la ruta actual (ej: /aclaraciones)
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que el pathname cambie, el scroll vuelve arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;