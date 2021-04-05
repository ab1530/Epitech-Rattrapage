// import AuthGoogle from "./authGoogle";
import "./lg.css";
import GoogleLogin from 'react-google-login';
import AuthGoogle from '../Pages/AuthGoogle'

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem('profil', response.profileObj)
    localStorage.setItem('token', response.tokenObj)
    localStorage.setItem('isConnected', true)
  }
  return (
    <section className="login">
      <div className="loginContainer">
      <AuthGoogle/>
        <label>Username</label>
        <input
          type="text"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have a account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
              <div>
                {/* <GoogleLogin
    clientId="870987710777-lpaq6d3e088svhj5vcqecbrciqtijocq.apps.googleusercontent.com"
    // render={renderProps => (
    //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    // )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />, */}

                </div>
            </>
          ) : (
              <>
                <button onClick={handleSignup}>Sign up</button>
                <p>
                  Have and account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                </p>
                <div>
                {/* <GoogleLogin
    clientId="870987710777-lpaq6d3e088svhj5vcqecbrciqtijocq.apps.googleusercontent.com"
    // render={renderProps => (
    //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    // )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />, */}
                  <authGoogle/>

                </div>
              </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Login;
