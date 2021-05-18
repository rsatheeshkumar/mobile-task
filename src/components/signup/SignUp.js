import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../auth/base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h1>SignUp</h1>
      <form className="card shadow-sm border-0" onSubmit={handleSignUp}>
        <div className=" d-flex flex-column">
          <label>
            Email
            <input
              className="form-control mt- p-2"
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
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
