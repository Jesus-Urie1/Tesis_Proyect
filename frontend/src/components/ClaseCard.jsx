import React from "react";

const ClaseCard = ({ titulo, grado, grupo }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl border-2 hover:border-2 hover:border-indigo-600 grid justify-items-center py-5 px-10">
      <div className="text-black/500 font-semibold text-2xl pb-20">
        {titulo}
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
