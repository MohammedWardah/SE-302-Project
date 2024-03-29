import { Form, Link } from "react-router-dom";

import classes from "./LoginForm.module.css";
import loginImg from "../assets/loginPage/loginphoto2.png";
import uniLogo from "../assets/loginPage/uni.png";
import EtLogo from "/ETlogo.png";

export default function LoginForm() {
  return (
    <>
      <section className={classes.main}>
        <div className={classes.container}>
          <div className={classes.loginLeft}>
            <img src={loginImg} alt="login image" />
          </div>
          <Form>
            <div className={classes.loginRight}>
              <div className={classes.logo}>
                <img src={uniLogo} alt="uskudar logo" />
              </div>
              <div className={classes.formControl}>
                <h1>Login to your account</h1>
                <span className="material-symbols-outlined">person</span>
                <input type="text" name="name" placeholder="Username" />
                <span className="material-symbols-outlined">lock</span>
                <input type="password" name="password" placeholder="Password" />
                <button>Login</button>
              </div>
              <div>
                <Link to="/">Return Home</Link>
                <Link to="/">Forgot Password ?</Link>
              </div>
            </div>
          </Form>
        </div>
        <div className={classes.credits}>
          <h1>
            Powered By <img src={EtLogo} alt="ET Logo" /> Electric Technology
          </h1>
        </div>
      </section>
    </>
  );
}
