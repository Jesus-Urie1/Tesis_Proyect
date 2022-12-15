import { useState } from "react";
import FormActitudes from "./FormActitudes";
import Tabla from "./Tabla";

const TablaAlumnos = ({ alumnos, grupo }) => {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState("");

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-9/12">
          <div className="mt-5">
            <p className="font-bold text-green-700 text-lg">
              Alumnos: {alumnos.length}
            </p>
          </div>

          <Tabla setAlumnoSeleccionado={setAlumnoSeleccionado} />
        </div>
        <FormActitudes grupo={grupo} alumnoSeleccionado={alumnoSeleccionado} />
      </div>
    </div>
  );
};

export default TablaAlumnos;
