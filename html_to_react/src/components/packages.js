import React from 'react';
import './packages.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import FooterComponent from './footer';

class EduPackages extends React.Component {
  render() {
    return (
      <div className="page1">
        
        <div className="video">
          <video src="va.mp4" autoPlay muted loop></video>
        </div>

        <div className="packages">
          <div className="text-box"><h1>EduPackages</h1></div>
          <div className="full">
            {/* Package 1 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="1.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>STARTER PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to 10 basic courses</li>
                      <li>Weekly quizzes</li>
                      <li>24/7 email support</li>
                      <li>Certificate of completion</li>
                      <li>Community forum access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="2.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>ADVANCED PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to 20 advanced courses</li>
                      <li>Monthly assessments</li>
                      <li>Live webinars</li>
                      <li>Priority email support</li>
                      <li>Interactive projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="3.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>PREMIUM PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Unlimited access to all courses</li>
                      <li>Personal mentorship</li>
                      <li>Exclusive events</li>
                      <li>24/7 phone support</li>
                      <li>Job placement assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Package 4 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="1.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>NEW PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to new courses</li>
                      <li>Exclusive content</li>
                      <li>Live sessions</li>
                      <li>Priority support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 5 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="2.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>SPECIAL PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to special courses</li>
                      <li>Personalized coaching</li>
                      <li>Workshop access</li>
                      <li>Assistance with projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 6 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="3.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>EXCLUSIVE PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to exclusive content</li>
                      <li>Personalized mentorship</li>
                      <li>Priority assistance</li>
                      <li>Guaranteed success</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default EduPackages;
