import { useState } from "react";
import * as XLSL from "xlsx";
import {
  RiUploadLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";

//Redux
import { useDispatch } from "react-redux";
import { registrarMaestro } from "../store/Slices/Admin";
import { setRegistrarMaestros } from "../store/Slices/Admin";

const NuevoMaestro = ({ onClose }) => {
  const [maestros, setMaestros] = useState([]);
  const [maestrosRegistrados, setMaestroRegistrado] = useState(false);
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

        setMaestros(hojas[0].data);
        setMaestroRegistrado(false);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = dispatch(
      registrarMaestro(
        {
          maestros,
        },
        token
      )
    );
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        console.log(r);
        dispatch(setRegistrarMaestros(r.response.data));

        setMaestros([]);
        onClose();
        setMaestroRegistrado(false);
      } else {
        console.log(r);
        if (r.response.data.msg === "Maestro ya registrado") {
          setMaestroRegistrado(true);
        }
      }
    });
  };

  return (
    <>
      <form className="w-full max-w-lg p-10" onSubmit={handleSubmit}>
        <div className="grid place-items-center text-center">
          <h1 className="font-bold mb-4 text-2xl">Registrar Maestros</h1>

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
            Cargar Maestros
          </label>
          {maestros.length !== 0 &&
            !maestrosRegistrados &&
            (!maestros[0].maestro ? (
              <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
                <RiCloseCircleLine className="h-5 w-5 mr-1" />
                Hubo un error, intenta otro archivo!
              </div>
            ) : (
              <div className="flex justify-center items-center text-green-800 mb-3 font-bold">
                <RiCheckboxCircleLine className="w-5 h-5 mr-1 " />
                Maestros Cargados Correctamente!
              </div>
            ))}
          {maestrosRegistrados && (
            <div className="flex justify-center items-center text-red-800 mb-3 font-bold">
              <RiCloseCircleLine className="h-5 w-5 mr-1" />
              Maestros ya registrados, intenta otro archivo!
            </div>
          )}

          <button
            className={
              (maestros.length === 0 || maestrosRegistrados
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

export default NuevoMaestro;
