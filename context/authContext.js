import React from 'react';


export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [score, setScore] = React.useState(null);

    return (
      <AuthContext.Provider value={{ user, setUser, score, setScore }}>
        {children}
      </AuthContext.Provider>
    );
  };
