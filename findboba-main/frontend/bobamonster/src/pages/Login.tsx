import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlueberryBlob from "../imgs/Blueberry_Blob.png";
import "../styles/login.css";
import { getUserPoints, setUserPoints } from './userpoints.ts';

const LoginPage: React.FC = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);

  const navigate = useNavigate()

  const handleRegisterClick = () => {
    setIsLoginFormActive(false);
  };

  const handleLoginClick = () => {
    setIsLoginFormActive(true);
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Award 10 points to the user
    const currentPoints = getUserPoints();
setUserPoints(currentPoints + 10);
    console.log("User awarded 10 points!");
    navigate('/Homepage');
  };

  return (
    <div>
      <img src={BlueberryBlob} alt="Blueberry Blob" className="logo" />
      <h1>Welcome to BobaMonster!</h1>

      <div className={`wrapper ${isLoginFormActive ? "" : "active"}`}>
        <span className="bg-animate"></span>
        <span className="bg-animate2"></span>
        <div className="form-box login">
          <h2
            className="animation"
            style={{ "--i": 0, "--j": 21 } as React.CSSProperties}
          >
            Login
          </h2>
          <form onSubmit={handleSubmitLogin}>
            <div
              className="input-box animation"
              style={{ "--i": 1, "--j": 22 } as React.CSSProperties}
            >
              <input type="text" required />
              <label>Username</label>
              <i className="bx bx-user"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 2, "--j": 23 } as React.CSSProperties}
            >
              <input type="password" required />
              <label>Password</label>
              <i className="bx bx-lock-alt"></i>
            </div>
            <button
              type="submit"
              className="btn animation"
              style={{ "--i": 3, "--j": 24 } as React.CSSProperties}
            >
              Login
            </button>
            <div
              className="logreg-link animation"
              style={{ "--i": 4, "--j": 25 } as React.CSSProperties}
            >
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="register-link"
                  onClick={handleRegisterClick}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text login">
          <h2
            className="animation"
            style={{ "--i": 0, "--j": 20 } as React.CSSProperties}
          >
            Welcome To...
          </h2>
          <p
            className="animation"
            style={{ "--i": 1, "--j": 21 } as React.CSSProperties}
          >
            Our BobaThon (Hackathon) Project
          </p>
        </div>
        <div className="form-box register">
          <h2
            className="animation"
            style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
          >
            Sign Up
          </h2>
          <form onSubmit={handleSubmitLogin}>
            <div
              className="input-box animation"
              style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
            >
              <input type="text" required />
              <label>Username</label>
              <i className="bx bx-user"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 19, "--j": 2 } as React.CSSProperties}
            >
              <input type="email" required />
              <label>Email</label>
              <i className="bx bx-envelope"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 20, "--j": 3 } as React.CSSProperties}
            >
              <input type="password" required />
              <label>Password</label>
              <i className="bx bx-lock-alt"></i>
            </div>
            <button
              type="submit"
              className="btn animation"
              style={{ "--i": 21, "--j": 4 } as React.CSSProperties}
            >
              Sign Up
            </button>
            <div
              className="logreg-link animation"
              style={{ "--i": 22, "--j": 5 } as React.CSSProperties}
            >
              <p>
                Already have an account?{" "}
                <a href="#" className="login-link" onClick={handleLoginClick}> Login </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text register">
          <h2
            className="animation"
            style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
          >
            Welcome
            <br />
            Back!
          </h2>
          <p
            className="animation"
            style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
          >
            Our BobaThon (Hackathon) Project
          </p>
        </div>
      </div>
      <p>User Points: {getUserPoints()}</p>
    </div>
  );
};

export default LoginPage;