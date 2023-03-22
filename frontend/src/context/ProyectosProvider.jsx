import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);

  return (
    <ProyectoContext.Provider value={{ proyectos }}>
      {children}
    </ProyectoContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
