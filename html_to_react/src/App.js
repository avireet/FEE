import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactPage from './components/ContactPage';
import Footer from './components/footer';
import Page1 from './components/page1';
import Quiz from './components/quiz';
import Page3 from './components/page3';
import Results from './components/result';
import Vision from './components/vision';
import Teachers from './components/teachers';
import Review from './components/review';
import FAQ from './components/faq';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Page1 />
        <Quiz />
        <Page3 />
        <Results />
        <Vision />
        <Teachers />
        <Review />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
