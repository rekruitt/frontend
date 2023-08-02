// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// // import { userLogin } from "../features/auth/authActions";
// // import Error from "../components/Error";
// import "./signIn.css";
// import login from "../../assets/images/signin/login.png";
// import { CiMail } from "react-icons/ci";

// const SignIn = () => {
//   const { loading, error } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();

//   const submitForm = (data) => {
//     dispatch(userLogin(data));
//   };

//   return (
//     <div className="signin">
//       <div className="signin_left">
//         <img src={login} />
//       </div>
//       <div className="signin_right">
//         <h3>Welcome Back</h3>
//         <p>
//           Getting you back into your account should only take a minute. <br />
//           Please enter your details to gain access.
//         </p>
//         <form className="signin_form" onSubmit={handleSubmit(submitForm)}>
//           {error && <Error>{error}</Error>}
//           <label>Email</label>
//           <i className="signin_input_icon">
//             <CiMail />
//           </i>
//           <input
//             className="signin_input"
//             type="email"
//             placeholder="Enter your email address"
//             {...register('email')}
//             required
//           ></input>
//           <label>Password</label>
//           <i className="signin_input_icon"></i>
//           <input
//             className="signin_input"
//             type="password"
//             placeholder="Enter your password"
//             {...register('password')}
//             required
//           ></input>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { email, password } = form

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        toast.success(`Logged in as ${user.name}`)
        navigate('/')
      })
      .catch(toast.error)
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section className='heading'>
      
        <p>Please log in to get support</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login