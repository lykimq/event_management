# Event Management System

A full-stack event management application featuring a React frontend and Rust backend, providing comprehensive event organization and user management capabilities.

## 🌟 Overview

This Event Management System consists of two main components:
- A React-based frontend for user interface and interactions
- A Rust-powered backend service with PostgreSQL database and Google Calendar integration

## 🚀 Features

### Authentication
- User login and registration
- Secure session management
- Role-based access control (Admin/User)

### Event Management
- Event creation and registration
- View current, past, and future events
- Event editing and deletion
- Google Calendar synchronization
- Event notifications system

### User Management
- User registration and profile management
- Administrative user controls
- Secure user data handling

## 🛠 Technical Stack

### Frontend
- React.js
- React Router for navigation
- Modern CSS with responsive design

### Backend
- Actix-web framework (Rust)
- PostgreSQL with SQLx
- Google Calendar API integration
- CORS-enabled security

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- Rust (latest stable version)
- PostgreSQL
- npm or yarn package manager
- Google Calendar API credentials

## 🚀 Getting Started

### Environment Setup

1. Create a `.env` file in the backend directory:
```env
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
BACKEND_PORT=8080
FRONTEND_PORT=3000
```

2. Create a `.env` file in the frontend directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8080
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build and run the server:
```bash
cargo run
```

The backend API will be available at `http://localhost:8080`

## 🛣 Available Routes

### Frontend Routes

#### Authentication
- `/auth/login` - User login
- `/auth/signup` - New user registration
- `/auth/dashboard` - User dashboard

#### Event Management
- `/events/dashboard` - Event overview
- `/events/add` - Create new event
- `/events/list` - View all events
- `/events/past` - View past events
- `/events/current` - View current events
- `/events/future` - View upcoming events

### Backend API Endpoints

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

#### Event Management
- `POST /events/add` - Create new event
- `PUT /events/edit/{id}` - Update event
- `GET /events/list` - List all events
- `DELETE /events/{id}` - Delete event
- `POST /events/sync_google_calendar/{user_id}` - Sync with Google Calendar

## 🔒 Security Features

- Secure authentication system
- Protected routes
- Input validation
- CORS protection
- Secure data transmission

## 🧪 Testing

### Frontend Testing
```bash
npm test
```

### Backend Testing
```bash
cargo test
```

## 📦 Building for Production

### Frontend Build
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

### Backend Build
```bash
cargo build --release
```
This creates a release build in the `target/release` folder.
