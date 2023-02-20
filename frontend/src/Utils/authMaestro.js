export const authMaestro = (
  dispatch,
  obtenerPerfil,
  obtenerGrupos,
  setAuth,
  setObtenerGrupos,
  token
) => {
  //Se obtienen perfil
  const respuesta = dispatch(obtenerPerfil(token));

  //Se obtiene respuesta
  respuesta.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store

      dispatch(setAuth(r.response.data));
    }
  });

  //Se obtienen las clases
  const response = dispatch(obtenerGrupos(token));

  //Se obtiene respuesta
  response.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store
      dispatch(setObtenerGrupos(r.response.data));
    }
  });
};
