import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { BsAt } from "react-icons/bs";
import { Container, Image } from "react-bootstrap";

function Register() {

    const [showImage, setShowImage] = useState("")
    const [state, setState] = useState({
        name: "",
        email: '',
        password: '',
        image: ''
    })

    const imageHandle = (e) => {
        if (e.target.files.length !== 0) {
            setState({
                ...state,
                image: e.target.files[0]
            })

            const rander = new FileReader()
            rander.onload = () => {
                setShowImage(rander.result)
            }
            rander.readAsDataURL(e.target.files[0])
        }
    }


  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.auth_inner}>
        <div className={styles.logo}>
          <Link to="/">
            {" "}
            <img src="img/logo.png" alt="Image not found " />
          </Link>
          <p>
            If you have registered <Link to="/login">Login</Link>
          </p>
        </div>

        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Name : </label>
            <input
              className={`form-control ${styles.input}`}
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Email address : </label>
            <input
              className={`form-control ${styles.input}`}
              type="email"
              placeholder="Your email address "
            />
          </div>
          <div className="form-group">
                            <input onChange={imageHandle} hidden type="file" name='image' id='reg-image' />
                            <div className={styles.image_file}>
                                <div className={styles.image}>
                                    {
                                        showImage && <img src={`${showImage}`} alt='profile image' />
                                    }
                                </div>
                                <div className= {styles.file_name}>
                                    <div className={styles.form_control}>{state.image && state.image.name}</div>
                                    <label htmlFor="reg-image">Browser</label>
                                </div>
                            </div>
                        </div>
          <div className="mb-3">
            <label>Password : </label>
            <input
              className={`form-control ${styles.input}`}
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password : </label>
            <input
              className={`form-control ${styles.input}`}
              type="password"
              placeholder="Confirm  password"
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

export default Register;
