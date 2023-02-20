import { useSelector } from "react-redux";
import { useState } from "react";
import { RiGroupLine, RiUser3Line } from "react-icons/ri";

//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
const TablaAlumnosComun = ({ grupo }) => {
  const redux = useSelector((state) => state.maestro);
  const [startDate, setStartDate] = useState(new Date());
  const [tablaMaestros, setTablaMaestros] = useState(true);

  return (
    <form className="w-11/12 pt-10">
      <div className="flex justify-end items-center">
        <div
          className="bg-gradient-to-r from-green-700 to-lime-600 border-2 border-white rounded-md mr-1 cursor-pointer"
          onClick={() => setTablaMaestros(!tablaMaestros)}
        >
          {tablaMaestros ? (
            <RiGroupLine className="h-8 w-8 text-white font-medium p-1" />
          ) : (
            <RiUser3Line className="h-8 w-8 text-white font-medium p-1" />
          )}
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="font-medium border-2 text-center w-44 cursor-pointer bg-gradient-to-r from-green-700 to-lime-600 text-white rounded-md p-1 hover:bg-green-500"
          />
        </div>
      </div>
      <div className="py-1 ">
        <table className="w-full leading-normal  ">
          <thead className="bg-gradient-to-r from-green-700 to-lime-600 ">
            {/*Columnas del alumno */}
            <th className="text-center text-sm font-semibold text-white uppercase tracking-wider">
              {grupo}
            </th>
            {redux.maestros.length !== 0 &&
              tablaMaestros &&
              redux.maestros.map((maestro) => (
                <th className=" p-2  text-center text-sm font-semibold text-white uppercase tracking-wider">
                  {maestro.nombre}
                </th>
              ))}
            {redux.maestros.length !== 0 && !tablaMaestros && (
              <th className=" p-2  text-center text-sm font-semibold text-white uppercase tracking-wider">
                {redux.auth.nombre}
              </th>
            )}
          </thead>

          <tbody className="">
            {redux.alumnos.length !== 0 &&
              redux.alumnos.map((alumno) => (
                <tr key={alumno._id}>
                  <td className=" border-b border-green-500 text-sm break-all whitespace-nowrap border-r border-l">
                    <p className="text-gray-900 text-center ">
                      {alumno.nombre}
                    </p>
                  </td>
                  {redux.maestros.length !== 0 &&
                    tablaMaestros &&
                    redux.maestros.map((maestroA) => (
                      <td className="p-7 border-b border-green-500 text-sm break-all whitespace-nowrap border-r">
                        <div className="flex flex-wrap">
                          {alumno.conductas.map((conducta) => {
                            if (
                              conducta.tipo === "red" &&
                              conducta.maestro === maestroA.email &&
                              conducta.fecha === moment(startDate).format("L")
                            ) {
                              return (
                                <div className="mt-3 mr-2 ">
                                  <button
                                    className=" px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-red-800 to-red-500 rounded-lg"
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
                              conducta.maestro === maestroA.email &&
                              conducta.fecha === moment(startDate).format("L")
                            ) {
                              return (
                                <div className="mt-3 mr-2 ">
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
                              conducta.maestro === maestroA.email &&
                              conducta.fecha === moment(startDate).format("L")
                            ) {
                              return (
                                <div className="mt-3 mr-2">
                                  <button
                                    className="  px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-blue-700 to-cyan-700 rounded-lg"
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
                    ))}
                  {redux.maestros.length !== 0 && !tablaMaestros && (
                    <td className="p-7 border-b border-green-500 text-sm break-all whitespace-nowrap border-r">
                      <div className="flex flex-wrap">
                        {alumno.conductas.map((conducta) => {
                          if (
                            conducta.tipo === "red" &&
                            conducta.maestro === redux.auth.email &&
                            conducta.fecha === moment(startDate).format("L")
                          ) {
                            return (
                              <div className="mt-3 mr-2 ">
                                <button
                                  className=" px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-red-800 to-red-500 rounded-lg"
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
                            conducta.maestro === redux.auth.email &&
                            conducta.fecha === moment(startDate).format("L")
                          ) {
                            return (
                              <div className="mt-3 mr-2 ">
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
                            conducta.maestro === redux.auth.email &&
                            conducta.fecha === moment(startDate).format("L")
                          ) {
                            return (
                              <div className="mt-3 mr-2">
                                <button
                                  className="  px-3 py-1 font-semibold text-white leading-tight bg-gradient-to-r from-blue-700 to-cyan-700 rounded-lg"
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
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default TablaAlumnosComun;
