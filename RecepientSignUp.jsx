import React from 'react';

const RecepientSignUp = () => {
  return (
    <div>
      <div className='signup' style={{ paddingTop: '0' }}>
        <form style={{ width: '100%', maxWidth: '450px', margin: 'auto', background: '#ffffff', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }}>
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Sign Up</h3>
          <div className="mb-3">
            <label>Organisation name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Organization name"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Telephone number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Telephone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Please enter a valid South African telephone number (e.g., 123-456-7890)"
            />
          </div>
          <div>
            <label>Business Address</label>
            <div className="mb-3">
              <label>Street Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Street Address"
                required
              />
            </div>
            {/* Other address fields */}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
              required
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
  )
}

export default RecepientSignUp;
