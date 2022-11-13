import { useState } from "react";
import TopBarSalonDeClase from "../components/TopBarSalonDeClase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import clientesAxios from "../config/axios";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SalonDeClases = () => {
  const [showClassModal, setShowClassModal] = useState(false);
  const [infoClase, setInfoClase] = useState({});
  const [editor, setEditor] = useState(false);
  const params = useParams();
  const { codigo } = params;

  useEffect(() => {
    const obtenerInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const url = `/infoClase/${codigo}`;
        const { data } = await clientesAxios(url, config);
        setInfoClase(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerInfo();
  }, []);

  return (
    <>
      <TopBarSalonDeClase
        nombre={infoClase.nombre}
        grado={infoClase.grado}
        grupo={infoClase.grupo}
        setShowClassModal={setShowClassModal}
      />
      <div className="flex justify-center">
        <div className="w-9/12">
          <div className="flex justify-between">
            <div className="w-3/4 h-10">
              <div
                onClick={(e) => setEditor(!editor)}
                className=" w-full flex text-gray-400 hover:text-gray-600 items-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2"
              >
                <button className="rounded-full">
                  <img
                    src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
                    className="w-9 h-9 rounded-full"
                  />
                </button>
                <h1 className="ml-4 w-full">Anunciar algo a tu clase</h1>
              </div>
              {editor && (
                <div className=" w-full flex text-gray-400 hover:text-gray-600 items-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                </div>
              )}

              <div className=" w-full flex h-40 text-gray-400 hover:text-gray-600 items-center text-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2">
                <h1 className="ml-4 w-full">Aqui apareceran tus anuncios</h1>
              </div>
            </div>
            <div className="w-1/4 mt-2 ml-5">
              <div className="w-full rounded bg-white">
                <div className="p-5 rounded-xl shadow-xl bg-white border-2 mb-3">
                  <h3 className="font-semibold">Código de clase </h3>
                  <h2>{codigo}</h2>
                </div>
                <div className="p-5 rounded-xl shadow-xl bg-white border-2 ">
                  <h3 className="font-semibold">Próximas entregas</h3>
                  <h2>we342r</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalonDeClases;
