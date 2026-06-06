# 🩺 Doctor Appointment Booking System

<p align="center">
  <img src="./assets/banner.png" alt="Doctor Appointment System Banner" width="100%" />
</p>

<p align="center">
  <b>Smart Healthcare Appointment Management Platform</b>
</p>

<p align="center">
  Find Doctors • Book Appointments • Manage Health Records
</p>

---

## Overview

The Doctor Appointment Booking System is a React-based healthcare platform that helps patients find doctors, explore specialties, and book appointments easily.

Users can browse doctors, filter by specialty, view detailed profiles, and manage all their appointments from a centralized dashboard.

The system also includes authentication, profile management, and basic informational pages for a complete user experience.

---

## Stack

| Layer | Technology |
|------|------------|
| Frontend | React.js |
| Routing | React Router DOM |
| State Management | Context API |
| Styling | CSS / Tailwind CSS |
| API Communication | Axios |
| Build Tool | Vite |

---

## Features

- User authentication (Login / Register)
- Doctor listing and search
- Specialty-based filtering
- Doctor profile details
- Appointment booking system
- My appointments dashboard
- User profile management
- Responsive UI design
- Top doctors section
- About and Contact pages
- Reusable UI components

---

## Project Structure

```text
doctor-appointment-system/
├── src/
│   ├── assets/          # Images, icons, banners
│   ├── components/      # Navbar, Footer, Banner, SpecialtyMenu, TopDoctors
│   ├── pages/           # Home, Doctors, Appointment, Profile, About, Contact
│   ├── context/         # Global state management (Auth, Appointments)
│   ├── services/        # API handlers (Axios)
│   ├── hooks/           # Custom React hooks (if any)
│   ├── utils/           # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
