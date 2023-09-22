# Social Interest

The "Social Interest Network" is a vibrant online platform that connects individuals based on shared social interests and passions. Whether you're a fan of photography, gaming, cooking, or any other hobby, this platform provides a welcoming space to meet and interact with like-minded enthusiasts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to the Social Interest Network, where passion meets connection! Our platform is a vibrant online community that brings together individuals who share a common love for their favorite hobbies and interests. Whether you're an art enthusiast, a tech wizard, or a fitness fanatic, you'll find a welcoming space to connect with like-minded people, share experiences, and dive into engaging conversations. Join us today and discover a world of social interests waiting to be explored. It's time to connect, collaborate, and celebrate your passions with the Social Interest Network. PLEASE NOTE THAT THIS IS FOR A PROJECT/TEST

## Features

List the key features of your project.

 - Admin Approval Registration: New user registrations require admin approval, ensuring a safe and trusted community.

 - Email Triggers: Automated emails are sent for account activation requests and approval notifications for user activation and approval.

 - CRUD Operations: Create, read, update, and delete functionality for user profiles, interests selections.

 - Custom SA ID Validation: Implemented custom South African ID validation to ensure accurate user data.

 - Form Handling with React JS: Utilized React JS for seamless and interactive form handling.

 - Middleware for Admin: Admin-specific middleware to control access and actions.

 - Role and Permission Management: Robust role and permission system for users, ensuring proper authorization and access control.

 - User Factory and Seeder: Created user factory and seeder for efficient database population.

 - Route Grouping and Protection: Grouped routes for better organization and added protection to sensitive routes.

 - User Data Relationships: Established relationships between users and their interests for a personalized experience.

## Getting Started

Social Interest is a powerful web application designed to connect people with shared interests. Whether you're looking for job opportunities, or networking, Social Interest has got you covered.

This guide will walk you through the process of setting up the project locally on your machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

Composer 2.6.2: A PHP dependency manager.
NPM: Node Package Manager (usually included with Node.js).
PHP 8.0.2 >: PHP programming language.
MySQL : MySQL database.

Project was built with Laravel 9.5

### Installation
 - Clone into directory into localhost directory (project was built with Hoemstead and Vagrant env)
 - Do a compose Install
 - Do a npm install
 - Create a db to connect to
 - Setup env file
   - APP_URL
   - DB_CONNECTION = mysql
   - DB_DATABASE
   - DB_USERNAME
   - DB_PASSWORD
   - MAIL_MAILER= I used smtp
   - MAIL_HOST
   - MAIL_PORT = dependant on encryption
   - MAIL_USERNAME
   - MAIL_PASSWORD
   - MAIL_ENCRYPTION
   - MAIL_FROM_ADDRESS
   - ADMIN_EMAIL (create if parameter does not exist)
 - Update FirstAdmin Seeder to a admin of your preference 
 - If first migration then "php artisan migrate" else "php migrate:fresh"
 - Seeders: php artisan db:seed    OR 
 - Permission(required): php artisan db:seed --class=PermissionSeeder
 - Roles(required): php artisan db:seed --class=RoleSeeder
 - First Admin(required): php artisan db:seed --class=FirstAdmin
 - User generator: php artisan db:seed --class=UserSeeder

 ## Flow Process
 Once setup, migration and seeders are complete, you can navigate to your domain http://localhost(:port if required) or http://domain.localhost(:port if required) where you will see an introduction and 2 navigation items (login, register). When register takes place successfully a message should appear stating that an admin must approve before logging in. The ADMIN_EMAIL parameter in .env file is where the request will be sent to. once you see that email there will be a button (before clicking, please be sure that that admin is logged in and has a session), click the button, this will redirect you to the admin dashboard and trigger an event email notifying that the account has been activated and can now log in. In the user dashboard you can now add interests by clicking add interest or on profile name in dropdown once you have multi selected interests and saved you can navigate back to the dashboard where it will display in desc order other users that share interests with you with their contact information.

 In the admin dashboard you will be able to see all the users, update them and delete them.

