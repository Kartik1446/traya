import React, { useRef, useEffect, useState } from 'react';
import './App.css';

function App() {
  const journeyRef = useRef(null);
  const [trainPosition, setTrainPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (journeyRef.current) {
        const section = journeyRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculate how far into the section we have scrolled
        // The animation should start when the section enters the viewport
        // and end when the section leaves the viewport
        const scrollStart = sectionTop - viewportHeight;
        const scrollEnd = sectionTop + sectionHeight;

        if (scrollY > scrollStart && scrollY < scrollEnd) {
          const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
          // Adjust the multiplier to control the train's movement speed/range
          setTrainPosition(progress * 100); // Move 100% across the track
        } else if (scrollY <= scrollStart) {
          setTrainPosition(0); // Reset to start if above the section
        } else if (scrollY >= scrollEnd) {
          setTrainPosition(100); // Ensure it's at the end if past the section
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreTechnologyClick = () => {
    journeyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerWithUsClick = () => {
    window.open('https://github.com/Kartik1446/traya', '_blank');
  };

  return (
    <div className="App">
      <section className="HeroSection">
        <video autoPlay loop muted className="BackgroundVideo">
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="HeroContent">
          <h1>Reimagining Track Inspection – Indigenous, Contactless, World-Class ITMS</h1>
          <p>Leveraging advanced AI and sensor technology for unparalleled railway safety and efficiency.</p>
          <div className="CtaButtons">
            <button className="PrimaryButton" onClick={handleExploreTechnologyClick}>Explore Technology</button>
            <button className="SecondaryButton" onClick={handlePartnerWithUsClick}>Partner with Us</button>
          </div>
          <p className="Tagline">Innovating the future of railway infrastructure.</p>
        </div>
      </section>

      <section className="JourneySection" ref={journeyRef}>
        <div className="JourneyContent">
          <h2>The Journey</h2>
          <p>Witness the evolution of railway inspection.</p>
          <div className="TrainContainer">
            <div className="Track">
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="Sleeper"></div>
              ))}
            </div>
            <img 
              src="/assets/train.png" 
              alt="Indian Railways WAP 7 Engine" 
              className="Train" 
              style={{ transform: `translateX(${trainPosition}vw)` }} 
            />
          </div>
          
          <div className="JourneyTextBlock">
            <h3>Phase 1: Vision & Conception</h3>
            <p>Our journey began with a bold vision: to revolutionize railway track inspection. We identified the critical need for a system that is not only indigenous and contactless but also world-class in its capabilities. This phase involved extensive research, conceptual design, and feasibility studies to lay the groundwork for a truly innovative solution.</p>
          </div>

          <div className="JourneyTextBlock">
            <h3>Phase 2: Advanced AI & Sensor Development</h3>
            <p>The core of our ITMS lies in its advanced artificial intelligence and state-of-the-art sensor technology. During this phase, our teams of engineers and data scientists meticulously developed proprietary AI algorithms for defect detection and predictive maintenance. Concurrently, we designed and integrated high-precision sensors capable of capturing granular data from the tracks, even at high speeds.</p>
          </div>

          <div className="JourneyTextBlock">
            <h3>Phase 3: Integration & Prototyping</h3>
            <p>Bringing together the AI and sensor components, this phase focused on seamless integration and rapid prototyping. We built initial versions of the ITMS, conducting rigorous testing in controlled environments to validate its performance and accuracy. This iterative process allowed us to refine the system, ensuring robust functionality and reliability.</p>
          </div>

          <div className="JourneyTextBlock">
            <h3>Phase 4: Field Trials & Optimization</h3>
            <p>With a functional prototype in hand, we moved to extensive field trials across diverse railway networks. This real-world testing provided invaluable insights, allowing us to optimize the ITMS for various operational conditions, weather patterns, and track types. Feedback from railway operators was crucial in fine-tuning the system for maximum efficiency and user-friendliness.</p>
          </div>

          <div className="JourneyTextBlock">
            <h3>Phase 5: Deployment & Scalability</h3>
            <p>The final phase focuses on the successful deployment of the ITMS across railway infrastructure. We've engineered the system for scalability, ensuring it can be seamlessly integrated into existing railway operations, from local lines to high-speed corridors. Our goal is to provide a comprehensive, future-proof solution that enhances safety and operational efficiency on a national and global scale.</p>
          </div>

        </div>
      </section>

      <section className="TechnologyDeepDiveSection">
        <div className="TechnologyDeepDiveContent">
          <h2>Technology Deep Dive</h2>
          <p>Explore the cutting-edge technologies powering our ITMS.</p>

          <div className="Module" onClick={() => toggleModule('ai')}>
            <h3>Advanced AI for Defect Detection</h3>
            <p>Our proprietary AI algorithms are trained on vast datasets of track imagery and sensor data, enabling highly accurate and rapid detection of various defects, from minor cracks to significant structural anomalies. Click to learn more.</p>
            {expandedModule === 'ai' && (
              <div className="ExpandedContent">
                <p>Detailed explanation of AI capabilities: We leverage deep learning models, including convolutional neural networks (CNNs) and recurrent neural networks (RNNs), to process high-volume visual and sensor data. Our AI can identify subtle anomalies that human inspection might miss, significantly improving the accuracy and speed of defect detection. This includes classification of crack types, measurement of wear, and detection of missing components.</p>
              </div>
            )}
          </div>

          <div className="Module" onClick={() => toggleModule('sensors')}>
            <h3>High-Resolution Sensor Arrays</h3>
            <p>We utilize a sophisticated array of high-resolution cameras, LiDAR, and ultrasonic sensors to capture comprehensive data about the track infrastructure. This multi-modal data fusion provides an unparalleled level of detail for analysis. Click to learn more.</p>
            {expandedModule === 'sensors' && (
              <div className="ExpandedContent">
                <p>Detailed explanation of sensor technology: Our system integrates industrial-grade cameras with resolutions up to 12K, providing crystal-clear images of the track surface. LiDAR sensors generate precise 3D point clouds for geometric analysis, while ultrasonic sensors detect internal flaws and material fatigue. Data from these diverse sources are fused to create a holistic view of track health.</p>
              </div>
            )}
          </div>

          <div className="Module" onClick={() => toggleModule('dataProcessing')}>
            <h3>Real-time Data Processing & Analytics</h3>
            <p>Our ITMS processes data in real-time, providing immediate insights into track conditions. Advanced analytics tools identify trends, predict potential failures, and prioritize maintenance needs, optimizing operational efficiency. Click to learn more.</p>
            {expandedModule === 'dataProcessing' && (
              <div className="ExpandedContent">
                <p>Detailed explanation of data processing: Utilizing edge computing and cloud-based parallel processing, our system can analyze terabytes of data per hour. Custom-built algorithms perform predictive analytics, identifying patterns indicative of future failures. This allows railway operators to move from reactive to proactive maintenance, reducing downtime and increasing safety.</p>
              </div>
            )}
          </div>

          <div className="Module" onClick={() => toggleModule('cloudInfrastructure')}>
            <h3>Cloud-Based Infrastructure & Scalability</h3>
            <p>Built on a robust cloud infrastructure, our system offers seamless data storage, processing, and accessibility. Its scalable architecture ensures that it can adapt to the needs of any railway network, from regional lines to national grids. Click to learn more.</p>
            {expandedModule === 'cloudInfrastructure' && (
              <div className="ExpandedContent">
                <p>Detailed explanation of cloud infrastructure: Our platform is hosted on leading cloud providers, ensuring high availability, disaster recovery, and global accessibility. The microservices architecture allows for independent scaling of different components, from data ingestion to analytical dashboards. This flexibility supports rapid deployment and integration with existing railway management systems.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="ValueBenefitsSection">
        <div className="ValueBenefitsContent">
          <h2>Value & Benefits</h2>
          <p>Discover how our ITMS transforms railway maintenance and operations.</p>

          <div className="BenefitCard">
            <h3>Enhanced Safety</h3>
            <p>Proactive defect detection significantly reduces the risk of accidents and derailments, ensuring safer railway operations for passengers and cargo.</p>
          </div>

          <div className="BenefitCard">
            <h3>Operational Efficiency</h3>
            <p>Automated inspection and predictive maintenance capabilities minimize downtime, optimize resource allocation, and extend the lifespan of railway infrastructure.</p>
          </div>

          <div className="BenefitCard">
            <h3>Cost Reduction</h3>
            <p>By preventing costly failures and streamlining maintenance processes, our ITMS delivers substantial savings in operational expenses and capital expenditures.</p>
          </div>

          <div className="ComparisonSection">
            <h3>Traditional vs. ITMS</h3>
            <div className="ComparisonTable">
              <div className="ComparisonColumn">
                <h4>Traditional Inspection</h4>
                <ul>
                  <li>Manual, time-consuming processes</li>
                  <li>Subject to human error and oversight</li>
                  <li>Reactive maintenance approach</li>
                  <li>High operational costs</li>
                </ul>
              </div>
              <div className="ComparisonColumn">
                <h4>Our ITMS</h4>
                <ul>
                  <li>Automated, rapid, and precise</li>
                  <li>AI-powered, objective defect detection</li>
                  <li>Proactive, predictive maintenance</li>
                  <li>Significant cost savings and efficiency</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other sections will go here */}
    </div>
  );
}

export default App;
