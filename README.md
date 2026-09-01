# BloodCare - Blood Donation & Management System

A comprehensive React-based web application for managing blood donations, blood banks, campaigns, and emergency blood requests.

## 📋 Table of Contents

- [BloodCare - Blood Donation \& Management System](#bloodcare---blood-donation--management-system)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [📁 Project Structure](#-project-structure)
  - [🛠️ Technologies](#️-technologies)
  - [📦 Installation](#-installation)
  - [🚀 Usage](#-usage)
    - [Main Pages](#main-pages)
  - [🔐 Authentication](#-authentication)
  - [📝 Pages \& Components](#-pages--components)
    - [Components](#components)
    - [Context](#context)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [website-link](#website-link)

## ✨ Features

- **User Authentication**: Secure login and signup system with protected routes
- **Blood Donation Management**: Register as a donor and manage donation information
- **Blood Banks**: Browse and search for blood banks in your area
- **Find Blood**: Search for blood availability by type
- **Emergency Blood Requests**: Submit urgent blood requests
- **Campaigns**: View and participate in blood donation campaigns
- **Hospitals**: Locate nearby hospitals
- **Contact**: Get in touch with the platform support team
- **Responsive Design**: Mobile-friendly user interface

## 📁 Project Structure

```
icp15-react-g2-project-bloodcare/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Button/
│   │   ├── Campaignscard/
│   │   ├── CardFindBlood/
│   │   ├── EmergencyBloodForm/
│   │   ├── Footer/
│   │   ├── Hospitalscard/
│   │   ├── NavBar/
│   │   ├── Searchbar/
│   │   ├── ProtectedRoute.jsx
│   │   └── icon-images/
│   ├── context/             # React Context for state management
│   │   └── AuthContext.jsx
│   ├── views/               # Page components
│   │   ├── About/
│   │   ├── BloodBanks/
│   │   ├── BloodRequest/
│   │   ├── Campaigns/
│   │   ├── Contact/
│   │   ├── Donors/
│   │   ├── FindBlood/
│   │   ├── Home/
│   │   ├── Hospitals/
│   │   ├── Login/
│   │   └── Signup/
│   ├── utils/               # Data files and utilities
│   │   ├── about.json
│   │   ├── bloodbanks.json
│   │   ├── campaigns.json
│   │   ├── donorinfos.json
│   │   ├── findblood.json
│   │   └── hospitals.json
│   ├── index.css
│   └── main.jsx
├── public/                  # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies

- **React**: UI library for building interactive components
- **Vite**: Fast build tool and development server
- **CSS**: Styling for components and pages
- **JavaScript**: Core programming language
- **ESLint**: Code quality and consistency

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd icp15-react-g2-project-bloodcare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Usage

Once the development server is running, open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Main Pages

- **Home** - Welcome page with application overview
- **Signup** - Create a new user account
- **Login** - Sign in to your account
- **Donors** - View and manage donor information
- **Blood Banks** - Find blood banks and check availability
- **Find Blood** - Search for specific blood types
- **Blood Request** - Submit emergency blood requests
- **Campaigns** - Browse active blood donation campaigns
- **Hospitals** - Locate nearby hospitals
- **About** - Learn more about BloodCare
- **Contact** - Get in touch with support

## 🔐 Authentication

The application uses context-based authentication with protected routes. Certain pages require user login to access.

## 📝 Pages & Components

### Components
- **Button**: Reusable button component
- **CampaignsCard**: Display campaign information
- **CardFindBlood**: Blood availability card
- **EmergencyBloodForm**: Form for emergency requests
- **Footer**: Application footer
- **HospitalsCard**: Hospital information card
- **NavBar**: Navigation header
- **SearchBar**: Search functionality
- **ProtectedRoute**: Authentication wrapper for routes

### Context
- **AuthContext**: Manages user authentication state

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for bugs and feature requests.

## 📄 License

This project is part of the ICP-15 React Group 2 Project.

## website-link

link :- https://bloodcaree.netlify.app/