/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseApp from "../config/firebase.config";

const userContext = createContext({ user: null, setUser: () => {} });

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: null, setUser: () => {} });
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
