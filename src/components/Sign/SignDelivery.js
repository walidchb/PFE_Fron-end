import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";

function SignDelivery() {
  return (
    <div className="page">
      <div className="background"></div>{" "}
      <div className="PrincipalDivSignIn">
        <LockIcon className="lock" />
        <h3>Sign in</h3>
        <div className="input-container">
          <img src="/images/outline_add_shopping_cart_black_24dp.png" alt="" />
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

        <p className="Copyright">Copyright © Your Website 2022.</p>
      </div>
    </div>
  );
}

export default SignDelivery;
