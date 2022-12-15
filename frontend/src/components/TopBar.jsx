import { HiPlus, HiMenu } from "react-icons/hi";
import useAuth from "../hooks/useAuth";

const TopBar = ({ setShowClassModal }) => {
  const { auth } = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-800 p-3">
      <div className="flex">
        <img src="logo-nav.png" />
      </div>

      <div className="flex items-center">
        <button
          className="p-1 rounded-full hover:bg-green-600 mr-2"
          onClick={() => setShowClassModal(true)}
        >
          <HiPlus color="white" size={30} />
        </button>

        <button className="rounded-full hover:bg-green-600 p-1">
          <img
            src="https://img2.gratispng.com/20180613/egk/kisspng-professor-stock-photography-5b218ab481d817.8727019215289248525319.jpg"
            className="w-9 h-9 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
