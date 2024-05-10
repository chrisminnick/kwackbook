import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginForm() {
  const { authState, login, logout } = useContext(AuthContext);
  return (
    <>
      {authState ? (
        'You are logged in. '
      ) : (
        <div>
          <p>Please Log In</p>
          <div>
            <label htmlFor="email">
              Email: <input type="email" id="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password: <input type="password" id="password" />
            </label>
          </div>
        </div>
      )}
      {authState ? (
        <button onClick={() => logout()}>Log Out</button>
      ) : (
        <button onClick={() => login()}>Log In</button>
      )}
    </>
  );
}
export default LoginForm;
