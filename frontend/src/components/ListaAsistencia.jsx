import { useState } from "react";
import { BiUserCheck, BiUserX, BiUserMinus } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Redux
import { useSelector } from "react-redux";

const ListaAsistencia = ({ grupo }) => {
  const { auth } = useAuth();
  let grupoActual, maestro;

  const infoGrupoRedux = useSelector((state) => state.clases);
  if (infoGrupoRedux) {
    grupoActual = infoGrupoRedux.clases.filter((clase) => {
      if (clase.grupo === grupo) return clase;
    });
  }

  const maestros = grupoActual[0].maestros;
  if (maestros) {
    maestro = maestros.filter((m) => {
      return m._id === auth._id;
    });
  }
  const numListas = maestro[0].listasAsistencia.length;

  const [startDate, setStartDate] = useState(
    new Date(maestro[0].listasAsistencia[numListas - 1].fecha)
  );
  console.log(maestro[0].listasAsistencia);
  return (
    <div className="container mx-auto px-4 sm:px-8 ">
      <div className="py-8">
        <div className="flex justify-end items-center">
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="font-medium border-2 text-center w-44 bg-green-600 text-white rounded-md p-1 hover:bg-green-500"
            />
          </div>
        </div>
        <form>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
            <div className="inline-block min-w-full shadow-md rounded-lg">
              <table className="min-w-full leading-normal ">
                <thead className="bg-green-300">
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Alumno
                    </th>

                    <th className="border-b-2 border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/01/2022
                    </th>
                    <th className="border-b-2 border-gray-200 text-xs font-semibold text-gray-600 tracking-wider">
                      12/02/2022
                    </th>
                    <th className="border-b-2 border-gray-200 text-xs font-semibold text-gray-600 tracking-wider">
                      12/03/2022
                    </th>
                    <th className="border-b-2 border-gray-200 text-xs font-semibold text-gray-600 tracking-wider">
                      12/04/2022
                    </th>
                    <th className="border-b-2 border-gray-200 text-xs font-semibold text-gray-600 tracking-wider">
                      12/05/2022
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {maestro[0].listasAsistencia.map((datos, index) => (
                    <tr key={index}>
                      <td className="border-b border-gray-200 bg-white text-sm ">
                        <p className="p-3 text-gray-900 whitespace-no-wrap ">
                          {`Nombre Alumno${index} Apellidos Alumno${index}`}
                        </p>
                      </td>

                      <td className="border-b border-gray-200 bg-white text-sm ">
                        <div className="flex justify-center">
                          <BiUserCheck className="w-10 h-10 text-green-700" />
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <BiUserX className="w-10 h-10 text-red-700" />
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <BiUserCheck className="w-10 h-10 text-green-700" />
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <BiUserMinus className="w-10 h-10 text-gray-700" />
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <BiUserCheck className="w-10 h-10 text-green-700" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListaAsistencia;
