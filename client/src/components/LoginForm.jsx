import { useLogin } from '../hooks/useLogin';

function LoginForm() {
  const { logIn, logOut, loggedInStatus } = useLogin();

  return (
    <>
      {loggedInStatus ? (
        'Welcome'
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
      {loggedInStatus ? (
        <button onClick={() => logIn()}>Log In</button>
      ) : (
        <button onClick={() => logOut()}>Log Out</button>
      )}
    </>
  );
}
export default LoginForm;
