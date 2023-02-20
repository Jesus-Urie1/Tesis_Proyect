import { useState } from "react";
import * as XLSL from "xlsx";
import {
  RiUploadLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

//Redux
import { useDispatch } from "react-redux";
import { nuevoGrupo } from "../store/Slices/Admin";
import { setNuevoGrupo, setRegistrarAlumno } from "../store/Slices/Admin";
import { setNuevoGrupos, setRegistrarAlumnos } from "../store/Slices/Maestros";
const NuevoGrupo = ({ onClose }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [grupo, setGrupo] = useState("");
  const [alumnosRegistrados, setAlumnosRegistrados] = useState(false);
  const [grupoRegistrado, setGrupoRegistrado] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    let hojas = [];
    if (name === "file") {
      let reader = new FileReader();
      reader.readAsArrayBuffer(target.files[0]);
      reader.onloadend = (e) => {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSL.read(data, { type: "array" });

        workbook.SheetNames.forEach(function (sheetNames) {
          //Aqui se agrega al objeto
          var XL_row_object = XLSL.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetNames]
          );
          hojas.push({
            data: XL_row_object,
            sheetNames,
          });
        });

        setAlumnos(hojas[0].data);
        setAlumnosRegistrados(false);
        setGrupoRegistrado(false);
      };
      alumnosRegistrados;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = dispatch(
      nuevoGrupo(
        {
          grupo,
          alumnos,
        },
        token
      )
    );
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store

        dispatch(setNuevoGrupo(r.response.data.grupo));
        dispatch(setNuevoGrupos(r.response.data.grupo));
        dispatch(setRegistrarAlumno(r.response.data.alumnos));
        dispatch(setRegistrarAlumnos(r.response.data.alumnos));
        setGrupo("");
        setAlumnos([]);
        onClose();
        setAlumnosRegistrados(false);
        setGrupoRegistrado(false);
      } else {
        if (r.response.data.msg === "Grupo ya registrado") {
          setGrupoRegistrado(true);
          setAlumnosRegistrados(false);
        }
        if (r.response.data.msg === "Alumno ya registrado") {
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
          <h1 className="font-bold mb-4 text-2xl">Registrar Grupo</h1>

          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            type="text"
            placeholder="1A"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
          />

          <label
            htmlFor="file"
            className="flex justify-center items-center py-3 px-4 bg-green-800 w-full mb-3  borde text-white rounded font-bold hover:bg-green-700 cursor-pointer"
          >
            <input
              required
              className="hidden "
              type="file"
              name="file"
              id="file"
              onChange={handleInputChange}
              placeholder="Archivo de excel"
            />
            <RiUploadLine className="mr-2 font-bold w-5 h-5" />
            Cargar Alumnos
          </label>
          {alumnos.length !== 0 &&
            !alumnosRegistrados &&
            !grupoRegistrado &&
            (!alumnos[0].alumno ? (
              <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
                <RiCloseCircleLine className="h-5 w-5 mr-1" />
                Hubo un error, intenta otro archivo!
              </div>
            ) : (
              <div className="flex justify-center items-center text-green-800 mb-3 font-bold">
                <RiCheckboxCircleLine className="w-5 h-5 mr-1 " />
                Alumnos Cargados Correctamente!
              </div>
            ))}
          {alumnosRegistrados && (
            <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
              <RiCloseCircleLine className="h-5 w-5 mr-1" />
              Alumnos ya registrados, intenta otro archivo!
            </div>
          )}
          {grupoRegistrado && (
            <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
              <RiCloseCircleLine className="h-5 w-5 mr-1" />
              Grupo ya registrado!
            </div>
          )}
          <button
            className={
              (alumnos.length === 0 || alumnosRegistrados
                ? "bg-gray-500 cursor-not-allowed disabled"
                : "bg-green-800 hover:bg-green-700") +
              ` w-full py-2 rounded text-white font-bold`
            }
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};

export default NuevoGrupo;
