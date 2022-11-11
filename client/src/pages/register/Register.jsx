import "./register.scss";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Louis Social.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            obcaecati nostrum? Dolorum mollitia in accusamus soluta, culpa id?
            Sapiente quaerat ducimus cum eius? Animi, at delectus. Esse ea
            suscipit qui.
          </p>
          <span>Vous avez déja un compte ?</span>
          <Link to='/login'>
            <button>Connectez vous !</button>
          </Link>
        </div>
        <div className="right">
          <h1>S'inscrire</h1>
          <form>
            <input type="text" placeholder="Pseudo" />
            <input type="password" placeholder="Mot de passe" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Nom" />
            <button>S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
