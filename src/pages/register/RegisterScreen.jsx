import React from "react";
import { Formik, Form } from "formik";
import Error from "../../components/ui/error";
import * as Yup from "yup";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthProvider";

const initialValues = {
  email: "",
  password: "",
  confirm_password: "",
};
const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("You Must Enter your Email Address"),
  password: Yup.string().min(6).max(50).required("You Must Enter the Password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You Need to Confirm your Password."),
});

const RegisterScreen = () => {
  const { signUp } = useAuth();
  const handleRegister = async (values) => {
    try {
      const resp = await signUp(values.email, values.password);
      console.log("resp", resp);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className="py-10 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create free account
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            You can create a free Celebration account in 2 minutes
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={handleRegister}
              >
                {({
                  isValid,
                  isSubmitting,
                  errors,
                  values,
                  handleBlur,
                  handleSubmit,
                  handleChange,
                  touched,
                }) => (
                  <Form className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </div>

                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email to get started"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                      <Error error={errors.email} touched={touched.email} />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                      <Error
                        error={errors.password}
                        touched={touched.password}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirm_password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password Confirmation
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="password"
                          name="confirm_password"
                          placeholder="Please re-enter your password"
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                      <Error
                        error={errors.confirm_password}
                        touched={touched.confirm_password}
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded"
                      />

                      <label
                        htmlFor="agree"
                        className="ml-3 text-sm font-medium text-gray-500"
                      >
                        I agree to Postcraft’s{" "}
                        <a
                          href="/"
                          title=""
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="/"
                          title=""
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div>
                      <Button
                        onClick={handleSubmit}
                        disabled={!isValid || isSubmitting}
                      >
                        {isSubmitting && (
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}{" "}
                        Create account
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Already have an account?
                        <Link
                          to="/sign-in"
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          Login here
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterScreen;
