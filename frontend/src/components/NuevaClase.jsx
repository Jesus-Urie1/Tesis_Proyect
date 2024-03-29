import { useState } from "react";
import Alerta from "../components/Alerta";
import clientesAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

//Redux
import { crearClase } from "../store/Slices/Clases";
import { useDispatch, useSelector } from "react-redux";
import { setCrearClase } from "../store/Slices/Clases";

const NuevaClase = () => {
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState(0);
  const [grupo, setGrupo] = useState("");
  const [alerta, setAlerta] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { msg } = alerta;

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, grupo].includes("") || grado <= 0) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //Se crea la clase
    const response = dispatch(
      crearClase({
        nombre,
        grado,
        grupo,
      })
    );
    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Push a la store
        dispatch(setCrearClase(r.response.data));
        //Mandar al usuario al componente
        navigate(`salonDeClases/${r.response.data.codigo}`);
      } else {
        //Error si ya existe la clase
        setAlerta({
          msg: r.response.data.msg,
          error: true,
        });
      }
    });
  };

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-8 mt-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-5"
            htmlFor="asignatura"
          >
            Ingrese el nombre de la asignatura
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="asignatura"
            type="text"
            placeholder="Matematicas"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-6 flex justify-between">
          <div className="flex">
            <label
              className="block text-gray-700 text-sm font-bold pt-2 mr-5"
              htmlFor="grado"
            >
              Grado :
            </label>
            <input
              className="shadow appearance-none border  rounded w-3/12 p-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="grado"
              type="number"
              placeholder="2"
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
            />
            <p className="text-red-500 text-xs italic hidden">
              Porfavor añada un grado
            </p>
          </div>
          <div className="flex justify-end">
            <label
              className="block text-gray-700 text-sm font-bold pt-2 mr-5"
              htmlFor="grado"
            >
              Grupo :
            </label>
            <input
              className="shadow appearance-none border  rounded w-3/12 p-2  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="grupo"
              type="text"
              placeholder="A"
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
            />
            <p className="text-red-500 text-xs italic hidden">
              Porfavor añada un grupo
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear clase
          </button>
        </div>
      </form>
    </>
  );
};

export default NuevaClase;
