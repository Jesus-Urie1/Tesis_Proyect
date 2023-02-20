const TablaMaestros = ({ maestros }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 text-5xl">
      <h1 className="text-green-700 font-bold">Maestros</h1>
      <div className="overflow-x-scroll sm:overflow-x-hidden w-10/12 h-96 2xl:h-full mt-5">
        <table className="w-full text-sm text-start text-gray-500 font-mono ">
          <thead className="text-xs text-green-700 uppercase bg-white sticky top-0 z-10 shadow-md">
            <tr>
              <th scope="col" className="px-4 py-3 text-center ">
                Nombre
              </th>
              <th scope="col" className="px-4 py-3 text-center ">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="overflow-scroll">
            {maestros.map((maestro, index) => (
              <tr className={"border-b text-center"} key={index}>
                <th
                  scope="row"
                  className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {maestro.nombre}
                </th>
                <td className="px-4 py-4 capitalize">{maestro.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaMaestros;
