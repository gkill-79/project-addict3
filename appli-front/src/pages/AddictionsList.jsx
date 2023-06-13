
// src/pages/AddictionsList.jsx

import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AddictionsList = () => {
  const [addictionsData, setAddictionsData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3300/addictions")
      .then((addictionsDataJson) => addictionsDataJson.json())
      .then((addictionsDataJs) => {
        setAddictionsData(addictionsDataJs.data);
      });
  }, []);

  const handleDeleteClick = (addiction) => {
    fetch("http://localhost:3300/addictions/" + addiction.id, {
      method: "DELETE",
    })
      .then(() => {
        // Mise à jour de l'état après suppression
        setAddictionsData(addictionsData.filter(a => a.id !== addiction.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Liste des addictions</h1>
      {addictionsData.map((addiction) => {
        return (
          <div key={addiction.id}>
            <h2>{addiction.name}</h2>
            <p>Description : {addiction.description}</p>
            <button onClick={() => handleDeleteClick(addiction)}>
              Supprimer l'addiction
            </button>
          </div>
        );
      })}
    </>
  );
};

export default AddictionsList;




















