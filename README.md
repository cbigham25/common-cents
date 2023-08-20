# Common Cents

**License:** MIT

## Overview

A collaborative MERN stack application that aids users in tracking their finances, categorizing expenses, and visualizing their spending habits. Designed and developed by Ben Antonneau, Caleb Bigham, and Blaine Duran.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Key Features](#key-features)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the root directory of the cloned repository in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run seed` to seed local database
5. Run `npm run develop` to concurrently start both the frontend and backend servers.

## Usage

The app is hosted with Heroku and AtlasDB and can be accessed at ``.


If running locally, the application can be accessed at `http://localhost:3000`.

## Key Features

### **Expense Tracking & Categorization**
Users can log expenses, specifying the amount and category. The app provides an intuitive dashboard that displays the users spending in each category, compared to their income for the month. 

### **Data Visualization**
With integrated charting libraries, users can view their spending habits via dynamic pie and bar charts. This assists in quickly identifying high-expenditure categories. (Feature still in development)

### **Authentication & User Profiles**
Through JWT authentication and secure password hashing, users can create profiles, securely log in, and have their financial data stored safely.

### **Needs vs Wants Analysis**
Based on the category of each expense, it is categorized as a need or a want. The budget calculated in the app is based on a standard 50-30-20 model, 50% to needs, 30% to wants, 20% for debt and savings. If followed, this will allow the user to afford for all their needs, pay off their debts, build savings, and understand how much they can spend on non-neccecities without stress.

### **Database Operations**
Utilizing MongoDB, the application stores user profiles, transaction data, and offers CRUD operations for managing personal finances.

## License

This project is licensed under the MIT License.

## Contact

- **Ben Antonneau**
- **Caleb Bigham**
- **Blaine Duran**

## Acknowledgments

- **MERN Stack**: An efficient combination of technologies - MongoDB, Express.js, React, and Node.js.
- **JWT**: For user authentication and maintaining sessions.
- **bcrypt.js**: For password hashing and ensuring user security.
- **Charting Libraries**: Essential for data visualization and understanding spending trends.
- **Mongoose**: Provides a straight-forward, schema-based solution to model application data with MongoDB.
