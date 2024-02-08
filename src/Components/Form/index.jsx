import "./style.css";
import logo from "../Form/logo.svg";
import git from "../Form/git.svg";

export default function Form() {
  return (
    <form className="form">
      <header className="header">
        <img src={logo} alt="Logo" />
        <span>Dev&apos;s</span>
      </header>
      <div className="inputContainer1">
        <label htmlFor="email"></label>
        <input type="text" name="email" id="email" placeholder="E-mail" />
      </div>
      <div className="inputContainer2">
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="forgot">
        <a href="">FORGOT PASSWORD</a>
      </div>
      <div className="button">
        <button>Login</button>
      </div>
      <div className="continue">
        <span>Or continue with</span>
      </div>

      <div className="button2">
        <button>
          <img src={git} alt="Git" /> GitHub
        </button>
      </div>
      <div className="Terms">
        <a href="">Terms of Service</a>
        <a href=""> Privacy Policy</a>
      </div>
    </form>
  );
}
