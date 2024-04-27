import React from 'react';
import {Link} from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <div className="navbar">
        <a id="logo" href="edu.html" style={{marginLeft: '10px'}}>Learnera</a>
      </div>

      <div className="container">
        <div className="left-side">
          <p>The best way to study<br />Sign up for Free</p>
          <ul>
            <li>✔️LIVE Classes</li>
            <li>✔️Best Teachers</li>
            <li>✔️Free Quiz</li>
            <p style={{color: 'white', marginTop: '250px', marginLeft: '-50px', fontWeight: '550'}}>Learnera</p>
          </ul>
        </div>
        <div className="right-side">
          <div className="form-container">
            <h2 style={{margin: '10px', fontSize: '30px', fontWeight: '700'}}>New to Learnera</h2><br />
            <div className="form-container2">
              <form action="#" style={{fontWeight: '700'}}>
                Full Name
                <input className="ak" type="text" id="fullname" name="fullname" placeholder="Full Name" required style={{padding: '12px 10px 12px 15px', backgroundColor: '#F6F7FB', border: 'none', fontFamily: 'mukta', fontWeight: '500', boxShadow: '1px 1px 1px 0.5px rgba(0, 0, 0, 0.1)'}} />
                Mobile Number
                <input className="ak" type="text" id="mobile" name="mobile" placeholder="Mobile Number" required style={{padding: '12px 10px 12px 15px', backgroundColor: '#F6F7FB', border: 'none', fontFamily: 'mukta', fontWeight: '500', boxShadow: '1px 1px 1px 0.5px rgba(0, 0, 0, 0.1)'}} />
                Email
                <input className="ak" type="email" id="email" name="email" placeholder="Email ID" required style={{padding: '12px 10px 12px 15px', backgroundColor: '#F6F7FB', border: 'none', fontFamily: 'mukta', fontWeight: '500', boxShadow: '1px 1px 1px 0.5px rgba(0, 0, 0, 0.1)'}} />
                <label htmlFor="option1" style={{fontWeight: '300', fontSize: '14px'}}>
                  <input type="checkbox" id="option1" name="option1" value="Option 1" style={{verticalAlign: 'top'}} required /> I accept Learnera's <b>Terms of Service</b> and <b>Privacy Policy</b>
                </label>
                <button type="submit" style={{backgroundColor: '#C8BFE7', fontFamily: 'mukta', fontWeight: '600', padding: '5px 45px', fontSize: '20px'}}>Sign up</button>
              </form>
              <h3 STYLE={{textAlign: 'center'}}>OR</h3>
              <a href="signin.html">
                <button type="submit" style={{color: '#3d4457', width: '350px', backgroundColor: '#F6F7FB', fontFamily: 'mukta', fontWeight: '600', padding: '10px 26px', fontSize: '18px', border: 'solid 1px #C8BFE7'}}>Already have an account? Log in</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
