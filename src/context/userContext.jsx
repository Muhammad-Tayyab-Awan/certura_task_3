/* eslint-disable react-refresh/only-export-components */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../config/firebase.config";

const userContext = createContext({ user: null, setUser: () => {} });

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: null, setUser: () => {} });
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}

export default userContext;
