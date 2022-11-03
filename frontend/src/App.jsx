import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import AuthLayout from "./layout/AuthLayout";
import HomeEstudianteLayout from "./layout/HomeEstudianteLayout";
import HomeMaestroLayout from "./layout/HomeMaestroLayout";
//Pages
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import NuevoPassword from "./pages/NuevoPassword";
import HomeEstudiante from "./pages/HomeEstudiante";
import HomeMaestro from "./pages/HomeMaestro";

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

          <Route path="/estudiante" element={<HomeEstudianteLayout />}>
            <Route index element={<HomeEstudiante />} />
          </Route>

          <Route path="/maestro" element={<HomeMaestroLayout />}>
            <Route index element={<HomeMaestro />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
