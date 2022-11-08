import React from "react";
import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

import { Fragment } from "react";

import NuevaClaseMod from "../components/NuevaClaseMod";
import { useState } from "react";

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);

  return (
    <Fragment>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />

        <div className="flex justify-around pt-10">
          <h1 className="text-black font-black text-6xl">Mis Clases</h1>
        </div>

        <div className="flex flex-wrap justify-center xl:justify-start mt-10 ml-5">
          <ClaseCard titulo={"Ingles"} grado={1} grupo={"A"} />
          <ClaseCard titulo={"Matematicas"} grado={1} grupo={"D"} />
          <ClaseCard titulo={"Historia"} grado={2} grupo={"B"} />

          <ClaseCard titulo={"Ciencias"} grado={3} grupo={"A"} />
          <ClaseCard titulo={"Geografia"} grado={3} grupo={"C"} />
          <ClaseCard titulo={"Español"} grado={5} grupo={"D"} />
        </div>
      </div>
      <NuevaClaseMod
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      />
    </Fragment>
  );
};

export default HomeMaestro;
