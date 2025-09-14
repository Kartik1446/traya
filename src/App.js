import React, { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';
import logo from './logo.svg'; // Assuming logo.svg is in src folder
import CardNav from './CardNav'; // Import the new CardNav component
import indianRailwaysLogo from './indian_railways_logo.png'; // Corrected import path

function App() {
  const containerRef = useRef(null);
  const [trainPosition, setTrainPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainPosition(prevPosition => (prevPosition + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Hero", ariaLabel: "Go to Hero Section" }
      ]
    },
    {
      label: "Journey",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Our Journey", ariaLabel: "Explore Our Journey" }
      ]
    },
    {
      label: "Technology",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Tech Stack", ariaLabel: "View Technology Stack" }
      ]
    },
    {
      label: "Value",
      bgColor: "#372E47",
      textColor: "#fff",
      links: [
        { label: "Our Values", ariaLabel: "Discover Our Values" }
      ]
    },
    {
      label: "Roadmap",
      bgColor: "#473E57",
      textColor: "#fff",
      links: [
        { label: "Future Plans", ariaLabel: "See Our Roadmap" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#574E67",
      textColor: "#fff",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact Us" }
      ]
    }
  ];

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.05,
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <img src={indianRailwaysLogo} alt="Indian Railways Logo" className="indian-railways-logo" />
        <CardNav
          logo={null} // Set logo to null to remove it from the navbar
          logoAlt="Company Logo"
          items={navItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        <section id="hero" className="HeroSection" data-scroll-section>
          <div className="HeroContent">
            <h1 data-scroll data-scroll-speed="2">Traya: The Future of Rail Travel</h1>
            <p data-scroll data-scroll-speed="1" data-scroll-delay="0.1">AI-powered scheduling and passenger tracking for optimal efficiency.</p>
            <div className="CtaButtons" data-scroll data-scroll-speed="1" data-scroll-delay="0.2">
              <button className="CtaButton primary">Learn More</button>
              <button className="CtaButton secondary">Track My Rail</button>
            </div>
          </div>
        </section>

        <section id="journey" className="JourneySection" data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Our Journey</h2>
          <p data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">From concept to reality, Traya is revolutionizing rail.</p>
          <div className="JourneyTimeline">
            <div className="TimelineEvent" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Inception</h3>
              <p>The idea of Traya was born out of a need for smarter rail systems.</p>
            </div>
            <div className="TimelineEvent" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Development</h3>
              <p>Our team of experts began building the AI-powered platform.</p>
            </div>
            <div className="TimelineEvent" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Launch</h3>
              <p>Traya officially launched, changing the landscape of rail travel.</p>
            </div>
          </div>
        </section>

        <section id="technology" className="TechnologySection" data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Cutting-Edge Technology</h2>
          <p data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Leveraging AI and real-time data for unparalleled performance.</p>
          <div className="TechGrid">
            <div className="TechItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>AI Scheduling</h3>
              <p>Optimized train schedules to minimize delays.</p>
            </div>
            <div className="TechItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Real-time Tracking</h3>
              <p>Accurate passenger and train location updates.</p>
            </div>
            <div className="TechItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Predictive Maintenance</h3>
              <p>Anticipating issues before they occur.</p>
            </div>
          </div>
        </section>

        <section id="value" className="ValueBenefitsSection" data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Value & Benefits</h2>
          <div className="BenefitsGrid">
            <div className="BenefitItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Efficiency</h3>
              <p>Streamlined operations and reduced costs.</p>
            </div>
            <div className="BenefitItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Passenger Satisfaction</h3>
              <p>Improved punctuality and communication.</p>
            </div>
            <div className="BenefitItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Safety</h3>
              <p>Enhanced monitoring and rapid response.</p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="BusinessRoadmapSection" data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Business & Roadmap</h2>
          <div className="RoadmapContent">
            <div className="RoadmapItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Phase 1: Pilot Program</h3>
              <p>Implementing Traya in select regions.</p>
            </div>
            <div className="RoadmapItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Phase 2: National Expansion</h3>
              <p>Scaling Traya across the country.</p>
            </div>
            <div className="RoadmapItem" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3>Phase 3: Global Reach</h3>
              <p>Bringing Traya to international markets.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="ContactCtaSection" data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Get in Touch</h2>
          <p data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Ready to transform your rail operations?</p>
          <button className="CtaButton primary" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Contact Us</button>
        </section>

        <footer className="AppFooter" data-scroll-section>
          <p data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">&copy; 2023 Traya. All rights reserved.</p>
        </footer>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
