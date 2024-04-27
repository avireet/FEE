import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactPage from './components/ContactPage';
import EduPackages from './components/packages';
import Signin from './components/signin';
import Footer from './components/footer';
import Page1 from './components/page1';
import Quiz from './components/quiz';
import Page3 from './components/page3';
import Results from './components/result';
import Vision from './components/vision';
import Review from './components/review';
import FAQ from './components/faq';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          {/* Define other routes here */}
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/packages" element={<EduPackages />} />
        </Routes>
        
      </div>
    </Router>
  );
}

// Define a Home component if needed
const Home = () => (
  <>
    <Page1 />
    <Page3 />
    <Quiz />
    <Results />
    <Vision />
    <Review />
    <FAQ />
  </>
);

export default App;