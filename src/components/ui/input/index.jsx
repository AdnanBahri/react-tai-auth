import React from "react";

const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  setValue,
  error,
  touched,
  onBlur,
}) => {
  return (
    <div className="w-full mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 ${
          error && touched && "border-red-600"
        } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        required
        onBlur={onBlur}
      />
      {error && touched && (
        <p class="mt-2 ml-2 text-sm text-red-600 dark:text-red-500 ease-in duration-500">
          <span class="font-medium">Oh, snapp!</span> {error}.
        </p>
      )}
    </div>
  );
};

export default Input;
