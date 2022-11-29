import { useState, useEffect } from "react";
import TopBarSalonDeClase from "../components/TopBarSalonDeClase";
import { useParams } from "react-router-dom";

//import AnunciosCard from "../components/AnunciosCard";
// //Editor
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { infoClase, nuevoAnuncio } from "../store/Slices/Clases";
import { setInfoClase, setNuevoAnuncio } from "../store/Slices/Clases";

const SalonDeClases = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  // const [anuncio, setAnuncio] = useState(() => EditorState.createEmpty());
  // const [editor, setEditor] = useState(false);

  const params = useParams();

  const { grupo } = params;

  const dispatch = useDispatch();

  //Se obtiene el arreglo de las clases de la store
  const infoClaseRedux = useSelector((state) => state.clases);

  useEffect(() => {
    //Se obtienen las clases
    const response = dispatch(infoClase(grupo));

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setInfoClase(r.response.data));
      }
    });
  }, [dispatch]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //Se publica el anuncio
  //   const response = dispatch(
  //     nuevoAnuncio({
  //       codigo,
  //       anuncio: JSON.stringify(convertToRaw(anuncio.getCurrentContent())),
  //     })
  //   );
  //   //Se obtiene respuesta
  //   response.then((r) => {
  //     if (r.response.status === 200) {
  //       //Push a la store
  //       dispatch(setNuevoAnuncio(r.response.data));
  //     }
  //   });
  //   setAnuncio(() => EditorState.createEmpty());
  //   setEditor(!editor);
  // };

  return (
    <>
      {infoClaseRedux.infoClase.grupo === grupo && (
        <TopBarSalonDeClase grupo={infoClaseRedux.infoClase.grupo} />
      )}

      <div className="flex justify-center">
        <div className="w-9/12">
          <div className="flex justify-between">
            {/* <div className="w-3/4 h-10">
              {editor ? (
                <form
                  onSubmit={handleSubmit}
                  className=" text-gray-400 hover:text-gray-600  p-4 rounded-xl shadow-xl bg-white border-2 mt-2"
                >
                  <Editor
                    editorState={anuncio}
                    onEditorStateChange={setAnuncio}
                  />
                  <div className="flex items-center justify-end">
                    <button
                      className="hover:border-black border-2 text-black mr-3 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                      onClick={(e) => setEditor(!editor)}
                    >
                      Cancelar
                    </button>
                    {convertToRaw(anuncio.getCurrentContent()).blocks[0]
                      .text === "" ? (
                      <button
                        disabled
                        className="cursor-not-allowed bg-gray-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                      >
                        Publicar
                      </button>
                    ) : (
                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Publicar
                      </button>
                    )}
                  </div>
                </form>
              ) : (
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
              )}
              {infoClaseRedux.infoClase.grupo === grupo && (
                <AnunciosCard anuncios={infoClaseRedux.infoClase.anuncios} />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SalonDeClases;
