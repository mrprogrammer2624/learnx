# Education Management System (EMS) Frontend

## Overview

This project is a frontend implementation of an Education Management System (EMS) using React. It provides role-based dashboards for administrators, teachers, and students to manage courses, enrollments, and track performance.

## Features

- Role-based access control (Admin, Teacher, Student)
- Course management (create, edit, delete courses)
- User management (manage students and teachers)
- Grade management
- Performance tracking and visualization
- Responsive design

## Technologies Used

- React
- Redux for state management
- React Router for routing
- Ant Design (antd) for UI components
- Chart.js for data visualization

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/mrprogrammer2624/learnx
   cd education-management-system
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

1. Log in with your credentials (admin, teacher, or student account).

2. Navigate through the dashboard based on your role:
   - Admin: Manage courses, users, and view statistics
   - Teacher: Manage assigned courses and student grades
   - Student: View enrolled courses and grades
