import React from 'react';

const SignUp = () => {
  return (
    <div>
      <div className='signup' style={{ paddingTop: '25%' }}>
        <form style={{ width: '450px', margin: 'auto', background: '#ffffff', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }}>
          <div className="mb-3">
            <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Sign Up</h3>
            <label> Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-3">
            <label> Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label> Telephone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone Number"
            />
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="address"
              className="form-control"
              placeholder="Enter address"
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
