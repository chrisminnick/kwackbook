function LoginForm(props) {
  return (
    <>
      {props.loggedInStatus ? (
        'Welcome'
      ) : (
        <form>
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
        </form>
      )}
    </>
  );
}
export default LoginForm;
