import React, { useContext } from 'react'
import './login.css'
import { useForm } from 'react-hook-form'
import { Auth } from '../../hooks/Auth'

const Login = () => {
  const { getLogin } = useContext(Auth)
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()

  const onSubmit = async (data) => {
    await getLogin(data)
  }
  return (
    <>
      <div className="h-screen bg-white">
        <div className="border login-box">
          <p>Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-box">
              <input
                type="text"
                {...register('username', {
                  required: 'this field is required',
                })}
              />
              <label>Username</label>
              <p
                className={`my-3 text-sm font-semibold text-red-500 capitalize  ${
                  errors.username ? 'visible' : 'invisible'
                }`}
              >
                {errors.username?.message || 'this field is required'}
              </p>
            </div>
            <div className="user-box">
              <input
                type="password"
                {...register('password', {
                  required: 'this field is required',
                })}
              />
              <label>Password</label>
              <p
                className={` my-3 text-sm font-semibold text-red-500 capitalize ${
                  errors.password ? 'visible' : 'invisible'
                }`}
              >
                {errors.password?.message || 'this field is required'}
              </p>
            </div>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
          {/* <p>
            Don&apost have an account?{" "}
            <a href="" className="a2">
              Sign up!
            </a>
          </p> */}{' '}
        </div>
      </div>
    </>
  )
}

export default Login
