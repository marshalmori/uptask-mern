import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyecto } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  return <div>Proyecto</div>;
};

export default Proyecto;
