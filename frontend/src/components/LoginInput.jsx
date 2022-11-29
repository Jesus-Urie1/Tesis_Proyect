const LoginInput = ({ type, placeholder, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 rounded-sm border border-gray-300 bg-gray-50 text-center"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default LoginInput;
