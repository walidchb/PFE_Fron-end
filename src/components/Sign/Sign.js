import { React, useState } from "react";
import "./SignIn.css";
import "./SignUp.css";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";

function Sign() {
  const [Walid, setWalid] = useState(true);
  return (
    <div>
      {Walid && (
        <div className="page">
          <div className="background"></div>{" "}
          <div className="PrincipalDivSignIn">
            <LockIcon className="lock" />
            <h3>Sign in</h3>
            <div className="input-container">
              <EmailIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="usrnm"
              />
            </div>
            <div className="input-container">
              <VpnKeyIcon className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="PassWord"
                name="usrnm"
              />
            </div>
            <div className="forgot_div">
              <a href="">
                {" "}
                <p>Forgot Password?</p>
              </a>
            </div>

            <button type="" className="SignInButton">
              SIGN IN
            </button>
            <h6 className="DontHaveAnAccount">
              Dont have an account ?{" "}
              <span>
                <button
                  className="switchbutton"
                  type=""
                  onClick={() => {
                    setWalid(!Walid);
                  }}
                >
                  Create
                </button>
              </span>
            </h6>

            <p>Or Sign Up Using </p>

            <div className="signInUsing">
              <a href="">
                {" "}
                <GoogleIcon className="googleicon" />
              </a>
              <a href="" className="facebookicon">
                {" "}
                <h2>f </h2>
              </a>
              <a href="">
                {" "}
                <TwitterIcon className="twittericon" />
              </a>
            </div>
            <p className="Copyright">Copyright © Your Website 2022.</p>
          </div>
        </div>
      )}
      {!Walid && (
        <div className="page">
          <div className="background"></div>{" "}
          <div className="PrincipalDivSignIn">
            <h3>Sign up</h3>
            <div className="Name">
              <div className="input-container1">
                <PersonIcon className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="First Name"
                  name="usrnm"
                />
              </div>
              <div className="input-container1">
                <PersonIcon className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Last Name"
                  name="usrnm"
                />
              </div>
            </div>

            <div className="input-container">
              <DialpadIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Phone Number"
                name="usrnm"
              />
            </div>
            <div className="input-container">
              <EmailIcon className="icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="usrnm"
              />
            </div>
            <div className="input-container">
              <PasswordIcon className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="usrnm"
              />
            </div>
            <div className="input-container">
              <PasswordIcon className="icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="usrnm"
              />
            </div>

            <button type="" className="SignUpButton">
              CREATE ACCOUNT{" "}
            </button>
            <h6 className="DontHaveAnAccount">
              Already have an account ?{" "}
              <span>
                <button
                  className="switchbutton"
                  type=""
                  onClick={() => {
                    setWalid(!Walid);
                  }}
                >
                  Sign in
                </button>
              </span>
            </h6>

            <p className="Copyright">Copyright © Your Website 2022.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sign;
