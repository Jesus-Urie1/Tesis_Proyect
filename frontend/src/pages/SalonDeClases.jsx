import { useState } from "react";
import TopBarSalonDeClase from "../components/TopBarSalonDeClase";

const SalonDeClases = () => {
  const [showClassModal, setShowClassModal] = useState(false);
  return (
    <>
      <TopBarSalonDeClase setShowClassModal={setShowClassModal} />
      <div className="flex justify-center">
        <div className="w-9/12">
          <div className="flex justify-between">
            <div className="w-3/4 h-10">
              <div className=" w-full flex text-gray-400 hover:text-gray-600 items-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2">
                <button className="rounded-full">
                  <img
                    src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
                    className="w-9 h-9 rounded-full"
                  />
                </button>
                <h1 className="ml-4 w-full">Anunciar algo a tu clase</h1>
              </div>
              <div className=" w-full flex h-40 text-gray-400 hover:text-gray-600 items-center text-center p-4 rounded-xl shadow-xl bg-white border-2 mt-2">
                <h1 className="ml-4 w-full">Aqui apareceran tus anuncios</h1>
              </div>
            </div>
            <div className="w-1/4 mt-2 ml-5">
              <div className="w-full rounded bg-white">
                <div className="p-5 rounded-xl shadow-xl bg-white border-2 mb-3">
                  <h3 className="font-semibold">Código de clase </h3>
                  <h2>ad3F4RSa</h2>
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
