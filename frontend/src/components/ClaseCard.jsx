import { HiDotsVertical } from "react-icons/hi";

const ClaseCard = ({ titulo, grado, grupo, onClick }) => {
  return (
    <div onClick={onClick}>
      <button className="bg-white shadow-lg rounded-xl border-2 hover:border-2 hover:border-indigo-600 justify-items-center p-7 w-80 mr-3 mb-5">
        <div className="flex justify-between  container ">
          <div className="text-black/500 font-semibold text-2xl">{titulo}</div>
          <div className="rounded-full hover:bg-indigo-100 p-2">
            <HiDotsVertical color="black" size={20} />
          </div>
        </div>

        <div className="flex justify-between pt-20">
          <h6 className=" flex italic">
            Grado: <div className="pl-2 font-medium"> {grado}</div>
          </h6>

          <h6 className="flex italic">
            Grupo:<div className="pl-2 font-medium"> {grupo}</div>
          </h6>
        </div>
      </button>
    </div>
  );
};

export default ClaseCard;
