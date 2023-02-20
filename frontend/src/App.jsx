import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import AuthLayout from "./layout/AuthLayout";
import HomeEstudianteLayout from "./layout/HomeEstudianteLayout";
import HomeMaestroLayout from "./layout/HomeMaestroLayout";
import HomeAdminLayout from "./layout/HomeAdminLayout";
//Pages
import Login from "./pages/Login";
import HomeEstudiante from "./pages/HomeEstudiante";
import HomeMaestro from "./pages/Maestro/HomeMaestro";
import Alumnos from "./pages/Maestro/Alumnos";
import ListadeAsistencia from "./pages/Maestro/ListadeAsistencia";
import HomeAdmin from "./pages/HomeAdmin";
import AlumnosComun from "./pages/Maestro/AlumnosComun";
import Informes from "./pages/Maestro/Informes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route publica (Login)*/}
        <Route path="/" element={<Login />} />
        {/*Route del usuario administrador*/}
        <Route path="/administracion" element={<HomeAdminLayout />}>
          <Route index element={<HomeAdmin />} />
        </Route>
        {/* Route del usuario maestro */}
        <Route path="/maestro" element={<HomeMaestroLayout />}>
          <Route index element={<HomeMaestro />} />
          <Route path=":grupo/alumnos" element={<Alumnos />} />
          <Route
            path=":grupo/listadeasistencia"
            element={<ListadeAsistencia />}
          />
          <Route path=":grupo/alumnosComun" element={<AlumnosComun />} />
          <Route path=":grupo/informes" element={<Informes />} />
        </Route>
        {/* Route del usuario alumno
          <Route path="/alumno" element={<HomeEstudianteLayout />}>
            <Route index element={<HomeEstudiante />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
