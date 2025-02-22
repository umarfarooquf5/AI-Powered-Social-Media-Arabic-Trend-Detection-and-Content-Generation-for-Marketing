# AI Powered Social Media Arabic Trend Detection and Content Generation for Marketing

## Description

This project is a **social media trend detection and content generation platform** designed specifically for the Arabic language. It consists of a **frontend built with Vite React and Material UI** and a **backend powered by Python Flask**. The AI model (AraGPT2) is not included in this version, but the project provides a framework for content generation based on detected trends.
![Frontend_Design](https://github.com/user-attachments/assets/15a9c2d1-6ade-4df5-990f-840f8f57e9e3)

## Features

### Frontend (Vite + React + Material UI)

- **Sidebar** for navigation
- **Search Bar** for querying trends
- **Content Display** section for showing generated content
- **Settings** panel for user preferences
- **API integration** to fetch trends and generated content

### Backend (Flask + MongoDB)

- **Trend detection routes** to fetch trending topics
- **Content generation endpoint** for producing Arabic marketing content
- **MongoDB integration** for data storage
- **AraGPT2 model setup** (Not included in this version)

## Project Structure

```
AI-Powered-Trend-Detection/
│── frontend/  (Vite + React + Material UI)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ContentDisplay.jsx
│   │   │   ├── Settings.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   ├── api/
│   │   │   ├── fetchTrends.js
│   │   │   ├── fetchGeneratedContent.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── public/
│   │   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│── backend/  (Flask + MongoDB)
│   ├── models/
│   │   ├── aragpt2_model.py
│   ├── routes/
│   │   ├── trends.py
│   │   ├── generate_content.py
│   ├── database/
│   │   ├── mongodb_connection.py
│   ├── app.py
│   ├── requirements.txt
│── README.md
```

## Installation

### Prerequisites

- Node.js & npm (for frontend)
- Python & pip (for backend)
- MongoDB (for database)

### Steps to Run the Project

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Powered-Trend-Detection.git
cd AI-Powered-Trend-Detection
```

#### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

#### 3. Setup Backend

```bash
cd ../backend
pip install -r requirements.txt
python app.py
```

## API Endpoints

### Trend Detection API

- **GET /api/trends** - Fetches trending topics

### Content Generation API

- **POST /api/generate** - Generates Arabic marketing content based on detected trends

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.
