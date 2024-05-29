import React from 'react';

const Login = () => {
  return (
    <div style={{ fontFamily: 'Fira Sans, sans-serif' }}>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .login {
            padding-top: 25%;
          }

          html, .App, #root, .auth-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
          }

          .navbar-light {
            background-color: #ffffff;
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
          }

          .auth-wrapper {
            display: flex;
            padding-top: 50px;
            justify-content: center;
            flex-direction: column;
            text-align: left;
          }

          .auth-inner {
            width: 450px;
            margin: auto;
            background: #ffffff;
            box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
            padding: 40px 55px 45px 55px;
            border-radius: 15px;
            transition: all .3s;
          }

          .auth-wrapper .form-control:focus {
            border-color: #167bff;
            box-shadow: none;
          }

          .auth-wrapper h3 {
            text-align: center;
            margin: 0;
            line-height: 1;
            padding-bottom: 20px;
          }

          .custom-control-label {
            font-weight: 400;
          }

          .forgot-password,
          .forgot-password a {
            text-align: right;
            font-size: 13px;
            padding-top: 10px;
            color: #7f7d7d;
            margin: 0;
          }

          .forgot-password a {
            color: #167bff;
          }
        `}
      </style>
      <div className="login">
        <form>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;