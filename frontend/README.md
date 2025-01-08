# Event Management Frontend

A React-based frontend application for managing events, users, and notifications.

## Overview

This Event Management system provides a comprehensive interface for event organization and user management. It features user authentication, event registration, and administrative capabilities.

## Features

- **Authentication**
  - User login and registration
  - Secure dashboard access
  - Role-based access control (Admin/User)

- **Event Management**
  - Event creation and registration
  - View current, past, and future events
  - Event editing and deletion capabilities
  - Event notifications system

- **User Management**
  - User registration
  - Administrative user list view
  - User profile management


## Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Modern web browser


## Available Routes

### Authentication
- `/auth/login` - User login
- `/auth/signup` - New user registration
- `/auth/dashboard` - User dashboard

### Event Management
- `/events/dashboard` - Event overview
- `/events/add` - Create new event
- `/events/list` - View all events
- `/events/past` - View past events
- `/events/current` - View current events
- `/events/future` - View upcoming events
- `/events/edit/:id` - Edit specific event
- `/events/delete/:id` - Delete specific event
- `/events/notifications` - Event notifications

### User Management
- `/users/register` - User registration
- `/users/admin/register` - Admin user management

## Security Features

- Secure authentication system
- Protected routes
- Input validation
- Secure data transmission
