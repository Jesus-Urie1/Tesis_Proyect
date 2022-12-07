const ClaseCard = ({ grado, grupo }) => {
  return (
    <div className="text-green-700 hover:text-green-600 bg-white shadow-lg rounded-xl border-2 hover:border-2 hover:border-green-600 m-10  w-40 h-40 mr-3 mb-5 flex justify-center items-center ">
      <div className="pl-2 font-medium text-8xl "> {grupo}</div>
    </div>
  );
};

export default ClaseCard;
