# Event Management System

A robust event management backend service built with Rust and Actix-web, featuring PostgreSQL integration and Google Calendar synchronization.

## Features

- 🔐 **Authentication System**
  - User login
  - User signup
  - Secure session management

- 👥 **User Management**
  - User registration
  - User profile updates
  - User deletion
  - Admin user listing

- 📅 **Event Management**
  - Create new events
  - Update existing events
  - Delete events
  - Multiple event viewing options:
    - All events listing
    - Past events
    - Current events
    - Future events
    - Current and future events combined
  - Google Calendar synchronization

## Technical Stack

- **Backend Framework**: Actix-web
- **Database**: PostgreSQL with SQLx
- **External Integration**: Google Calendar API
- **Security**: CORS enabled with configurable origins

## Setup

### Prerequisites

- Rust (latest stable version)
- PostgreSQL
- Google Calendar API credentials


### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
BACKEND_PORT=8080
FRONTEND_PORT=3000
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

### User Management
- `POST /users/register` - Register new user
- `PUT /users/{id}/edit` - Update user details
- `DELETE /users/{id}` - Delete user
- `GET /users/admin/list` - List all users (admin only)

### Event Management
- `POST /events/add` - Create new event
- `PUT /events/edit/{id}` - Update event
- `GET /events/list` - List all events
- `GET /events/past` - Get past events
- `GET /events/current` - Get current events
- `GET /events/future` - Get future events
- `GET /events/current_future` - Get current and future events
- `DELETE /events/{id}` - Delete event
- `POST /events/sync_google_calendar/{user_id}` - Sync event with Google Calendar

## Security

The application implements CORS protection with:
- Configurable allowed origins
- Allowed HTTP methods: GET, POST, PUT, DELETE, OPTIONS
- Allowed headers: Content-Type, Authorization
- Maximum age: 3600 seconds