import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";

import HomeAdminLayout from "./layout/HomeAdminLayout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import NuevoPassword from "./pages/NuevoPassword";
import NextPage from "./pages/NextPage";
import HomeProfe from "./pages/HomeProfe";
import Home from "./pages/Home";
import HomeEstudiante from "./pages/HomeEstudiante";

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
            <Route index element={<Home />} />
            <Route path="profesor" element={<HomeProfe />} />
            <Route path="estudiante" element={<HomeEstudiante />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
