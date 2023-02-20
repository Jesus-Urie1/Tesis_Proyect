import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
//Redux
import { useDispatch } from "react-redux";
import { entrarGrupo } from "../../store/Slices/Maestros";
import { setEntrarGrupo } from "../../store/Slices/Maestros";
const EntrarGrupo = ({ onClose2, onClose }) => {
  const [grupo, setGrupo] = useState("");
  const [alumnosRegistrados, setAlumnosRegistrados] = useState(false);
  const [grupoRegistrado, setGrupoRegistrado] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = dispatch(
      entrarGrupo({
        grupo,
      })
    );

    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        console.log(r);
        dispatch(setEntrarGrupo(r.response.data));
        setGrupo("");
        onClose();
        onClose2();
        setAlumnosRegistrados(false);
        setGrupoRegistrado(false);
      } else {
        if (r.response.data.msg === "No se encontró el grupo") {
          setGrupoRegistrado(true);
          setAlumnosRegistrados(false);
        }
        if (r.response.data.msg === "Ya estas dentro del grupo") {
          setAlumnosRegistrados(true);
          setGrupoRegistrado(false);
        }
      }
    });
  };

  return (
    <>
      <form className="w-full max-w-lg p-10" onSubmit={handleSubmit}>
        <div className="grid place-items-center text-center">
          <h1 className="font-bold mb-4 text-2xl">Entrar a una clase</h1>

          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="text"
            placeholder="1A"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
          />

          {alumnosRegistrados && (
            <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
              <RiCloseCircleLine className="h-5 w-5 mr-1" />
              Ya estas dentro del grupo
            </div>
          )}
          {grupoRegistrado && (
            <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
              <RiCloseCircleLine className="h-5 w-5 mr-1" />
              No se encontró el grupo
            </div>
          )}

          <button
            className="bg-green-800 w-full py-2 rounded text-white font-bold hover:bg-green-700 peer-checked:bg-gray-200"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  );
};

export default EntrarGrupo;
