
# Task Manager

A full-stack task manager application built with Node.js, Express, and MySQL on the backend, and React on the frontend. The application includes user authentication, secure task management, and status tracking.

## Project Structure

- **Backend**: Contains the RESTful API with user authentication and task management.
- **Frontend**: Contains the React client application stored in the `client` folder.

## Features

- **User Authentication**: Secure JWT-based login system.
- **Task Management**: Create, read, update, and delete tasks with a status indicator.
- **Task Status**: Track task statuses (e.g., TODO, DOING, DONE).
- **Middleware for Verification**: Ensures authenticated users can only access their tasks.
- **Notifications**: Real-time toasts for task operations.
- **Drag n Drop **: Drag and drop for task operatins.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v12 or higher).
- **MySQL**: Install MySQL and set up a database for the application.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

### Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the `backend` folder and add the following:

   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client folder:

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

4. Access the application at `http://localhost:3000` (or the port specified in your environment).

## Backend Dependencies

- **bcryptjs**: Password hashing for user security.
- **cookie-parser**: Parse cookies for session management.
- **dotenv**: Environment variable management.
- **express**: Web framework for creating the RESTful API.
- **jsonwebtoken**: JSON Web Tokens for secure authentication.
- **mysql2**: MySQL database connector.

## Frontend Dependencies

- **@fortawesome**: FontAwesome icons for UI elements.
- **axios**: For HTTP requests.
- **bootstrap**: UI framework for styling.
- **react-dnd**: Drag-and-drop functionality.
- **react-toastify**: Toast notifications for user feedback.
- **react-router-dom**: For routing between pages.
- **web-vitals**: For measuring performance.

## API Endpoints

### User Authentication

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.

### Task Management

- **GET** `/api/tasks`: Get all tasks for the authenticated user.
- **POST** `/api/tasks`: Create a new task.
- **GET** `/api/tasks/:id`: Get a specific task by ID.
- **PUT** `/api/tasks/:id`: Update a task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
