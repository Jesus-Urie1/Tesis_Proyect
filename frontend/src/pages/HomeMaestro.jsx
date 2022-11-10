import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";
import NuevaClase from "../components/NuevaClase";
import NuevaClaseMod from "../components/NuevaClaseMod";
import { useState, useEffect } from "react";
import clientesAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);
  const [clases, setClases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("se hizo la peticion");
    const obtenerClases = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const url = "/obtenerClases";
        const { data } = await clientesAxios(url, config);
        setClases(data);
        //localStorage.setItem("clases", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClases();
  }, []);

  //Obtener el clases del localStorage
  //const clases = JSON.parse(localStorage.getItem("clases"));

  //Enviar al salón de clases
  const toClase = (codigo) => {
    navigate(`salonDeClases/${codigo}`);
  };
  return (
    <>
      <div>
        <TopBar setShowClassModal={setShowClassModal} />

        <div className="flex justify-around pt-10">
          <h1 className="text-black font-black text-6xl">Mis Clases</h1>
        </div>

        <div className="flex flex-wrap justify-center xl:justify-start mt-10 ml-5">
          {clases.map((clase) => (
            <div
              key={clase.codigo}
              onClick={() => {
                toClase(clase.codigo);
              }}
            >
              <ClaseCard
                titulo={clase.nombre}
                grado={clase.grado}
                grupo={clase.grupo}
              />
            </div>
          ))}
        </div>
      </div>
      <NuevaClaseMod
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      >
        <NuevaClase />
      </NuevaClaseMod>
    </>
  );
};

export default HomeMaestro;
