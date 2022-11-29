import React from "react";
import { useState } from "react";

const TablaAlumnos = ({ estudiantes, asistencia, reporte }) => {
  const [formulario, setFormulario] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-8 ">
      <div className="py-8 ">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
          <div className="inline-block min-w-full shadow-md rounded-lg">
            <table className="min-w-full leading-normal ">
              <thead className="bg-green-200">
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Alumno
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    No. cuenta
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Correo ucol
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Estado
                  </th>

                  {/** Checkbox y header dependen de Asistencia */}
                  <th className="flex justify-center items-center bg-purple-200 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <div>
                      <p>Asistencia</p>
                      <div className="ml-4  text-gray-400">
                        <p>Si | No</p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/**Hover depende de Reporte  */}
                {estudiantes.map((estudiante) => (
                  <tr className=" hover:bg-slate-200" key={estudiante._id}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                      <p className="text-gray-900 ">
                        {estudiante.nombre} {estudiante.apellidos}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <p className="text-gray-900 ">{estudiante.numCuenta}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-gray-900 ">{estudiante.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Excelente</span>
                      </span>
                    </td>
                    <td className=" py-5 border-b border-gray-200  text-sm ">
                      <div className="flex justify-around ">
                        <div className="">
                          <span className="text-sm">Si</span>
                          <input className="ml-1 " type="checkbox" />
                        </div>
                        <div className="mr-5">
                          <span className="text-sm">No</span>
                          <input className="ml-1 " type="checkbox" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {/* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jesus Uriel Velazquez Palomino
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">20164120</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      jvelazques@ucol.mx
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Conducta</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Irresponsabilidad</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Resago</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jose Alfredo Main Neeko
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">20161021</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      hvelasco0@ucol.mx
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Conducta</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Irresponsabilidad</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Resago</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Raul Alfonso Jimenez Gomez
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">20161021</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Rjimenez9@ucol.mx
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Conducta</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Irresponsabilidad</span>
                    </span>
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Resago</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaAlumnos;
