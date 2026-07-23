# 🏟️ Sports Complex Management System

A **console-based Sports Complex Management System** developed in **C Programming Language** using **File Handling** concepts. The project is designed to simplify the management of sports facilities by providing separate interfaces for administrators and customers. It enables efficient game management, booking operations, schedule monitoring, and automated billing while maintaining persistent records through text files.

This project demonstrates the practical implementation of core C programming concepts, including structures, functions, file handling, string manipulation, input validation, and modular programming in a real-world management system.

---

# 📖 Project Overview

Managing sports facility bookings manually can often lead to scheduling conflicts, inaccurate records, and inefficient administration. This system addresses those challenges by providing a simple yet organized console application that digitizes the booking process.

The application offers two separate user roles:

* **Administrator** – Responsible for managing games, monitoring bookings, maintaining schedules, and controlling overall system operations through a secure login system.
* **Customer** – Can browse available games, view booking schedules, and reserve sports facilities with automatic bill calculation.

All booking information and game records are permanently stored in text files, allowing the system to preserve data even after the application is closed.

---

# ✨ System Features

## 👨‍💼 Administrator Panel

* Secure administrator authentication
* Username and password verification
* Maximum login attempt protection
* Add new sports or games
* Remove existing games
* View all available sports
* Create bookings for walk-in customers
* View complete booking schedule
* Display confirmed member list
* Cancel bookings using Booking ID

---

## 👤 Customer Panel

* View available sports
* Check booking schedule
* Reserve sports facilities
* Receive a unique Booking ID
* Automatic bill calculation based on booking duration

---

# 💾 Data Management

The project uses **text file storage** to maintain persistent data.

| File Name        | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `games.txt`      | Stores available sports, hourly prices, and duration information |
| `bookings.txt`   | Stores all confirmed booking records                             |
| `temp.txt`       | Temporary file used during booking cancellation                  |
| `temp_games.txt` | Temporary file used while deleting sports information            |

---

# ⚙️ Technologies Used

* C Programming Language
* File Handling
* Structures
* Functions
* String Handling
* Standard C Libraries
* Time Library (`time.h`)

---

# 📂 Project Structure

```text
Sports-Complex-Management-System/
│
├── main.c
├── games.txt
├── bookings.txt
├── temp.txt
├── temp_games.txt
└── README.md
```

---

# 🎯 Core Functionalities

* Secure Admin Authentication
* Sports Management
* Booking Management
* Schedule Monitoring
* Member Management
* Booking Cancellation
* Automatic Billing
* Booking ID Generation
* Input Validation
* Persistent File Storage

---

# 👥 Team Contributions

| Team Member              | Student ID     | Contribution                                                                                                                                                                                       |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abid Hasana Sifat**    | **252-35-256** | Developed the Admin Module, including game management features such as adding, deleting, and viewing sports, while contributing to the overall administration workflow.                            |
| **Md. Thowhidul Mehraj** | **252-35-256** | Developed the Admin Authentication system, Booking Management, Billing Calculation, Schedule Management, Member Management, Booking Cancellation, and integrated the core project functionalities. |
| **Rakib Hossian**        | **252-35-251** | Developed the Customer Module, including customer booking operations, schedule viewing, and participated in testing and debugging the overall application.                                         |

---

# 📚 Learning Outcomes

Through this project, we gained practical experience in:

* File Handling in C
* Structure-based Data Management
* Modular Programming
* Console Application Development
* User Authentication
* Data Validation
* Booking Management Logic
* Team Collaboration
* Real-world Problem Solving

---

# 🎓 Academic Purpose

This project was developed as an academic project for the **Software Engineering** course at **Daffodil International University (DIU)**. It demonstrates how fundamental C programming concepts can be applied to build a practical management system that simulates real-world sports complex operations.

---

## ⭐ Repository

If you find this project helpful or interesting, consider giving it a **Star ⭐** on GitHub.

