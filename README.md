## Tech Blog

A simple tech blog application built with Node.js, Express, and Sequelize ORM. This project demonstrates basic CRUD operations, user authentication, and dynamic content management using Handlebars for templating.

## Table of Contents

-[Features](#features)
-[Installation](#installation)
-[Usage] (#usage)
-[0Folder Structure](#folderstructure)
-[Configuration](#configuration)
-[API Endpoints](#apiendpoints)
-[License](#license)


## Features

-[User authentication (sign up, login)](#authentication)
-[CRUD operations for blog posts](#crudoperations)
-[User dashboard for managing posts](#dashboard)
-[Responsive design with CSS styling](#design)
-[Dynamic content rendering with Handlebars](#handlebars)

## Installation

To get started with the Tech Blog Project, follow these steps :


## Clone the repository

bash
Copy code
git clone https://github.com/yourusername/Tech-Blog.git
cd Tech-Blog

## Install dependencies:


bash
Copy code
npm install
## Set up the database:

psql -U postgres techblog_db

### Set Up Environment Variables
Create a .env file in the root directory and add your database configuration:

dotenv
Copy code
DB_HOST=techblog_db
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=tech_blog
DB_HOST=localhost
DB_PORT=3001


### Create and Migrate the Database

Ensure PostgreSQL is installed and running, then drop and recreate the database, and run migrations:
bash
psql -U postgres -c "DROP DATABASE IF EXISTS techblog_db;"
psql -U postgres -c "CREATE DATABASE techblog_db;"
psql -f db/schema.sql

### Start the server
bash
Copy code
npm start
The application will be running on [http://localhost:3001](https://localhost:3001).

## Configuration

- *Database*: PostgreSQL
- *ORM*: Sequelize
- *Server*: Express.js

## Usage
Sign Up: Navigate to /signup to create a new account.
Login: Navigate to /login to log into your account.
Dashboard: Access your dashboard at /dashboard to manage your posts.
Home: View all blog posts on the homepage at /.


## Folder Structure
bash
Copy code
Tech-Blog/
│
├── config/                # Database and application configuration
│   └── config.js
│
├── controllers/           # Request handlers
│   ├── authController.js
│   └── postController.js
│
├── models/                # Sequelize models
│   ├── index.js
│   └── post.js
│
├── public/                # Static files (CSS, images)
│   ├── images/
│   └── styles/
│
├── routes/                # Application routes
│   └── index.js
│
├── views/                 # Handlebars templates
│   ├── partials/
│   └── layouts/
│
├── .env                   # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── server.js              # Entry point for the application

### Testing Endpoints

You can use tools like Postman or cURL to test the API endpoints.

## API Endpoints

- *GET / * - Retrieve the homepage.
- *GET /login * - Retrieve the login page.
- *POST /login* - Create a new login.
- *GET /signup* - Retrieve the signup page.
- *POST /signup* - Create a new signup.
- *GET /dashboard* - Retrieve the dashboard page.
- *POST /posts* - Create a new post.
- *PUT /posts/:id* - Update a new post by using its id.
- *DELETE /posts/:id - Delete a post by using its id.




## License
- This project is licensed under the MIT License.

## Deployed URL on Render
- https://tech-blog-1-1dzo.onrender.com/