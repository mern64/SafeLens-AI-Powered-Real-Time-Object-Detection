**Project Title:**
SafeLens: AI-Powered Real-Time Object Danger Detection Mobile App

---

**1. Objective:**
To develop a mobile application that utilizes real-time computer vision and natural language processing to detect potentially dangerous objects through the camera and provide users with immediate, human-readable safety warnings and danger levels.

---

**2. Problem Statement:**
Everyday tools and objects such as scissors, knives, or nails pose risks, especially for children or unaware users. There is a lack of intelligent, accessible mobile tools that can identify such threats in real-time and provide contextual guidance or warnings. This project seeks to bridge this gap using computer vision and LLMs.

---

**3. Scope:**

* Detect common tools and sharp objects using a mobile camera
* Assign a threat level (Low, Medium, High)
* Generate safety tips or explain risks using a local LLM (Ollama)
* Display results in an easy-to-understand mobile UI
* Optional: support voice alerts or history tracking

---

**4. Methodology:**

**4.1 Tools & Technologies:**

* Mobile Framework: React Native (Expo) or Flutter
* Object Detection: YOLOv8 (pre-trained on COCO), Google ML Kit
* NLP Engine: Ollama running models like llama3, deepseek, or mistral
* API Layer: Python FastAPI or Flask backend
* Optional: Text-to-Speech using Expo or native TTS

**4.2 Development Steps:**

1. Build a mobile camera interface
2. Integrate YOLOv8 or ML Kit to detect known objects
3. Assign danger level based on object type
4. Send prompt to local LLM via API to explain object risks
5. Display response (danger level, risks, and safety tips)
6. Optional: Add TTS or save history logs

---

**5. Dataset and Models:**

* Use YOLOv8 pre-trained on COCO dataset (includes knife, scissors, spoon, fork, etc.)
* LLM queries handled by Ollama with deepseek or llama3 models
* Prompts like: "What are the dangers of using a screwdriver? Explain simply."

---

**6. MVP Features:**

* Live camera preview
* Object detection for common tools
* Danger level assignment logic
* Prompt sent to LLM and response displayed
* Basic UI for output

---

**7. Timeline (6 Months):**

| Month | Milestones                                   |
| ----- | -------------------------------------------- |
| 1     | Proposal + Research                          |
| 2     | Camera UI + Object Detection                 |
| 3     | Backend setup + LLM integration              |
| 4     | Response generation + Display in app         |
| 5     | Polish UI + Add voice or logs                |
| 6     | Final testing + Documentation + Presentation |

---

**8. Expected Output:**
A fully functional mobile app that can detect sharp or dangerous tools, assign a risk level, and explain potential dangers using an integrated LLM engine, suitable for educational and safety use.

---

**9. Future Work:**

* Expand object database with custom training
* Deploy LLM model directly on mobile


---


