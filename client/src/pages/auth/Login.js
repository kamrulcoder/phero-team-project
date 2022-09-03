import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { BsAt } from "react-icons/bs";
import { Container, Image } from "react-bootstrap";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.auth_inner}>
        <div className={styles.logo}>
          <Link to="/">
            {" "}
            <img src="img/logo.png" alt="Image not found " />
          </Link>
          <p>
            If you have not registered <Link to="/register">Register</Link>
          </p>
        </div>

        <form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              className={`form-control ${styles.input}`}
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              className={`form-control ${styles.input}`}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button className={styles.submit_button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
