import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <nav className="bg-green-800 p-3">
        <img src="logo-nav.png" className="ml-10" />
      </nav>
      <main className="flex justify-center items-center mx-auto mt-12 gap-10 p-5">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
