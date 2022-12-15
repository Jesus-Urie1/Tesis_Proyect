import { useState } from "react";
import useAuth from "../hooks/useAuth";

//Redux
import { nuevaConducta, setAuth } from "../store/Slices/Maestros";
import { useDispatch } from "react-redux";

const NuevaActitud = ({ grupo, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");

  const { auth } = useAuth();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Se publica la nuevaActitud
    const response = dispatch(
      nuevaConducta({
        email: auth.email,
        tipo,
        titulo,
        descripcion,
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store

        dispatch(setAuth(r.response.data));
      }
    });

    onClose();
  };
  return (
    <>
      <form className="w-full max-w-lg p-10" onSubmit={handleSubmit}>
        <div className="grid place-items-center">
          <div className=" text-2xl mb-5 font-bold">
            <h1>Nueva Conducta</h1>
          </div>

          <div
            className="flex justify-around items-center mb-5"
            onChange={(e) => {
              setTipo(e.target.value);
            }}
          >
            <div className="flex mr-5">
              <label className="text-xl text-red-700 font-bold">
                Negativa
                <input
                  required
                  className="ml-1 "
                  type="radio"
                  value="red"
                  name={"color"}
                />
              </label>
            </div>
            <div className="flex mr-5">
              <label className="text-xl text-cyan-700 font-bold">
                Discapacidad
                <input
                  required
                  className="ml-1 "
                  type="radio"
                  value="blue"
                  name={"color"}
                />
              </label>
            </div>
            <div className="flex mr-5">
              <label className="text-xl text-green-700 font-bold">
                Positiva
                <input
                  required
                  className="ml-1 "
                  type="radio"
                  value="green"
                  name={"color"}
                />
              </label>
            </div>
          </div>
          <div className="font-bold text-1xl mb-5">
            <input
              type="text"
              className="text-center border-2 border-gray-400 rounded"
              placeholder="Titulo"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
            ></input>
          </div>
          <div className=" text-1xl mb-5">
            <textarea
              type="text"
              className="text-center border-2 border-gray-400 rounded"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="font-bold text-1xl mb-5">
            <button
              className="bg-green-700 py-1 px-7 rounded text-white hover:bg-green-600"
              type="submit"
            >
              Listo
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NuevaActitud;
