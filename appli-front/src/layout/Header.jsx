

// // src/layout/Header.jsx

// import React from "react";
// import { Link } from "react-router-dom";

// // import "./Header.css";
// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/addictions">Liste des addictions</Link>
//           </li>
//           <li>
//             <Link to="/create-addiction">Créer une addiction</Link>
//           </li>
//           <li>
//             <Link to="/counter">Compteur</Link>
//           </li>
//           <li>
//             <Link to="/advice">Conseils personnalisés</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
















// src/layout/Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../frontAssets/css/Header.css"; // Import du fichier CSS

const Header = ({ isAuthenticated, signOut }) => {
  return (
    <header className="header">
      <nav>
        <h1>Mon Application</h1>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/addictions">Liste des addictions</Link>
          </li>
          <li>
            <Link to="/create-addiction">Créer une addiction</Link>
          </li>
          <li>
            <Link to="/counter">Compteur</Link>
          </li>
          <li>
            <Link to="/advice">Conseils personnalisés</Link>
          </li>
        </ul>
        <div className="account-menu">
          {isAuthenticated ? (
            <>
              <Link to="/addictions">Addictions</Link>
              <Link to="/create-addiction">Créer une addiction</Link>
              <button onClick={signOut}>Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/signin">Connexion</Link>
              <Link to="/signup">Inscription</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;





