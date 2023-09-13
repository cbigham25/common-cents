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

The app is hosted with Heroku and AtlasDB and can be accessed at `https://common-cents-bootcamp-fc6fba95f1fb.herokuapp.com/`.

If running locally, the application can be accessed at `http://localhost:3000`.
 
## Key Features

### **Expense Tracking & Categorization**
Users can log expenses, specifying the amount and category. The app provides an intuitive dashboard that displays the users spending in each category, compared to their income for the month. 

### **Data Visualization**
With integrated charting libraries, users can view their spending habits via dynamic pie and bar charts. This assists in quickly identifying high-expenditure categories. 

### **User Authentication**
Through JWT authentication and secure password hashing, users can securely log in, and have their financial data stored safely.

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

- **MongoDB**: The backbone of the database for this application, providing a flexible and scalable NoSQL data store.
  
- **Express.js**: A minimal web application framework used to build the API, it streamlined the development process and made server-side logic more manageable.
  
- **React**: A powerful JavaScript library for building user interfaces, it enabled the creation of reusable UI components and made the front-end highly interactive.
  
- **Node.js**: The runtime that empowered the server-side logic, providing a robust foundation for handling asynchronous operations, file systems, and more.
  
- **GraphQL**: As the query language for our API, it allowed for a flexible and efficient interaction between the front-end and the back-end, enabling the client to request exactly what it needs.
  
- **JWT**: Utilized for user authentication and maintaining secure sessions, it provided a way to keep track of user activities securely.
  
- **bcrypt.js**: Ensured user security through password hashing, providing an added layer of data protection.
  
- **Chart.js**: Used for data visualization, it made the presentation of data both aesthetic and intuitive, enhancing the user experience.
