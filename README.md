# Employee Management System (EMS) 🚀

A simple **React-based Employee Management System** with role-based dashboards for **Admin** and **Employees**.  
This project allows an admin to assign tasks to employees, and employees can view their tasks on their dashboard. All data is stored in **localStorage**, with login/logout functionality.

---

## Features ✨

### Admin Features
- Login as admin using a valid email and password
- Assign tasks to employees
- View task statistics (New, Accepted, Completed, Failed)
- Logout functionality

### Employee Features
- Login using email and password
- View assigned tasks in their dashboard
- Task details include:
  - Title
  - Description
  - Category
  - Date
  - Status (New, Accepted, Completed, Failed)
- Logout functionality

---

## Project Data

- **Users**: 5 employees preloaded in `localStorage`
- **User Data Structure**:

```json
{
  "firstName": "Ali",
  "lastName": "Khan",
  "email": "ali@example.com",
  "password": "12345",
  "tasks": [],
  "taskCounts": {
    "newTask": 0,
    "completed": 0,
    "failed": 0
  }
}

