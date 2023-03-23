import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import FomularioProyecto from "../components/FomularioProyecto";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;

  if (cargando) return "Cargando...";

  return (
    <>
      <h1 className="font-black text-3xl">Editar Proyecto: {nombre}</h1>
      <div className="mt-10 flex justify-center">
        <FomularioProyecto />
      </div>
    </>
  );
};

export default EditarProyecto;
