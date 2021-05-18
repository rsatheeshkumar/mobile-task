import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../auth/base";
import { AuthContext } from "../../auth/Auth";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h1>Log in</h1>
      <form className="card shadow-sm border-0" onSubmit={handleLogin}>
        <div className="d-flex flex-column w-100 h-100 card-body">
          <label>
            Email
            <input
              className="form-control mt-3 p-2"
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              className="form-control mt-3 p-2"
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>

          <button
            type="submit"
            className="button mt-2 p-2 btn btn-sm btn-success"
          >
            Log in
          </button>
          <Link to="/signup">To SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
