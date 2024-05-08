import { createContext, useState } from 'react';

const AuthContext = createContext({});
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(true);

  const logout = async () => {
    setAuthState(false);
  };
  const login = async () => {
    setAuthState(true);
  };
  return (
    <Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
