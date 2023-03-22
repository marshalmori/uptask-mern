import FomularioProyecto from "../components/FomularioProyecto";

const NuevoProyecto = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crear Proyecto</h1>

      <div className="mt-10 flex justify-center">
        <FomularioProyecto />
      </div>
    </>
  );
};

export default NuevoProyecto;
