import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/Slices/Usuario";
import NavLogin from "../components/Login/NavLogin";
import FormLogin from "../components/Login/FormLogin";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(setAuth([]));
  }, []);

  return (
    <>
      <NavLogin />
      <FormLogin />
    </>
  );
};

export default Login;
