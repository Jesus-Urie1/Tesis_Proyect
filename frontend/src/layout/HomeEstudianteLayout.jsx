import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HomeEstudianteLayout = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <>
      {auth?._id && auth?.tipoCuenta == "estudiante" ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default HomeEstudianteLayout;
