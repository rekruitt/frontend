import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../features/auth/authActions";
// import Error from "../components/Error";
import "./signIn.css";
import login from "../../assets/images/signin/login.png";
import { CiMail } from "react-icons/ci";

const SignIn = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="signin">
      <div className="signin_left">
        <img src={login} />
      </div>
      <div className="signin_right">
        <h3>Welcome Back</h3>
        <p>
          Getting you back into your account should only take a minute. <br />
          Please enter your details to gain access.
        </p>
        <form className="signin_form" onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <label>Email</label>
          <i className="signin_input_icon">
            <CiMail />
          </i>
          <input
            className="signin_input"
            type="email"
            placeholder="Enter your email address"
            {...register('email')}
            required
          ></input>
          <label>Password</label>
          <i className="signin_input_icon"></i>
          <input
            className="signin_input"
            type="password"
            placeholder="Enter your password"
            {...register('password')}
            required
          ></input>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
