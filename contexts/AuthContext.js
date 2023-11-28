import React, { createContext, useState, useEffect } from "react";

// Define the context
const AuthContext = createContext();

// Data Provider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };