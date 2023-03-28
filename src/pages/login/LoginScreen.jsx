import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Error from "../../components/ui/error";
import Button from "../../components/ui/button";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthProvider";
import Field from "../../components/ui/fields";

const initialValues = {
  email: "",
  password: "",
};
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("You Must Enter your Email Address"),
  password: Yup.string().min(5).max(50).required("You Must Enter the Password"),
});

const LoginScreen = () => {
  const navigate = useNavigate();
  const { user, logIn } = useAuth();

  const handleLogin = async (values) => {
    try {
      const resp = await logIn(values.email, values.password);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className="py-10  sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
            Welcome
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Login to your account to check out your latest notes
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
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
                    <Field
                      name="email"
                      label="Email address"
                      type="email"
                      placeholder="Enter email to get started"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.email}
                      touched={touched.email}
                      error={errors.email}
                    />

                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      touched={touched.password}
                      error={errors.password}
                    />

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
                        Continue
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Don't have an account?
                        <Link
                          to="/register"
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          {" "}
                          Register here
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

export default LoginScreen;
