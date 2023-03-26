import React from "react";

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={` disabled:opacity-75 disabled:cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
