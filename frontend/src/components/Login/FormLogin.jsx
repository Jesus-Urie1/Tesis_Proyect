import { useNavigate } from "react-router-dom";
import { submitLogin } from "../../Utils/submitLogin";
import { useDispatch } from "react-redux";
import { auth, setAuth } from "../../store/Slices/Usuario";
import useLoginController from "../../hooks/useLoginController";
import ButtonSubmit from "./ButtonSubmit";
import LoginInput from "./LoginInput";
import Swal from "sweetalert2";

const FormLogin = () => {
  const [email, password] = useLoginController();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center mx-auto mt-12 gap-10 p-5">
      <div className="mt-20 md:mt-5 shadow-lg px-40 py-10 rounded-sm bg-white border-2 border-gray-300">
        {/*Formulario*/}
        <form
          onSubmit={(e) =>
            submitLogin(
              e,
              email.value,
              password.value,
              auth,
              setAuth,
              Swal,
              navigate,
              dispatch
            )
          }
        >
          <div className="grid place-items-center text-center">
            <img src="logo.svg" className="w-28 mb-5" />
            <div>
              <LoginInput
                type={"email"}
                placeholder={"Correo UCOL"}
                {...email}
              />
            </div>
            <div>
              <LoginInput
                type={"password"}
                placeholder={"Contraseña"}
                {...password}
              />
            </div>
            <ButtonSubmit />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
