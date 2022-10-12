import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";

import HomeAdminLayout from "./layout/HomeAdminLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import NextPage from "./pages/NextPage";
import HomeProfe from "./pages/HomeProfe";

import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>


          <Route path="/admin" element={<HomeAdminLayout />}>
            <Route index element={<NextPage />} />
          </Route>

          <Route path="homeProfe" element={<HomeProfe/>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
