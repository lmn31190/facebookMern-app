import "./login.scss";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      setTimeout(() => window.location.replace("/"), 500)
    } catch (err) {
      setErr(err.response.data);
    }
  }

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
          <Link to="/register">
            <button>S'inscrire</button>
          </Link>
        </div>
        <div className="right">
          <h1>Se connecter</h1>
          <form>
            <input type="text" placeholder="Pseudo" name="username"
              onChange={handleChange}/>
            <input type="password" placeholder="Mot de passe" name="password"
              onChange={handleChange}/>
              {err ? <p style={{color : 'red'}}>{err}</p> : ""}
            <button onClick={handleLogin}>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
