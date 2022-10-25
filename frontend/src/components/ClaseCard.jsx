import React from "react";
import { HiDotsVertical } from "react-icons/hi";

const ClaseCard = ({ titulo, grado, grupo }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl border-2 hover:border-2 hover:border-indigo-600 grid justify-items-center py-5 pl-5 pr-5">
      <div className="flex justify-between  container">
        <div className="text-black/500 font-semibold text-2xl pb-20 ">
          {titulo}
        </div>
        <div className="rounded-full hover:bg-indigo-100 p-2 h-9">
          <HiDotsVertical color="black" size={20} />
        </div>
      </div>

      <div className="flex justify-around ">
        <h6 className="pr-20 flex italic">
          Grado: <div className="pl-2 font-medium"> {grado}</div>
        </h6>
        <h6 className="pl-5 flex italic">
          Grupo:<div className="pl-2 font-medium"> {grupo}</div>
        </h6>
      </div>
    </div>
  );
};

export default ClaseCard;
