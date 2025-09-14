import React from 'react';
import './App.css';

function App() {
  const handlePartnerWithUsClick = () => {
    window.open('https://github.com/Kartik1446/traya', '_blank');
  };

  return (
    <div className="App">
      <section className="HeroSection">
        <div className="HeroContent">
          <h1 className="Headline">Reimagining Track Inspection – Indigenous, Contactless, World-Class ITMS</h1>
          <p className="Subheadline">Cutting-edge sensors, AI, and engineering delivering railway safety, accuracy, and Atmanirbhar Bharat innovation.</p>
          <div className="CallToActionButtons">
            <button className="Button PrimaryButton">Explore Technology</button>
            <button className="Button SecondaryButton" onClick={handlePartnerWithUsClick}>Partner With Us</button>
          </div>
          <p className="Tagline">Accuracy. Reliability. Atmanirbhar.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
