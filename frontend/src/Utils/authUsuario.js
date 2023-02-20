export const authUsuario = (
  dispatch,
  obtenerPerfil,
  obtenerAlumnos,
  obtenerGrupos,
  obtenerMaestros,
  setAuth,
  setObtenerAlumnos,
  setObtenerGrupos,
  setObtenerMaestros,
  token
) => {
  //Se obtienen los maestros
  const respuesta = dispatch(obtenerPerfil(token));

  //Se obtiene respuesta
  respuesta.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store

      dispatch(setAuth(r.response.data));
    }
  });

  //Se obtienen los maestros
  const response = dispatch(obtenerMaestros(token));

  //Se obtiene respuesta
  response.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store

      dispatch(setObtenerMaestros(r.response.data));
    }
  });

  //Se obtienen los alumnos
  const response2 = dispatch(obtenerAlumnos(token));

  //Se obtiene respuesta
  response2.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store
      dispatch(setObtenerAlumnos(r.response.data));
    }
  });

  //Se obtienen los grupos
  const response3 = dispatch(obtenerGrupos(token));

  //Se obtiene respuesta
  response3.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store
      dispatch(setObtenerGrupos(r.response.data));
    }
  });
};
