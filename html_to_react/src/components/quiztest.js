import React, { useState } from 'react';
import './styles.css'; 
import QuizPage from './quiztest'; // Import QuizPage component

const Quiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <section>
      <div className="quiz">
        {/* Quiz heading */}
        <div className="quizh">
          <h2>TEST YOUR</h2><br />
        </div>
        <div className="quizh">
          <h2>KNOWLEDGE</h2><br />
        </div>
        
        {/* Button to take the quiz */}
        {!showQuiz && (
          <div className="quizb">
            <button onClick={handleTakeQuiz}>TAKE QUIZ</button>
          </div>
        )}

        {/* Render QuizPage component if showQuiz is true */}
        {showQuiz && <QuizPage />}
      </div>
    </section>
  );
}

export default Quiz;
