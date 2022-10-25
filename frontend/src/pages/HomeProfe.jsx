import React from "react";
import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

const HomeProfe = () => {
  return (
    
    <div>
      <TopBar />

      <div className="flex justify-around pt-10 pb-10">
        
        <h1 className="text-black font-black text-6xl">Mis Clases</h1>
      </div>

      {/*Clases */}
      <div>
        <div className="flex justify-around pb-10 pt-10">
          <ClaseCard titulo={"Ingles"} grado={1} grupo={"A"} />
          <ClaseCard titulo={"Matematicas"} grado={1} grupo={"D"} />
          <ClaseCard titulo={"Historia"} grado={2} grupo={"B"} />
        </div>

        <div className="flex justify-around">
          <ClaseCard titulo={"Ciencias"} grado={3} grupo={"A"} />
          <ClaseCard titulo={"Geografia"} grado={3} grupo={"C"} />
          <ClaseCard titulo={"Español"} grado={5} grupo={"D"} />
        </div>
      </div>
    </div>
  );
};

export default HomeProfe;
