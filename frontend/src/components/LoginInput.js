import React from "react";

const LoginInput = ({ title, type, placeholder, onChange, value }) => {
  return (
    <>
      <label className="uppercase text-gray-600 block text-xl font-bold">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default LoginInput;
