# 🚆 Traya – AI-Powered Train Scheduling & Passenger Tracking System

> **Traya** is an indigenous, AI-driven platform that optimizes train movement using real-time data while empowering passengers—especially tourists—to track their train live with just their **ticket ID**.  
> Our dual focus on **railway efficiency** and **passenger convenience** makes Traya unique, scalable, and aligned with **Atmanirbhar Bharat**.

---

## ✨ Features

- **AI-Powered Scheduling**: Predictive analytics to reduce congestion and delays.  
- **Ticket-ID Tracking**: Passengers can track live train location, ETA, and alerts.  
- **Unified Dashboard**: Operator + Passenger views for transparency and convenience.  
- **IoT Integration**: GPS, IMU, and sensors ensure reliable real-time data.  
- **Edge + Cloud Ready**: Runs on edge devices with TensorFlow Lite, scalable to cloud.  
- **Compliance Path**: Scalable toward RDSO TM/IM/448 and EN 13848 standards.  

---

## 🛠 Tech Stack

- **Machine Learning**: PyTorch (training), TensorFlow Lite (edge deployment), YOLOv8, OpenCV  
- **Backend**: Python, Flask/Django, REST APIs (NTES/IRCTC)  
- **Frontend**: React / Flutter for web and mobile dashboards  
- **Database**: PostgreSQL / MongoDB for train and passenger mapping  
- **IoT Layer**: GPS, IMU, Axle Encoder, Cameras, Edge Compute (Jetson/Raspberry Pi)  
- **Deployment**: Docker, Kubernetes (scalable services), SCADA integration (future)  

---

## ⚙️ System Workflow

1. **Data Ingestion** → GPS, APIs, and sensors feed live train data.  
2. **AI Scheduling Engine** → Predicts conflicts, reschedules to optimize throughput.  
3. **Passenger Tracking** → Ticket-ID → Train ID → Live Status/ETA/Alerts.  
4. **Dashboard** → Operator UI + Passenger view with map and notifications.  
5. **IoT Layer** → Ensures time-sync, sensor reliability, and edge preprocessing.  

---

## 🚀 Roadmap

- ✅ **Hackathon Prototype**: GPS + API + ML model + dashboard  
- 🔄 **Pilot Phase**: Deploy on a single TRC/test coach with IoT sensors  
- 📈 **Scaling Phase**: RDSO/EN compliance, multi-zone deployment across Indian Railways  
- 🌍 **Export Phase**: Adapt for metros, private freight corridors, and overseas markets  

---

## 📊 Business Model

- **B2G (Primary)**: Indian Railways, DFCCIL, Metro operators  
- **Revenue Streams**:  
  - Hardware sensor kits + integration  
  - Software licensing & SaaS dashboards  
  - AMC (Annual Maintenance Contracts)  
  - Data analytics services (predictive maintenance)  
- **Cost Advantage**: 40–60% cheaper vs imported ITMS solutions  

---

## 🧑‍🤝‍🧑 Team Traya

- **ML Engineers**: AI scheduling engine, defect detection models  
- **IoT Experts**: Sensor integration, data pipeline, edge computing  
- **Business & Strategy**: Roadmap, deployment plan, cost modeling  
- **System Integration**: Architecture, compliance, dashboards  

---

## 📂 Project Structure

| Folder / File   | Description |
|-----------------|-------------|
| **backend/**    | Flask/Django backend APIs for scheduling, ticket-ID mapping, and data handling |
| **frontend/**   | React/Flutter dashboards for operators and passengers |
| **ml-models/**  | PyTorch training scripts and TensorFlow Lite models for deployment |
| **iot/**        | Scripts for GPS, IMU, encoder, and sensor integration |
| **docs/**       | Standards, compliance documents, architecture diagrams, and references |
| **tests/**      | Unit tests and integration tests for validation |
| **README.md**   | Main project documentation and overview |



---

## 🔮 Future Enhancements

- Integration with **SCADA** for industrial-grade monitoring  
- Cloud-based predictive maintenance analytics  
- Environmental sensors for adaptive AI  
- Multi-language passenger dashboard for inclusivity  
- Export-ready deployment packages  

---

## 📚 Research & References

- [RDSO TM/IM/448 Rev.1:2023](https://rdso.indianrailways.gov.in)  
- [EN 13848 Track Geometry Standards](https://www.cen.eu)  
- [NTES Train Enquiry System](https://enquiry.indianrail.gov.in)  
- [IRCTC APIs](https://www.irctc.co.in)  
- [ERTMS – European Rail Traffic Management](https://www.ertms.net)  
- [TensorFlow](https://www.tensorflow.org) | [PyTorch](https://pytorch.org) | [YOLO](https://pjreddie.com/darknet/yolo)  

---

## 📸 Screenshots / Demo (to add later)
*(Insert system architecture diagram, dashboard screenshots, or demo video links here.)* 
<img width="875" height="262" alt="image" src="https://github.com/user-attachments/assets/2e7f5b1d-c604-4f12-885a-8f2f651bf4e8" />


---

## 📈 Graph Outputs
<img width="960" height="540" alt="AI" src="https://github.com/user-attachments/assets/d3957b3b-0253-4630-9c05-33e6b3f06824" />
<img width="960" height="540" alt="Logic" src="https://github.com/user-attachments/assets/79a5e6db-73d5-48e8-85f7-91a8031c7b66" />



## 🏆 Acknowledgements

This project was developed as part of **Smart India Hackathon (SIH) 2025**, under the theme *Transportation & Logistics*.  
Special thanks to mentors, faculty, and Indian Railways domain experts for guidance.  

---

## 📜 License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.  

---
