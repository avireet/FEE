import React from 'react';
import './styles.css'; // Import corresponding CSS file

const Quiz = () => {
  return (
    <section>
      <div className="quiz">
        {/* Video element (if needed) */}
        {/* <video className="vid" src="learnera.mp4" autoPlay muted loop></video> */}

        {/* Quiz heading */}
        <div className="quizh">
          <h2>TEST YOUR</h2><br />
        </div>
        <div className="quizh">
          <h2>KNOWLEDGE</h2><br />
        </div>
        
        {/* Button to take the quiz */}
        <div className="quizb">
          <a href="quiz.html"><button>TAKE QUIZ</button></a>
        </div>
      </div>
    </section>
  );
}

export default Quiz;