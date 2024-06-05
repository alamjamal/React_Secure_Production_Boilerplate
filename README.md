# React-Redux Frontend Boilerplate

This boilerplate serves as a foundational structure for building a robust and scalable frontend application using React, Redux, and Redux Persist with encryption. It includes essential features and best practices to help you get up and running quickly with a secure and efficient front-end setup.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [State Management](#state-management)
- [Secure Cookie Management](#secure-cookie-management)
- [Firebase Authentication](#firebase-authentication)
- [Testing](#testing)
- [Linting](#linting)
- [CI/CD](#cicd)
- [Contributing](#contributing)

## Getting Started
Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
- Backend API

## Features
- **React**: A powerful JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Redux Persist with Encryption**: Persist and rehydrate Redux state with encryption to enhance security.
- **JWT Secure Storage**: Store JWT access and refresh tokens securely in HTTP-only cookies.
- **Firebase Authentication**: Enable login with Google and GitHub using Firebase Authentication.
- **ESLint and Prettier**: Maintain code quality with linting and formatting tools.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Declarative routing for React applications.
- **Material-UI**: A popular React UI framework for building responsive and accessible web applications.
- **Jest**: A delightful JavaScript testing framework for unit and integration tests.

## Project Structure
```
├── public
├── src
│ ├── assets
│ ├── components
│ ├── containers
│ ├── redux
│ │ ├── actions
│ │ ├── reducers
│ │ ├── store.js
│ ├── services
│ ├── utils
│ ├── App.js
│ ├── index.js
│ └── setupTests.js
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
└── yarn.lock
```

## Installation
Follow these steps to set up the project on your local machine:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/mern-frontend-boilerplate.git
    cd mern-frontend-boilerplate
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the required environment variables. Refer to the `.env.example` file for the necessary variables.

    Example `.env` file:
    ```makefile
    REACT_APP_API_URL=http://localhost:5000/api
    REACT_APP_ENCRYPTION_KEY=your_encryption_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

## Running the App
To start the development server, run:
```bash
npm start

Your React application should now be up and running. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## State Management
Redux is used for state management. The state is persisted using redux-persist with encryption to ensure that sensitive data is stored securely.

### Setting up Redux Store
The `src/redux/store.js` file configures the Redux store and integrates Redux Persist with encryption.

## Secure Cookie Management
JWT access and refresh tokens are stored securely in HTTP-only cookies to prevent XSS attacks. This is handled in the authentication services within `src/services`.

## Firebase Authentication
Firebase Authentication is used to enable login with Google and GitHub. The integration is set up in the `src/services/firebase.js` file.

### Setting up Firebase Authentication

1. Install Firebase:
    ```bash
    npm install firebase
    ```

2. Initialize Firebase in your project by creating a `src/services/firebase.js` file:
    ```javascript
    import firebase from 'firebase/app';
    import 'firebase/auth';

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };

    firebase.initializeApp(firebaseConfig);

    export const auth = firebase.auth();
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    export const githubProvider = new firebase.auth.GithubAuthProvider();
    ```

3. Use the Firebase authentication providers in your login component:
    ```javascript
    import React from 'react';
    import { auth, googleProvider, githubProvider } from '../services/firebase';

    const Login = () => {
      const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      const signInWithGitHub = () => {
        auth.signInWithPopup(githubProvider)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      return (
        <div>
          <button onClick={signInWithGoogle}>Login with Google</button>
          <button onClick={signInWithGitHub}>Login with GitHub</button>
        </div>
      );
    };

    export default Login;
    ```

## Testing
Jest is used for testing the application. To run the tests, use the following command:
```bash
npm test
## Contributing

We welcome contributions to improve this project. If you have suggestions, bug reports, or improvements, please create an issue or submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

Thank you for your contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
