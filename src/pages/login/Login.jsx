import "./login.scss";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Louis Social.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            obcaecati nostrum? Dolorum mollitia in accusamus soluta, culpa id?
            Sapiente quaerat ducimus cum eius? Animi, at delectus. Esse ea
            suscipit qui.
          </p>
          <span>Vous n'avez pas de compte ?</span>
          <Link to='/register'>
            <button>S'inscrire</button>
          </Link>
        </div>
        <div className="right">
          <h1>Se connecter</h1>
          <form>
            <input type="text" placeholder="Pseudo" />
            <input type="password" placeholder="Mot de passe" />
            <button>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
