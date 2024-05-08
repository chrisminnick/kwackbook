function LoginForm(props) {
  return (
    <>
      {props.loggedInStatus ? (
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
      <button onClick={() => props.setLoggedInStatus(!props.loggedInStatus)}>
        {props.loggedInStatus ? 'Log Out' : 'Log In'}
      </button>
    </>
  );
}
export default LoginForm;
