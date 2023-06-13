

// src/pages/Signin.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import '../frontAssets/css//Signin.css';



// Composant de connexion (formulaire) avec hooks et fonction fléchée (useState) et useContext (AuthContext)  (contexte d'authentification)
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();


  // fonction de soumission du formulaire de connexion
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signIn(email, password)) {
      navigate.push("/");
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  // affichage du formulaire de connexion
  return (
    <div className="container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input className="mail-pass"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="mail-pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signin" type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;


















