import React, { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authData = {
    user,
    setUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
