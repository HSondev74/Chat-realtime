import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState({});

     useEffect(() => {
          const unsubriced = onAuthStateChanged(auth, (user) => {
               setCurrentUser(user);
               console.log({ user });
          });

          return () => {
               unsubriced();
          };
     }, []);

     return (
          <AuthContext.Provider value={{ currentUser }}>
               {children}
          </AuthContext.Provider>
     );
};
