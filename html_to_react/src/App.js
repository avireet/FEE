import React from 'react';
import logo from './logo.svg';
import Carousel from "react-responsive-carousel" ;
import './App.css';
import './css/styles.css';
import Navbar from './components/navbar';
import Page1 from './components/page1';
import Quiz from './components/quiz';
import Page3 from './components/page3';


import Results from './components/result';
import Vision from './components/vision';
import Teachers from './components/teachers';
import Review from './components/review';
import FAQ from './components/faq';
import Footer from './components/footer';


//function App() {
//   return (
//     <div className="App">
//       {/* page1 */}
//       <section>
//         <div className="page1">
//           <div id="navbar">
//             <a id="logo" href="#" style={{marginLeft: '10px'}}>Learnera</a>
//             <a href="edu.html" style={{marginLeft: '500px'}}>Home</a>
//             <a href="edupack.html">Packages</a>
//             <a href="contact.html" style={{marginRight: '450px', border: '10px'}}>Contact</a>
//             <a id="signin" href="signin.html">Sign In</a>
//           </div>
//           {/* carousel */}
//           <div className="carousel" id="myCarousel">
//             <div id="carouselExampleCaptions" className="carousel slide">
//               <div className="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//               </div>
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <img src="one.png" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                   <img src="two.png" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                   <img src="three.png" className="d-block w-100" alt="..." />
//                 </div>
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* trust page */}
//       <section>
//         <div className="page3">
//           <div className="heading">
//             <p>Our students and parents love us</p>
//           </div>
//           <div className="boxes">
//             {/* Add boxes content here */}
//           </div>
//         </div>
//       </section>
//       {/* quiz */}
//       <section>
//         <div className="quiz">
//           <div className="quizh">
//             <h2>TEST YOUR</h2>
//           </div>
//           <div className="quizh">
//             <h2>KNOWLEDGE</h2>
//           </div>
//           <div className="quizb">
//             <a href="quiz.html"><button>TAKE QUIZ</button></a>
//           </div>
//         </div>
//       </section>
//       {/* our results */}
//       <section>
//         <div className="result-page">
//           {/* Add results content here */}
//         </div>
//       </section>
//       {/* our vision */}
//       <section>
//         <div className="vision">
//           {/* Add vision content here */}
//         </div>
//       </section>
//       {/* our teachers */}
//       <section>
//         <div className="our-teachers">
//           {/* Add teachers content here */}
//         </div>
//       </section>
//       {/* faq */}
//       <section>
//         <div className="faq">
//           {/* Add FAQ content here */}
//         </div>
//       </section>
//       {/* review */}
//       <div className="review">
//         <p>Hear what our students are saying...</p>
//         {/* Add review content here */}
//       </div>
//       {/* footer */}
//       <footer>
//         <div>
//           {/* Add footer content here */}
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
const App = () => {
  return (
    <div>
      <Navbar /> 
      <Page1 />
      <Page3 />
      <Quiz />
      
      <Results />
      <Vision />
      <Teachers />
      <Review />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
