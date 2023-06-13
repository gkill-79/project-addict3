

// src/pages/CreateAddiction.jsx

import React from "react";
import "../frontAssets/css/CreateAddiction.css";

// import Header from "../layout/Header";

let CreateAddictionComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;

    fetch("http://localhost:3300/api/routes/addictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Addiction créée");
      } else {
        console.log("Erreur");
      }
    });
  };

  return (
    <div className="page-container">
      <div className="middle-section">
        <h1 className="title">Liste des addictions</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="name">Nom de l'addiction</label>
            <input type="text" name="name" />
          </div>
          <div className="input-box">
            <label htmlFor="description">Description</label>
            <textarea name="description" className="advice-input"></textarea>
          </div>
          <div className="buttons-section">
            <button type="submit" className="add-button">Créer l'addiction</button>
            <button type="button" className="delete-button">Supprimer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAddictionComponent;




















// import { useNavigate } from "react-router-dom";
// import Header from "../layout/Header";
// import { useEffect } from "react";

// const CreateAddiction = () => {
//   const navigate = useNavigate();
//   // si l'utilisateur n'est pas connecté
//   // donc qu'il n'a pas de jwt dans le localStorage
//   // on le redirige vers la page de connexion

//   useEffect(() => {
//     if (!localStorage.getItem("jwt")) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   // je créé un event listener quand le formulaire est validé
//   const handleSubmit = (event) => {
//     // j'utilise l'objet event, fourni automatiquement par le navigateur
//     // pour empêcher que la page soit rechargée (comportement par défaut)
//     event.preventDefault();

//     // je récupère les valeurs des champs du formulaire
//     // et on les stocke dans des variables
//     const name = event.target.name.value;
//     const description = event.target.description.value;
//     // const capacity = event.target.capacity.value;
//     // const priceDay = event.target.priceDay.value;

//     // on fait un appel vers l'API (express)
//     // on lui spécifie la méthode POST (pour créer)
//     // et on lui passe en "body" les données du formulaire
//     // attention, il faut que les données soient au format JSON
//     // donc on utilise JSON.stringify
//     // il faut que les donnnées envoyées correspondent
//     // à ce qui est attendu par l'API
//     fetch("http://localhost:3080/api/routes/patients", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         description: description,
//         // capacity: capacity,
//         // price: {
//         //   day: priceDay,
//         //   hour: null,
//         //   month: null,
//         },
//       }),

//       // si l'api renvie une reponse 200
//       // ça veut dire que tout s'est bien passé
//       // alors on affiche un message dans la console
//     }).then((response) => {
//       if (response.status === 200) {
//         console.log("addiction créé");
//         // sinon on affiche un message d'erreur
//         // car cela veut dire que le coworking n'a pas été créé
//       } else {
//         console.log("erreur");
//       }
//     });
//   };

//   return (
//     <>
//       <Header />

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nom de l'addiction</label>
//           <input type="text" name="name" />
//         </div>
//         <div>
//           <label htmlFor="superficy">Description de l'addiction</label>
//           <input type="text" name="description" />
//         </div>
//         {/* <div>
//           <label htmlFor="capacity">Capacité</label>
//           <input type="number" name="capacity" />
//         </div>

//         <div>
//           <label htmlFor="priceDay">Prix au jour</label>
//           <input type="number" name="priceDay" />
//         </div> */}

//         <button type="submit">Créer l'addiction</button>
//       </form>
//     </>
//   );
// };

// export default CreateAddiction;



















// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../layout/Header";

// const CreatePatient = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("jwt")) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const name = event.target.name.value;
//     const description = event.target.description.value;

//     fetch("http://localhost:3080/api/routes/patients", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         description: description,
//       }),
//     }).then((response) => {
//       if (response.status === 200) {
//         console.log("Patient créé");
//       } else {
//         console.log("Erreur");
//       }
//     });
//   };

//   return (
//     <>
//       <Header />
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nom du patient</label>
//           <input type="text" name="name" />
//         </div>
//         <div>
//           <label htmlFor="description">Description du patient</label>
//           <textarea name="description"></textarea>
//         </div>
//         <button type="submit">Créer le patient</button>
//       </form>
//     </>
//   );
// };

// export default CreatePatient;



















