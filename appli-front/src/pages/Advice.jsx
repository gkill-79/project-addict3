




// // src/pages/Advice.jsx

// import React, { useEffect, useState } from "react";
// import "../frontAssets/css/Advice.css";

// const Advice = () => {
//   const [advices, setAdvices] = useState([]);
//   const [newAdvice, setNewAdvice] = useState(''); // Pour la création d'un nouveau conseil

//   useEffect(() => {
//     fetch('http://localhost:3300/api/routes/routeAdvice/advices')
//       .then(response => response.json())
//       .then(data => setAdvices(data.data))
//       .catch(error => console.error('Il y avait une erreur pour récupérer les conseils', error));
//   }, []);

//   const createAdvice = () => {
//     fetch('http://localhost:3300/api/routes/routeAdvice/advices', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name: newAdvice }) // Ici, je suppose que votre conseil a une propriété "name"
//     })
//     .then(response => response.json())
//     .then(data => setAdvices([...advices, data.data]))
//     .catch(error => console.error('Il y avait une erreur pour créer le conseil', error));
//   }

//   const deleteAdvice = (id) => {
//     fetch(`http://localhost:3300/api/routes/routeAdvice/advices/${id}`, {
//       method: 'DELETE'
//     })
//     .then(_ => setAdvices(advices.filter(advice => advice.id !== id)))
//     .catch(error => console.error('Il y avait une erreur pour supprimer le conseil', error));
//   }

//   return (
//     <>
//        <h1>Conseils personnalisés</h1>
//         <div className="container">
//           <div className="advice-box" style={{ backgroundColor: "#ffd6a5" }}>
//             <h2>Conseil 1</h2>
//             <p>Voici un conseil personnalisé pour vous aider à surmonter vos défis.</p>
//           </div>
//           <div className="advice-box" style={{ backgroundColor: "#caffbf" }}>
//             <h2>Conseil 2</h2>
//             <p>Essayez cette technique pour améliorer votre quotidien et vous sentir mieux.</p>
//           </div>
//           <div className="advice-box" style={{ backgroundColor: "#9bf6ff" }}>
//             <h2>Conseil 3</h2>
//             <p>Voici une astuce pour vous aider à atteindre vos objectifs plus rapidement.</p>
//           </div>
//           <div className="advice-box" style={{ backgroundColor: "#a0c4ff" }}>
//             <h2>Conseil 4</h2>
//             <p>Découvrez cette méthode pour améliorer votre bien-être et votre santé.</p>
//           </div>
//         </div>

//         <div className="container">
//           {advices.map((advice, index) => (
//             <div className="advice-box" style={{ backgroundColor: "#ffd6a5" }} key={index}>
//               <h2>Conseil {index + 1}</h2>
//               <p>{advice.name}</p> {/* Ici, je suppose que votre conseil a une propriété "name". Ajustez ceci en fonction de la structure réelle de vos données */}
//               <button onClick={() => deleteAdvice(advice.id)}>Supprimer ce conseil</button>
//             </div>
//           ))}
//         <div>
//           <input type="text" value={newAdvice} onChange={e => setNewAdvice(e.target.value)} />
//           <button onClick={createAdvice}>Ajouter un nouveau conseil</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Advice;












// src/pages/Advice.jsx

import React, { useEffect, useState } from "react";
import "../frontAssets/css/Advice.css";

const Advice = () => {
  const [advices, setAdvices] = useState([]);
  const [newAdvice, setNewAdvice] = useState('');
  const [healthProfessionalMessages, setHealthProfessionalMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3300/api/routes/advices')
      .then(response => response.json())
      .then(data => setAdvices(data.data))
      .catch(error => console.error('Erreur lors de la récupération des conseils :', error));

    fetch('http://localhost:3300/api/routes/healthProfessionalMessages')
      .then(response => response.json())
      .then(data => setHealthProfessionalMessages(data.data))
      .catch(error => console.error('Erreur lors de la récupération des messages des professionnels de santé :', error));
  }, []);

  const createAdvice = () => {
    fetch('http://localhost:3300/api/routes/advices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newAdvice })
    })
      .then(response => response.json())
      .then(data => {
        setAdvices([...advices, data.data]);
        setNewAdvice('');
      })
      .catch(error => console.error('Erreur lors de la création d\'un conseil :', error));
  };

  const deleteAdvice = (id) => {
    console.log(`Suppression du conseil avec l'id : ${id}`);  // Affiche l'ID du conseil à supprimer
    fetch(`http://localhost:3300/api/routes/advices/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);  // Si la requête échoue, on lance une erreur
      }
      return response.json();
    })
    .then(data => {
      console.log(`Réponse du serveur : ${JSON.stringify(data)}`);  // Affiche la réponse du serveur
      setAdvices(advices.filter(advice => advice.id !== data.data.id));
    })
    .catch(error => console.error('Erreur lors de la suppression d\'un conseil :', error));
};

  return (
    <div className="page-container">
      <div className="left-section">
        <h1>Conseils personnalisés</h1>
        <div className="container">
          {advices.map((advice, index) => (
            <div className="advice-box" key={index}>
              <h2>{advice.name}</h2>
              <p>{advice.content}</p>
              <button className="delete-button" onClick={() => deleteAdvice(advice.id)}>Supprimer ce conseil</button>
            </div>
          ))}
        </div>
      </div>

      <div className="middle-section">
        <div className="input-section">
          <textarea className="advice-input" value={newAdvice} onChange={e => setNewAdvice(e.target.value)} placeholder="Entrez vos conseils et astuces ici..." />
          <div className="buttons-section">
            <button className="add-button" onClick={createAdvice}>Ajouter un nouveau conseil</button>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h2>Messages des professionnels de santé</h2>
        <div className="message-container">
          {healthProfessionalMessages.map((message, index) => (
            <div className="message-box" key={index}>
              <div className="message-header">
                <span className="message-sender">{message.sender}</span>
                <span className="message-timestamp">{new Date(message.timestamp).toLocaleString()}</span>
              </div>
              <p className="message-content">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advice;

























// // src/pages/Advice.jsx

// import React, { useEffect, useState } from "react";
// import "../frontAssets/css/Advice.css";

// const fetchApi = async (url, options = {}) => {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Une erreur s'est produite : ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// const Advice = () => {
//   const [advices, setAdvices] = useState([]);
//   const [newAdvice, setNewAdvice] = useState(''); 
//   const [healthProfessionalMessages, setHealthProfessionalMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const adviceData = await fetchApi('http://localhost:3300/api/routes/advices');
//         const healthProfessionalMessagesData = await fetchApi('http://localhost:3300/api/routes/healthProfessionalMessages');
//         setAdvices(adviceData.data);
//         setHealthProfessionalMessages(healthProfessionalMessagesData.data);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const createAdvice = async () => {
//     try {
//       const data = await fetchApi('http://localhost:3300/api/routes/advices', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: newAdvice })
//       });
//       setAdvices([...advices, data.data]);
//       setNewAdvice('');
//     } catch (error) {
//       console.error('Il y avait une erreur pour créer un conseil', error);
//     }
//   };

//   const deleteAdvice = async (id) => {
//     try {
//       const data = await fetchApi(`http://localhost:3300/api/routes/advices/${id}`, {
//         method: 'DELETE'
//       });
//       setAdvices(advices.filter(advice => advice.id !== data.data.id));
//     } catch (error) {
//       console.error('Il y avait une erreur pour supprimer un conseil', error);
//     }
//   };

//   if (isLoading) {
//     return <div>Chargement...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="left-section">
//         <h1>Conseils personnalisés</h1>
//         <div className="container">
//           {advices.map((advice, index) => (
//             <div className="advice-box" key={index}>
//               <h2>{advice.name}</h2>
//               <p>{advice.content}</p>
//               <button className="delete-button" onClick={() => deleteAdvice(advice.id)}>Supprimer ce conseil</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="middle-section">
//         <div className="input-section">
//           <textarea value={newAdvice} onChange={e => setNewAdvice(e.target.value)} placeholder="Entrez vos conseils et astuces ici..."/>
//           <div className="buttons-section">
//             <button className="add-button" onClick={createAdvice}>Ajouter un nouveau conseil</button>
//           </div>
//         </div>
//       </div>

//       <div className="right-section">
//         <h2>Messages des professionnels de santé</h2>
//         <div className="message-container">
//           {healthProfessionalMessages.map((message, index) => (
//             <div className="message-box" key={index}>
//               <div className="message-header">
//                 <span className="message-sender">{message.sender}</span>
//                 <span className="message-timestamp">{new Date(message.timestamp).toLocaleString()}</span>
//               </div>
//               <p className="message-content">{message.content}</p>
//             </div>
//           ))}
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Advice;

