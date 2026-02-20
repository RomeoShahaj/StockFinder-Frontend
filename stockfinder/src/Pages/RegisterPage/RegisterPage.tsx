import React from 'react'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../context/userAuth'
import { useForm } from 'react-hook-form'

type RegisterFormsInputs = {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password')], "Passwords must match")
})

const RegisterPage = () => {
    const { registerUser } = useAuth(); 
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation)})
    
    const handleRegister = (form: RegisterFormsInputs) => {
        registerUser( form.email, form.userName, form.firstName, form.lastName, form.password);
    };
  return (
    <section className="bg-background-primary min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <div className="w-full bg-surface border border-border rounded-medium shadow-card md:my-8 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(handleRegister)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-text-primary"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                    placeholder="John"
                    {...register("firstName")}
                  />
                  {errors.firstName ? (
                         <p className='text-text-secondary'>{errors.firstName.message}</p>
                    ) : (
                         ""
                    )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-text-primary"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                    placeholder="Doe"
                    {...register("lastName")}
                    
                  />
                  {errors.lastName ? (
                         <p className='text-text-secondary'>{errors.lastName.message}</p>
                    ) : (
                         ""
                    )}
                </div>
              </div>
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
                  placeholder="johndoe"
                  {...register("userName")}

                />
                {errors.userName ? (
                    <p className='text-text-secondary'>{errors.userName.message}</p>
                ) : (
                    ""
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                  placeholder="name@company.com"
                  {...register("email")}

                />
                {errors.email ? (
                    <p className='text-text-secondary'>{errors.email.message}</p>
                ) : (
                    ""
                )}
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
                {errors.password ? (
                         <p className='text-text-secondary'>{errors.password.message}</p>
                    ) : (
                         ""
                    )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-surface border border-border text-text-primary placeholder-text-tertiary sm:text-sm rounded-medium focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-150 block w-full p-2.5"
                  {...register("confirmPassword")}
               />
               {errors.confirmPassword ? (
                         <p className='text-text-secondary'>{errors.confirmPassword.message}</p>
                    ) : (
                         ""
                    )}
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary transition-all duration-150 font-medium rounded-medium text-sm px-5 py-2.5 text-center"
              >
                Create account
              </button>
              <p className="text-sm font-light text-text-secondary">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-accent hover:text-accent-hover transition-colors duration-150"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
