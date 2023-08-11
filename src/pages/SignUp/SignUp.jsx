import { useState } from "react";
import "./SignUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/auth/asyncThunk";
import signupimg from "../../assets/images/signup/signup.png";
import Navbar from "../../components/NavigationBar/Navbar";

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstname, lastname, email, password, confirmPassword } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setFormData(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("checkkk");
    if (password !== confirmPassword) {
      console.log("toastt ");
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
      };

      dispatch(register({ userData, navigate }));
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="signup">
        <div className="signup_img">
          <img src={signupimg} />
        </div>
        <div className="signup_section">
          <h2 className="signup_h2">Welcome to Rekruit</h2>
          <p className="signup_p">Create your account for free now</p>

          <form onSubmit={onSubmit}>
            <div className="signup_form">
              <label>Name</label>
              <div className="signup_input1">
                <input
                  className="signup_inputname"
                  type="text"
                  name="firstName"
                  value={firstname}
                  onChange={onChange}
                  placeholder="First Name"
                  required
                />
                <input
                  className="signup_inputname"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="signup_form">
              <label>Email</label>
              <input
                className="signup_input"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="someone@example.com"
                required
              />
            </div>

            <div className="signup_form">
              <label>Password</label>
              <input
                className="signup_input"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="signup_form">
              <label>Confirm Password</label>
              <input
                className="signup_input"
                type="password"
                name="confirmpassword"
                value={confirmPassword}
                onChange={onChange}
                placeholder="Re-enter password"
                required
              />
            </div>

            <button type="submit" className="signup_button">
              Next
            </button>
          </form>
          <p className="signup_login">
            I already have an account?{" "}
            <span className="signup_span">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
