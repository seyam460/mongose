# 🏟️ Sports Complex Management System

<p align="center">
  <img src="https://img.shields.io/badge/Language-C-blue.svg">
  <img src="https://img.shields.io/badge/Platform-Console-green.svg">
  <img src="https://img.shields.io/badge/Data%20Storage-File%20Handling-orange.svg">
  <img src="https://img.shields.io/badge/Status-Completed-success.svg">
</p>

## 📖 Project Overview

The **Sports Complex Management System** is a console-based application developed in the **C Programming Language** using **File Handling** concepts.

The system is designed to simplify the management of a university sports complex by allowing administrators to manage available sports, schedule bookings, maintain customer records, and calculate booking costs automatically.

The project demonstrates the practical implementation of:

- Structured Programming
- File Handling
- Modular Programming
- Data Validation
- Console-based User Interface
- Real-world Sports Facility Management

---

# 🎯 Objectives

The primary objectives of this project are:

- Automate sports facility booking.
- Reduce manual record keeping.
- Provide secure administrator access.
- Manage sports and booking information efficiently.
- Generate booking bills automatically.
- Store booking information permanently using files.

---

# ✨ Key Features

## 👨‍💼 Admin Features

- Secure Admin Login
- Username & Password Authentication
- Limited Login Attempts
- Add New Sports/Game
- Delete Existing Sports
- View All Available Games
- Book Slots for Walk-in Customers
- View Complete Booking Schedule
- View Confirmed Members
- Cancel Booking Using Booking ID

---

## 👤 Customer Features

- View Available Games
- View Booking Schedule
- Book Sports Slot
- Automatic Bill Calculation
- Booking Confirmation
- Unique Booking ID Generation

---

## 💰 Billing System

The system automatically calculates:

```
Total Bill = Price Per Hour × Number of Hours
```

Example

| Game | Price | Hours | Total |
|------|--------|-------|-------|
| Football | $20 | 3 | $60 |

---

# 🔒 Admin Authentication

The project includes a secure login system.

Default Credentials

| Username | Password |
|----------|----------|
| admin | admin123 |

Features

- Username verification
- Password verification
- Maximum 3 login attempts
- Unauthorized access prevention

---

# 📁 Data Storage

The project stores data using text files.

| File Name | Purpose |
|------------|---------------------------|
| games.txt | Stores all available games |
| bookings.txt | Stores all confirmed bookings |
| temp.txt | Temporary booking file |
| temp_games.txt | Temporary game file |

---

# 📂 Project Structure

```
Sports-Complex-Management-System/
│
├── main.c
├── games.txt
├── bookings.txt
├── temp.txt
├── temp_games.txt
├── README.md
```

---

# ⚙️ Technologies Used

- C Programming
- File Handling
- Structures
- Functions
- Conditional Statements
- Loops
- String Manipulation
- Time Library
- Console I/O

---

# 📌 Modules

### Admin Module

- Login
- Add Game
- Delete Game
- Book Game
- View Games
- View Schedule
- Cancel Booking
- View Members

---

### Customer Module

- View Schedule
- Book Game
- View Available Games

---

### Booking Module

- Booking Validation
- Booking ID Generation
- Bill Calculation
- Schedule Management

---

### Game Management Module

- Add Game
- Delete Game
- View Games
- Search Existing Game

---

# 🧾 Booking Workflow

```
Customer
      │
      ▼
View Available Games
      │
      ▼
Select Game
      │
      ▼
Enter Time Slot
      │
      ▼
Duration Validation
      │
      ▼
Calculate Bill
      │
      ▼
Generate Booking ID
      │
      ▼
Store into bookings.txt
      │
      ▼
Booking Confirmed
```

---

# 🛡️ Validation

The system validates:

- Invalid Login
- Invalid Game Name
- Invalid Time Slot
- Invalid Booking ID
- Duplicate Wrong Inputs
- Empty Booking Records

---

# 📸 Sample Console Output

```
=========================================
Daffodil University Sports Management System
=========================================

1. Admin
2. Customer
3. Exit

Select Role:
```

---

# 🚀 Future Improvements

The following features can be added in future versions:

- Password Encryption
- Customer Login System
- Online Payment Integration
- Monthly Revenue Report
- Graphical User Interface (GUI)
- Database (MySQL)
- Booking Conflict Detection
- Search Booking by Customer Name
- Booking Update Option
- Email Notifications

---

# 👨‍💻 Team Contribution

| Team Member | Student ID | Responsibilities | Contribution |
|-------------|------------|-----------------|--------------|
| **Abid Hasana Sifat** | **252-35-256** | Admin Module Development, Admin Authentication, Game Management (Add/Delete/View), Booking Management | **40%** |
| **Md. Thowhidul Mehraj** | **252-35-256** | Admin Module Development, Booking System, Billing Calculation, File Handling, Schedule Management, Validation, Project Integration | **40%** |
| **Rakib Hossian** | **252-35-251** | Customer Module Development, Customer Booking Interface, Schedule Viewing, Testing & Debugging | **20%** |

---

# 📚 Learning Outcomes

This project helped us understand:

- File Handling in C
- Structures
- Modular Programming
- Data Validation
- Real-world Console Application Development
- Sports Facility Management Logic
- Booking Management System
- Team Collaboration
- Git & GitHub Workflow

---

# 📄 License

This project is developed for educational purposes as part of the **Software Engineering** course at **Daffodil International University (DIU)**.

---

# 🙏 Acknowledgement

We sincerely thank our course instructor and Daffodil International University for providing us the opportunity to develop this project as part of our academic learning.

---

# ⭐ Support

If you like this project,

⭐ Star this repository

🍴 Fork it

📢 Share it with others

Happy Coding ❤️
