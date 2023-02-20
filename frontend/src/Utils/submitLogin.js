export const submitLogin = async (
  e,
  email,
  password,
  auth,
  setAuth,
  Swal,
  navigate,
  dispatch
) => {
  e.preventDefault();
  //Validar formulario
  if ([email, password].includes("")) {
    return Swal.fire({
      title: "Error!",
      text: "Todos los campos son obligatorios!",
      icon: "error",
      confirmButtonText: "Ok!",
    });
  }

  const response = dispatch(auth({ email, password }));

  //Se obtiene respuesta
  response.then((r) => {
    if (r.response.status === 200) {
      //Se hace push a la store
      dispatch(setAuth(r.response.data));
      localStorage.setItem("token", r.response.data.token);

      if (r.response.data.tipoCuenta == "administracion") {
        navigate("/administracion");
      } else if (r.response.data.tipoCuenta == "maestro") {
        navigate("/maestro");
      } else if (r.response.data.tipoCuenta == "alumno") {
        navigate("/alumno");
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: r.response.data.msg,
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
  });
};
