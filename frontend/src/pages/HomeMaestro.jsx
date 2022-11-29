import TopBar from "../components/TopBar";
import ClaseCard from "../components/ClaseCard";

import { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerClases } from "../store/Slices/Clases";
import { setObtenerClases } from "../store/Slices/Clases";

import { useNavigate } from "react-router-dom";

const ListCards = ({ clasesRedux, toClase, sinClases }) => {
  return (
    <div className="flex flex-wrap md:justify-start justify-center mt-10 ml-5">
      {sinClases !== "" && /*Poner diseño al texto*/ <>{sinClases}</>}
      {sinClases === "" && clasesRedux.length === 0 && (
        /*Poner un spinner*/ <>Cargando...</>
      )}
      {clasesRedux.map((clase) => (
        <div
          key={clase.grupo}
          onClick={() => {
            toClase(clase.grupo);
          }}
        >
          <ClaseCard grado={clase.grado} grupo={clase.grupo} />
        </div>
      ))}
    </div>
  );
};

const HomeMaestro = () => {
  const [showClassModal, setShowClassModal] = useState(false);
  const [sinClases, setSinClases] = useState("");

  //Se obtiene el arreglo de las clases de la store
  const clasesRedux = useSelector((state) => state.clases);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    //Se obtienen las clases
    const response = dispatch(obtenerClases());

    //Se obtiene respuesta
    response.then((r) => {
      if (r.response.status === 200) {
        //Se hace push a la store
        dispatch(setObtenerClases(r.response.data));
      } else {
        //Mensaje para el usuario cuando no tiene clases
        setSinClases(r.response.data.msg);
      }
    });
  }, [dispatch]);

  //Funcion onClick para navegar hacia las clases
  const toClase = (grupo) => {
    navigate(`salonDeClases/${grupo}`);
  };

  return (
    <>
      <div>
        <TopBar />
        <div className="flex ml-5 pt-10">
          <h1 className="text-black font-black text-6xl">Mis Grupos</h1>
        </div>
        <ListCards
          clasesRedux={clasesRedux.clases}
          toClase={toClase}
          sinClases={sinClases}
        />
      </div>
    </>
  );
};

export default HomeMaestro;
