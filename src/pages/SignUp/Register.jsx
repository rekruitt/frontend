// import "./signUp.css";
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import Error from '../components/Error';
// import Spinner from '../components/Spinner';
// import { login } from '../features/auth/authActions';

// const SignUp = () => {
//     const { loading, userInfo, error, success } = useSelector(
//         (state) => state.auth
//       )
//       const dispatch = useDispatch()
//       const { register, handleSubmit } = useForm()
    
//       const submitForm = (data) => {
//         // check if passwords match
//         if (data.password !== data.confirmPassword) {
//           alert('Password mismatch')
//         }
//         // transform email string to lowercase to avoid case sensitivity issues in login
//         data.email = data.email.toLowerCase()
//         dispatch(login(data))
//       }
//       return (
//         <form onSubmit={handleSubmit(submitForm)}>
//           {error && <Error>{error}</Error>}
//           <div className='form-group'>
//             <label htmlFor='firstName'>First Name</label>
//             <input
//               type='text'
//               className='form-input'
//               {...login('firstName')}
//               required
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               className='form-input'
//               {...login('email')}
//               required
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='password'
//               className='form-input'
//               {...login('password')}
//               required
//             />
//           </div>
//           <div className='form-group'>
//             <label htmlFor='email'>Confirm Password</label>
//             <input
//               type='password'
//               className='form-input'
//               {...login('confirmPassword')}
//               required
//             />
//           </div>
//           <button type='submit' className='button' disabled={loading}>
//             {loading ? <Spinner /> : 'Register'}
//           </button>
//         </form>
//       )
// }

// export default SignUp


import { useState } from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          toast.success(`Registered new user - ${user.name}`)
          navigate('/')
        })
        .catch(toast.error)
    }
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
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
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
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

export default Register