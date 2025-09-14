import React, { useState, useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';

function App() {
  const [expandedModule, setExpandedModule] = useState(null);
  const containerRef = useRef(null);

  const toggleModule = (moduleName) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  useEffect(() => {
    const trainAnimation = document.querySelector('.TrainAnimation');
    if (trainAnimation) {
      let position = 0;
      const speed = 0.5; // Adjust speed as needed

      const animateTrain = () => {
        position += speed;
        if (position > window.innerWidth) {
          position = -trainAnimation.offsetWidth;
        }
        trainAnimation.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateTrain);
      };

      animateTrain();
    }
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... other options
      }}
      watch={
        [
          // Dependencies to watch for scroll updates
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className="App">
          <header className="App-header" data-scroll-section>
            <nav className="Navbar">
              <div className="NavbarBrand" data-scroll-speed="1">Traya</div>
              <ul className="NavLinks" data-scroll-speed="1">
                <li><a href="#hero">Home</a></li>
                <li><a href="#journey">Journey</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#value">Value</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>

          <section className="HeroSection" id="hero" data-scroll-section>
            <video autoPlay loop muted className="HeroVideo" data-scroll data-scroll-speed="-2">
              <source src="/assets/video.mp4" type="video/mp4" />
            </video>
            <div className="HeroContent" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h1 className="HeroTitle">Traya: The Future of Rail</h1>
              <p className="HeroSubtitle">AI-Powered Efficiency, Unmatched Passenger Experience</p>
              <button className="CtaButton primary">Discover Traya</button>
            </div>
          </section>

          <section className="JourneySection" id="journey" data-scroll-section>
            <h2 className="SectionTitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Our Journey: Revolutionizing Rail Travel</h2>
            <div className="JourneyContent">
              <div className="Track" data-scroll data-scroll-speed="2">
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
                <div className="Sleeper"></div>
              </div>
              <div className="TrainAnimation" data-scroll data-scroll-speed="1"></div>
              <div className="JourneyText" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
                <p>At Traya, we're building the next generation of Intelligent Train Management Systems (ITMS). Our AI-driven platform optimizes railway efficiency and elevates the passenger experience to new heights.</p>
                <p>From real-time train tracking to predictive maintenance, Traya ensures smoother operations and happier journeys. We're committed to an Atmanirbhar Bharat, delivering an indigenous solution tailored for India's vast railway network.</p>
                <button className="CtaButton secondary">Track My Rail</button>
              </div>
            </div>
          </section>

          <section className="TechnologySection" id="technology" data-scroll-section>
            <h2 className="SectionTitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Technology Deep Dive</h2>
            <div className="TechnologyModules" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <div className={`Module ${expandedModule === 'ai' ? 'expanded' : ''}`} onClick={() => toggleModule('ai')}>
                <h3>Advanced AI for Defect Detection</h3>
                {expandedModule === 'ai' && (
                  <div className="ModuleContent">
                    <p>Leveraging state-of-the-art AI algorithms, Traya proactively identifies potential defects in tracks and rolling stock, minimizing downtime and enhancing safety.</p>
                  </div>
                )}
              </div>
              <div className={`Module ${expandedModule === 'sensors' ? 'expanded' : ''}`} onClick={() => toggleModule('sensors')}>
                <h3>High-Resolution Sensor Arrays</h3>
                {expandedModule === 'sensors' && (
                  <div className="ModuleContent">
                    <p>Our system integrates with high-resolution sensor arrays deployed across the railway network, providing granular data on train movement, track conditions, and environmental factors.</p>
                  </div>
                )}
              </div>
              <div className={`Module ${expandedModule === 'data' ? 'expanded' : ''}`} onClick={() => toggleModule('data')}>
                <h3>Real-time Data Processing & Analytics</h3>
                {expandedModule === 'data' && (
                  <div className="ModuleContent">
                    <p>Traya's powerful analytics engine processes vast amounts of real-time data, offering actionable insights for optimized scheduling, resource allocation, and operational decision-making.</p>
                  </div>
                )}
              </div>
              <div className={`Module ${expandedModule === 'cloud' ? 'expanded' : ''}`} onClick={() => toggleModule('cloud')}>
                <h3>Cloud-Based Infrastructure & Scalability</h3>
                {expandedModule === 'cloud' && (
                  <div className="ModuleContent">
                    <p>Built on a robust cloud infrastructure, Traya ensures seamless scalability, high availability, and secure data management, capable of handling the demands of a national railway system.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="ValueBenefitsSection" id="value" data-scroll-section>
            <h2 className="SectionTitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Value & Benefits</h2>
            <div className="BenefitCards" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <div className="BenefitCard">
                <h3>Enhanced Safety</h3>
                <p>Proactive defect detection and real-time monitoring significantly reduce accident risks.</p>
              </div>
              <div className="BenefitCard">
                <h3>Operational Efficiency</h3>
                <p>AI-driven scheduling and resource optimization lead to smoother operations and fewer delays.</p>
              </div>
              <div className="BenefitCard">
                <h3>Cost Reduction</h3>
                <p>Reduced maintenance costs, optimized fuel consumption, and efficient resource utilization.</p>
              </div>
            </div>

            <div className="ComparisonSection" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <h3 className="ComparisonTitle">Traya vs. Traditional Systems</h3>
              <div className="ComparisonTable">
                <div className="ComparisonColumn">
                  <h4>Traditional Systems</h4>
                  <ul>
                    <li>Manual scheduling</li>
                    <li>Reactive maintenance</li>
                    <li>Limited real-time data</li>
                    <li>High operational costs</li>
                    <li>Fragmented passenger info</li>
                  </ul>
                </div>
                <div className="ComparisonColumn">
                  <h4>Traya ITMS</h4>
                  <ul>
                    <li>AI-powered predictive scheduling</li>
                    <li>Proactive defect detection</li>
                    <li>Comprehensive real-time data</li>
                    <li>Optimized operational efficiency</li>
                    <li>Personalized passenger tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="BusinessRoadmapSection" id="roadmap" data-scroll-section>
            <h2 className="SectionTitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Business & Roadmap</h2>
            <div className="RoadmapTimeline" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <div className="RoadmapItem">
                <div className="RoadmapYear">2023</div>
                <div className="RoadmapDescription">
                  <h3>Phase 1: Prototype & Validation</h3>
                  <p>Develop core AI scheduling engine and passenger tracking module. Conduct initial trials with simulated data.</p>
                </div>
              </div>
              <div className="RoadmapItem">
                <div className="RoadmapYear">2024</div>
                <div className="RoadmapDescription">
                  <h3>Phase 2: Pilot Deployment & Refinement</h3>
                  <p>Pilot Traya on a test track or a specific railway section. Gather feedback and refine features based on real-world performance.</p>
                </div>
              </div>
              <div className="RoadmapItem">
                <div className="RoadmapYear">2025</div>
                <div className="RoadmapDescription">
                  <h3>Phase 3: National Rollout & Integration</h3>
                  <p>Scale Traya across major railway zones. Integrate with existing railway infrastructure and systems (NTES, IRCTC).</p>
                </div>
              </div>
              <div className="RoadmapItem">
                <div className="RoadmapYear">2026</div>
                <div className="RoadmapDescription">
                  <h3>Phase 4: Advanced Features & Global Expansion</h3>
                  <p>Introduce advanced features like predictive maintenance and dynamic pricing. Explore opportunities for international expansion.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="ContactCtaSection" id="contact" data-scroll-section>
            <h2 className="SectionTitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Get in Touch</h2>
            <p className="ContactSubtitle" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">Ready to revolutionize your rail operations or enhance your passenger experience?</p>
            <form className="ContactForm" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <input type="text" placeholder="Your Name" className="FormField" />
              <input type="email" placeholder="Your Email" className="FormField" />
              <textarea placeholder="Your Message" className="FormField MessageField"></textarea>
              <button type="submit" className="CtaButton primary">Send Message</button>
            </form>
            <div className="Footer" data-scroll data-scroll-speed="1" data-scroll-call="animateIn" data-scroll-offset="10%">
              <p>&copy; 2023 Traya. All rights reserved.</p>
              <div className="SocialLinks">
                <a href="#facebook" className="SocialLink">Facebook</a>
                <a href="#twitter" className="SocialLink">Twitter</a>
                <a href="#linkedin" className="SocialLink">LinkedIn</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
