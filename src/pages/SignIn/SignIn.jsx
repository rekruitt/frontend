import React from "react";
import { useState } from "react";
import "./SignIn.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/asyncThunk";
import Navbar from "../../components/NavigationBar/Navbar";
import signin from "../../assets/images/signin/login.png";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const {  email, password } = formData;

    const userData = {
      email,
      password,
    };


    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        toast.success(`Logged in as ${user.firstname}`);
        navigate("/");
      })
      .catch(toast.error);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="signin">
        <div className="signin_img">
          <img src={signin} />
        </div>
        <div className="signin_section">
          <h2 className="signin_h2">Welcome Back</h2>
          <p className="signin_p">
            Getting you back into your account should only take a minute.
            <br />
            Please enter your details to gain access.
          </p>

          <form onSubmit={onSubmit}>
          <div className="signin_form">
            <label>Email</label>
            <input
              className="signin_input"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="someone@example.com"
              required
            />
          </div>

          <div className="signin_form">
            <label>Password</label>
            <input
              className="signin_input"
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>
            <button type="submit" className="signin_button">
              Login
            </button>
          </form>
          <p className="signin_signup">
            Don’t have an account? 
            <span className="signin_span">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
