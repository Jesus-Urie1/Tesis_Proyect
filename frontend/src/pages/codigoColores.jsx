//import AnunciosCard from "../components/AnunciosCard";
// //Editor
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// const [anuncio, setAnuncio] = useState(() => EditorState.createEmpty());
// const [editor, setEditor] = useState(false);
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
{
  /* <div className="w-3/4 h-10">
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
            </div> */
}

<tbody>
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        Jesus Uriel Velazquez Palomino
      </p>
    </td>

    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
        ></span>
        <span class="relative">Conducta</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
        ></span>
        <span class="relative">Irresponsabilidad</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-yellow-100 opacity-50 rounded-full"
        ></span>
        <span class="relative">Resago</span>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
  </tr>
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        Jose Alfredo Main Neeko
      </p>
    </td>

    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
        ></span>
        <span class="relative">Conducta</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
        ></span>
        <span class="relative">Irresponsabilidad</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-300 opacity-50 rounded-full"
        ></span>
        <span class="relative">Resago</span>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
  </tr>
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        Raul Alfonso Jimenez Gomez
      </p>
    </td>

    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
        ></span>
        <span class="relative">Conducta</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
        ></span>
        <span class="relative">Irresponsabilidad</span>
      </span>
      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-red-500 opacity-50 rounded-full"
        ></span>
        <span class="relative">Resago</span>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
  </tr>
</tbody>;
