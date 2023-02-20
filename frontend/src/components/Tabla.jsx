import { useState } from "react";
import { useEffect } from "react";
import { RiDraftLine } from "react-icons/ri";

//Redux
import { useSelector } from "react-redux";

const Tabla = ({ setAlumnoSeleccionado }) => {
  const [alumnos, setAlumnos] = useState([]);
  const redux = useSelector((state) => state.maestro);
  useEffect(() => {
    if (redux.alumnos.length !== 0) {
      const values = [...redux.alumnos];
      values.sort((a, b) => a.nombre.localeCompare(b.nombre));

      setAlumnos(values);
    }
  }, [redux.alumnos]);

  return (
    <form>
      <div className="py-1 ">
        <table className="w-full leading-normal  ">
          <thead className="bg-gradient-to-r from-green-700 to-lime-600 ">
            {/*Columnas del alumno */}
            <tr>
              <th className="w-1/3 p-2 rounded-l text-center text-sm font-semibold text-white uppercase tracking-wider">
                Alumno
              </th>

              <th className="w-2/3 rounded-r text-center text-sm font-semibold text-white uppercase tracking-wider">
                Conductas
              </th>
            </tr>
          </thead>

          <tbody className="">
            {redux.alumnos.length !== 0 &&
              alumnos.map((alumno) => (
                <tr key={alumno._id}>
                  <td className=" border-b border-green-500 text-sm break-all whitespace-nowrap">
                    <p className="text-gray-900 text-center ">
                      {alumno.nombre}
                    </p>
                  </td>

                  {/*conductas de cada alumno */}
                  <td className="p-7 border-b border-green-500 text-sm break-all whitespace-nowrap ">
                    <div className="flex flex-wrap">
                      {alumno.conductas.map((conducta, index) => {
                        if (
                          conducta.tipo === "red" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2" key={index}>
                              <button
                                className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-red-700 to-red-600 rounded-lg"
                                disabled
                              >
                                <span title={conducta.descripcion}>
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }

                        if (
                          conducta.tipo === "green" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2 " key={index}>
                              <button
                                className="px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-green-700 to-lime-600 rounded-lg"
                                disabled
                              >
                                <span title={conducta.descripcion}>
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }
                        if (
                          conducta.tipo === "blue" &&
                          conducta.maestro === redux.auth.email
                        ) {
                          return (
                            <div className="mt-3 mr-2" key={index}>
                              <button
                                className="  px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-lg"
                                disabled
                              >
                                <span title={conducta.descripcion}>
                                  {conducta.titulo}
                                </span>
                              </button>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </td>

                  <td>
                    <div
                      onChange={(e) => setAlumnoSeleccionado(e.target.value)}
                      className="flex justify-end mb-5"
                    >
                      <input
                        required
                        id="id"
                        className=" w-5 h-5 ml-1 z-10 absolute opacity-0 peer cursor-pointer"
                        type="radio"
                        value={alumno.email}
                        name="numCuenta"
                      />
                      <RiDraftLine className="w-5 h-5 ml-1 z-0 absolute peer-checked:text-white peer-checked:bg-green-700 peer-checked:rounded" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Tabla;
