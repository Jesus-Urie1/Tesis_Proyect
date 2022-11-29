import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HomeAdminLayout = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";

  return (
    <>
      {auth?._id && auth?.tipoCuenta == "administracion" ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default HomeAdminLayout;
