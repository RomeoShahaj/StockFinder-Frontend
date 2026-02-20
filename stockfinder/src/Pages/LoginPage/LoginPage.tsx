import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup" 
import { useAuth } from '../../context/userAuth'
import { useForm } from 'react-hook-form'


type LoginFormsInputs = {
    userName: string;
    password: string;
}

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
})

const LoginPage = () => {
    const { loginUser } = useAuth();
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
 } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation)})

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  }

  return (
    <section className="bg-background-primary min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-surface border border-border rounded-medium shadow-card md:mb-20 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? <p className="text-sm text-status-error mt-1">{errors.userName.message}</p> : ""}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                  {...register("password")}
               />
               {errors.password ? <p className="text-sm text-status-error mt-1">{errors.password.message}</p> : ""}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-150"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary transition-all duration-150 font-medium rounded-medium text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-text-secondary">
                Don't have an account yet?{" "}
                <a
                  href="/register"
                  className="font-medium text-accent hover:text-accent-hover transition-colors duration-150"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
