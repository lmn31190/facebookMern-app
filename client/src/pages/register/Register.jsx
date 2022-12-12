import "./register.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      setTimeout(() => window.location.replace("/login"), 500)
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

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
          <Link to="/login">
            <button>Connectez vous !</button>
          </Link>
        </div>
        <div className="right">
          <h1>S'inscrire</h1>
          
          <form>

            <input type="text" placeholder="Pseudo" name="username" onChange={handleChange} />

            <input type="email" placeholder="Email" name="email" onChange={handleChange} />

            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={handleChange}
            />

            <input type="text" placeholder="Nom" name="name" onChange={handleChange} />
            {err ? <p style={{color : 'red'}}>{err}</p> : ""}
            <button onClick={handleClick}>S'inscrire</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
