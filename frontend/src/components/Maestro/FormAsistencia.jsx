import { RiCheckDoubleFill, RiDraftLine } from "react-icons/ri";
import { useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { nuevaListaA } from "../../store/Slices/Maestros";
import { setNuevaListaA } from "../../store/Slices/Maestros";

const FormAsistencia = ({
  grupo,
  asistenciaOpcion,
  setAsistenciaOpcion,
  actitudesOpcion,
  setAlumnoSeleccionado,
  alumnoSeleccionado,
}) => {
  const [listaAsistencia, setFormAsistencia] = useState({});

  const redux = useSelector((state) => state.clases);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Se publica la lista
    const response = dispatch(
      nuevaListaA({
        grupo,
        lista: listaAsistencia,
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setNuevaListaA(r.response.data));
      }
    });

    setFormAsistencia({});
    setAsistenciaOpcion(!asistenciaOpcion);
  };

  return (
    <>
      {/* 
            Columna de lista de Asistencia
            {asistenciaOpcion && (
              <th className="bg-green-600 py-2 rounded-r border-l-2 border-green-600 text-xs font-semibold text-green-700 uppercase tracking-wider">
                <div className="text-center text-white">
                  Asistencia
                  <div className="ml-4 text-white ">
                    <p>
                      <span className="text-white font-bold">Si</span> |{" "}
                      <span className="text-red-700 font-bold">No</span> |{" "}
                      <span className="text-gray-700 font-bold">Retardo</span>{" "}
                    </p>
                  </div>
                </div>
              </th>
            )} */}
      {/* Reactivos de la lista de asistencia
        {asistenciaOpcion && (
          <td className=" p-5  border-b border-green-500 text-sm ">
            <div
              className="flex justify-center"
              onChange={(e) => {
                setFormAsistencia({
                  ...listaAsistencia,
                  [estudiante.numCuenta]: {
                    nombre: estudiante.nombre,
                    apellidos: estudiante.apellidos,
                    asistenciaOpcion: e.target.value,
                  },
                });
              }}
            >
              <div className="flex">
                <label className="text-sm text-green-700 font-bold ">
                  Si
                  <input
                    required
                    className="ml-1 "
                    type="radio"
                    value="si"
                    name={estudiante.numCuenta}
                  />
                </label>
              </div>
              <div>
                <label className="text-sm text-red-700 font-bold">
                  No
                  <input
                    required
                    className="ml-1 "
                    type="radio"
                    value="no"
                    name={estudiante.numCuenta}
                  />
                </label>
              </div>
              <div>
                <label className="text-sm text-gray-700 font-bold">
                  R
                  <input
                    required
                    className="ml-1 "
                    type="radio"
                    value="r"
                    name={estudiante.numCuenta}
                  />
                </label>
              </div>
            </div>
          </td>
        )} */}

      {/* {asistenciaOpcion && (
      <div className="flex justify-end items-center mt-3">
        <button
          className="hover:border-black border-2 text-black mr-3 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => setAsistenciaOpcion(!asistenciaOpcion)}
        >
          Cancelar
        </button>
        <button
          className="flex justify-center items-center bg-green-600 rounded-md text-white p-2 hover:bg-green-500 mr-3"
          type="submit"
        >
          Terminar
          <RiCheckDoubleFill className="w-5 h-5 ml-1" />
        </button>
      </div>
    )} */}
    </>
  );
};

export default FormAsistencia;
