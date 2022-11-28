import draftToHtml from "draftjs-to-html";

const AnunciosCard = ({ anuncios }) => {
  return (
    <>
      {anuncios.map((anuncio) => (
        <div
          key={anuncio.id}
          className=" w-full flex h-40 text-gray-400 hover:text-gray-600 items-center text-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: draftToHtml(JSON.parse(anuncio.anuncio)),
            }}
          />
        </div>
      ))}
    </>
  );
};

export default AnunciosCard;
