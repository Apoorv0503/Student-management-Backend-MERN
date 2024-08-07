#!/bin/bash

# Define the base directory (current directory)
BASE_DIR=$(pwd)

# Create the directory structure
mkdir -p "$BASE_DIR/controllers"
mkdir -p "$BASE_DIR/models"
mkdir -p "$BASE_DIR/routes"
mkdir -p "$BASE_DIR/auth"
mkdir -p "$BASE_DIR/validate"
mkdir -p "$BASE_DIR/config"

# Create the files in their respective directories
touch "$BASE_DIR/controllers/authController.js"
touch "$BASE_DIR/controllers/studentController.js"
touch "$BASE_DIR/models/student.js"
touch "$BASE_DIR/routes/authRoutes.js"
touch "$BASE_DIR/routes/studentRoutes.js"
touch "$BASE_DIR/auth/jwtStrategy.js"
touch "$BASE_DIR/auth/middleware.js"
touch "$BASE_DIR/validate/studentValidation.js"
touch "$BASE_DIR/config/db.js"
touch "$BASE_DIR/app.js"
touch "$BASE_DIR/server.js"

echo "Directory structure and files created successfully."

