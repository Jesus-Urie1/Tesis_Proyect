import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth?.tipoCuenta == "estudiante" ? (
        <Navigate to="estudiante" />
      ) : (
        <Navigate to="profesor" />
      )}
    </>
  );
};

export default Home;
