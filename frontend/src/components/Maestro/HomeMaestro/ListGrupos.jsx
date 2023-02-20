import ClaseCard from "./ClaseCard";
import { useNavigate } from "react-router-dom";
const ListGrupos = ({ grupos }) => {
  const navigate = useNavigate();
  //Funcion onClick para navegar hacia las clases
  const toClase = (grupo) => {
    navigate(`${grupo}/alumnos`);
  };
  return (
    <div className="flex flex-wrap  justify-center mt-10 ml-5">
      {grupos.map((clase) => (
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

export default ListGrupos;
