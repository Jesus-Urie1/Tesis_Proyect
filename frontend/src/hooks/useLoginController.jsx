import { useInput } from "./useInput";

const useLoginController = () => {
  const [email] = useInput("");
  const [password] = useInput("");

  return [email, password];
};

export default useLoginController;
