# Tele-Health Application

A full-stack web application built with **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
The app includes reusable components like **Sidebar, AppBar, Table, InputField, Search, and Tab Components**, styled with **Material UI (MUI)** and a **minimal color theme**.  
The frontend runs on port **5173**
The backend connects to the frontend via REST APIs and runs on port **5000**.

---

## Features

### Frontend
- Built with **React + Vite** for fast builds and hot reload.
- Styled using **Material UI (MUI)** with a **custom minimal color theme**.
- Reusable UI components:
  - **Sidebar**
  - **AppBar (Top Navigation)**
  - **Table**
  - **InputField**
  - **Search**
  - **Tabs**
  - **Appointment Card**
 
  - 
- Organized folder structure:
src/
atoms/ # Small, reusable UI components (buttons, icons, etc.)
components/ # Larger reusable components (tables, forms, etc.)
pages/ # Page-level components (views/screens)
routes/ # App routing (React Router setup)
utils/ # Helper functions

## Installation and Setup

### Clone the Repository
## git clone https://github.com/arunachalamravi/Tele-health.git
## cd tele-health
## npm install
## npm run dev

---


### Backend
- Built using **Node.js + Express**.
- Handles API requests for appointments and other resources.
- Configured to run on **port 5000**.
- Successfully integrated with frontend (returns **200 OK** for API requests).

---

## Installation and Setup

### Clone the Repository
## git clone https://github.com/arunachalamravi/Tele-health.git
## cd tele-health-backend
## npm install
## npm run start
