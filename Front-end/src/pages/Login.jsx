import LoginForm from "../components/LoginForm";
import classes from "./Login.module.css";

export default function LoginPage() {
  return (
    <section className={classes.specialBg}>
      <LoginForm />
    </section>
  );
}
