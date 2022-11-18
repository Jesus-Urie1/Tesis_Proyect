import { useState } from "react";
import TopBarSalonDeClase from "../components/TopBarSalonDeClase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { infoClase } from "../store/Slices/Clases";
import { setInfoClase } from "../store/Slices/Clases";

const SalonDeClases = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  const [editor, setEditor] = useState(false);
  const params = useParams();
  const { codigo } = params;

  const dispatch = useDispatch();

  //Se obtiene el arreglo de las clases de la store
  const infoClaseRedux = useSelector((state) => state.clases);

  useEffect(() => {
    //Se obtienen las clases
    const response = dispatch(infoClase(codigo));

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setInfoClase(r.response.data));
      }
    });
  }, [dispatch]);

  return (
    <>
      {infoClaseRedux.infoClase.codigo === codigo && (
        <TopBarSalonDeClase
          nombre={infoClaseRedux.infoClase.nombre}
          grado={infoClaseRedux.infoClase.grado}
          grupo={infoClaseRedux.infoClase.grupo}
          setShowClassModal={setShowClassModal}
        />
      )}
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
                  {" "}
                </div>
              )}

              <div className=" w-full flex h-40 text-gray-400 hover:text-gray-600 items-center text-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2">
                <h1 className="ml-4 w-full">Aqui apareceran tus anuncios</h1>
              </div>
            </div>
            <div className="w-1/4 mt-2 ml-5">
              <div className="w-full rounded">
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
