import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { registrar } from "../store/Slices/Clases";
import { setRegistrarMaestro } from "../store/Slices/Clases";

const FormMaestro = ({ onClose }) => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [numCuenta, setCuenta] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = dispatch(
      registrar({
        nombre,
        apellidos,
        email,
        numCuenta,
        tipoCuenta: "maestro",
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setRegistrarMaestro(r.response.data));
      }
    });

    onClose();
  };
  return (
    <>
      <form class="w-full max-w-lg p-10" onSubmit={handleSubmit}>
        <div class="gird place-items-center text-center">
          <h1 className="font-bold mb-4 text-2xl">Registrar Maestro</h1>

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="text"
            placeholder="Nombre(s) "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="email"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="number"
            placeholder="No.Cuenta"
            value={numCuenta}
            onChange={(e) => setCuenta(e.target.value)}
          />

          <button
            className="bg-green-700 w-full py-2 rounded text-white font-bold hover:bg-green-600"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormMaestro;
