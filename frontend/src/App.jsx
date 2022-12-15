import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import AuthLayout from "./layout/AuthLayout";
import HomeEstudianteLayout from "./layout/HomeEstudianteLayout";
import HomeMaestroLayout from "./layout/HomeMaestroLayout";
import HomeAdminLayout from "./layout/HomeAdminLayout";
//Pages
import Login from "./pages/Login";
import HomeEstudiante from "./pages/HomeEstudiante";
import HomeMaestro from "./pages/HomeMaestro";
import Alumnos from "./pages/Alumnos";
import ListadeAsistencia from "./pages/ListadeAsistencia";
import HomeAdmin from "./pages/HomeAdmin";
import AlumnosComun from "./pages/AlumnosComun";

import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/administracion" element={<HomeAdminLayout />}>
            <Route index element={<HomeAdmin />} />
          </Route>

          <Route path="/maestro" element={<HomeMaestroLayout />}>
            <Route index element={<HomeMaestro />} />
            <Route path=":grupo/alumnos" element={<Alumnos />} />
            <Route
              path=":grupo/listadeasistencia"
              element={<ListadeAsistencia />}
            />
            <Route path=":grupo/alumnosComun" element={<AlumnosComun />} />
          </Route>

          <Route path="/alumno" element={<HomeEstudianteLayout />}>
            <Route index element={<HomeEstudiante />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
