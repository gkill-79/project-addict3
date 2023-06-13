// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./pages/Header";
// import Home from "./pages/Home";
// import Counter from "./pages/Counter";
// import Advice from "./pages/Advice";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import AddictionsList from "./pages/AddictionsList";
// import CreateAddiction from "./pages/CreateAddiction";
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   const signIn = (email, password) => {
//     setIsAuthenticated(true);
//     setUser({ email: email, password: password });
//   };

//   const signOut = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <Router>
//       <Header isAuthenticated={isAuthenticated} signOut={signOut} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/counter" element={<Counter />} />
//         <Route path="/advice" element={<Advice />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/login"
//           element={<Login isAuthenticated={isAuthenticated} signIn={signIn} />}
//         />
//         <Route
//           path="/addictions"
//           element={<AddictionsList isAuthenticated={isAuthenticated} />}
//         />
//         <Route
//           path="/create-addiction"
//           element={<CreateAddiction isAuthenticated={isAuthenticated} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// // src\App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./layout/Header";
// import AuthContextProvider from "./AuthContext";
// import Home from "./pages/Home";
// import Counter from "./pages/Counter";
// import Advice from "./pages/Advice";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import AddictionsList from "./pages/AddictionsList";
// import CreateAddictionComponent from "./pages/CreateAddiction";
// import HeaderAuth from './pages/Header';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   const signIn = (email, password) => {
//     setIsAuthenticated(true);
//     setUser({ email: email, password: password });
//   };

//   const signOut = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <Router>
//       <HeaderAuth isAuthenticated={isAuthenticated} signOut={signOut} />
//       <Header isAuthenticated={isAuthenticated} signOut={signOut} />
//       <AuthContextProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/counter" element={<Counter />} />
//           <Route path="/advice" element={<Advice />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/login"
//             element={<Login isAuthenticated={isAuthenticated} signIn={signIn} />}
//           />
//           <Route
//             path="/addictions"
//             element={<AddictionsList isAuthenticated={isAuthenticated} />}
//           />
//           <Route path="/create-addiction" element={<CreateAddictionComponent isAuthenticated={isAuthenticated} />} />
//         </Routes>
//       </AuthContextProvider>
//     </Router>
//   );
// }

// export default App;

















// src\App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import AuthContextProvider from "./AuthContext";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Advice from "./pages/Advice";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddictionsList from "./pages/AddictionsList";
import CreateAddictionComponent from "./pages/CreateAddiction";
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    setIsAuthenticated(true);
    setUser({ email: email, password: password });
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} signOut={signOut} />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login isAuthenticated={isAuthenticated} signIn={signIn} />}
          />
          <Route
            path="/addictions"
            element={<AddictionsList isAuthenticated={isAuthenticated} />}
          />
          <Route path="/create-addiction" element={<CreateAddictionComponent isAuthenticated={isAuthenticated} />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;





























