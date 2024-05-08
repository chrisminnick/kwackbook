import { useState } from 'react';
export function useLogin() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  function logIn() {
    setLoggedInStatus(true);
    console.log('logged in');
  }
  function logOut() {
    setLoggedInStatus(false);
    console.log('logged out');
  }
  return { loggedInStatus, logIn, logOut };
}
