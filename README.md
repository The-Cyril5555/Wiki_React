# Wiki React

A modern, collaborative wiki application built with React and Node.js. Features user authentication, article management, Android mobile support, and real-time API integration.

## Overview

Wiki React is a full-stack web and mobile application designed to provide a collaborative platform for knowledge sharing. The application combines a responsive React frontend with a robust Node.js/Express backend, offering both web and Android native experiences.

## Tech Stack

**Frontend (Wiki)**
- React.js with TypeScript support
- - Ionic Framework for cross-platform UI components
  - - Capacitor for native Android compilation
    - - CSS/SCSS styling
      - - Docker containerization for deployment
       
        - **Backend**
        - - Node.js runtime environment
          - - Express.js web framework
            - - RESTful API architecture
              - - Docker & Docker Compose for containerized deployment
                - - SQLite database support
                 
                  - **Mobile**
                  - - Android native support via Capacitor
                    - - Cross-platform compatibility
                     
                      - ## Project Structure
                     
                      - ```
                        Wiki_React/
                        ├── wiki/                    # Frontend - React/Ionic application
                        │   ├── src/                # React source code
                        │   ├── public/             # Static assets
                        │   ├── android/            # Android native code
                        │   ├── capacitor.config.json
                        │   ├── ionic.config.json
                        │   └── package.json
                        ├── backend/                # Backend - Node.js/Express API server
                        │   ├── src/
                        │   │   ├── model/         # Data models
                        │   │   ├── routes/        # API endpoints
                        │   │   └── server.js      # Application entry point
                        │   ├── test/              # Test suite
                        │   ├── Dockerfile
                        │   ├── docker-compose.yml
                        │   ├── package.json
                        │   └── README.md
                        └── app.apk                # Android APK build
                        ```

                        ## Key Features

                        - **User Authentication**: Secure login and registration system with password verification
                        - - **Article Management**: Create, read, update, and delete wiki articles
                          - - **Responsive Design**: Mobile-first UI that works seamlessly across devices
                            - - **API Integration**: RESTful backend providing data access and business logic
                              - - **Docker Support**: Both frontend and backend are containerized for easy deployment
                                - - **Android Mobile**: Native Android application build with Capacitor
                                  - - **Cross-Platform**: Web and mobile support with code sharing where possible
                                   
                                    - ## Getting Started
                                   
                                    - ### Prerequisites
                                    - - Node.js (v14 or higher)
                                      - - npm or yarn package manager
                                        - - Docker and Docker Compose (optional, for containerized deployment)
                                          - - Android Studio (for Android development)
                                           
                                            - ### Backend Setup
                                           
                                            - Navigate to the backend directory and install dependencies:
                                           
                                            - ```bash
                                              cd backend
                                              npm install
                                              ```

                                              Start the development server:

                                              ```bash
                                              npm start
                                              ```

                                              The API server will be available at `http://localhost:3000` (or configured port).

                                              ### Frontend Setup

                                              Navigate to the wiki directory and install dependencies:

                                              ```bash
                                              cd wiki
                                              npm install
                                              ```

                                              Start the development server:

                                              ```bash
                                              npm start
                                              ```

                                              The web application will be available at `http://localhost:3000` (or configured port).

                                              ### Docker Deployment

                                              Both the frontend and backend support Docker containerization:

                                              ```bash
                                              # From project root with docker-compose.yml
                                              docker-compose up
                                              ```

                                              This will start both services in isolated containers with proper networking.

                                              ### Android Build

                                              To build the Android APK:

                                              ```bash
                                              cd wiki
                                              npm run build:android
                                              ```

                                              The resulting APK will be available for deployment to Android devices.

                                              ## Development

                                              ### Code Style
                                              - JavaScript/TypeScript for consistent development experience
                                              - - Component-based architecture for maintainability
                                                - - RESTful API design principles for backend
                                                 
                                                  - ### Testing
                                                  - Unit and integration tests are included in the backend test directory:
                                                 
                                                  - ```bash
                                                    cd backend
                                                    npm test
                                                    ```

                                                    ### Configuration
                                                    Environment variables can be set via `.env` files:
                                                    - Backend: `backend/.env`
                                                    - - Frontend: `wiki/.env`
                                                     
                                                      - ## API Documentation
                                                     
                                                      - The backend provides RESTful endpoints for article management and user operations. See `/backend/README.md` for detailed API documentation.
                                                     
                                                      - ## Contributing
                                                     
                                                      - Contributions are welcome! Please ensure code follows the project's style guidelines and all tests pass before submitting pull requests.
                                                     
                                                      - ## Architecture Highlights
                                                     
                                                      - - **Separation of Concerns**: Clear division between frontend UI and backend business logic
                                                        - - **Scalability**: Docker containerization enables horizontal scaling
                                                          - - **Mobile-First**: Progressive enhancement from mobile to desktop
                                                            - - **Security**: Password verification and authentication mechanisms
                                                              - - **Maintainability**: Modular component structure and organized code layout
                                                               
                                                                - ## Project History
                                                               
                                                                - - Initial project setup: April 2023
                                                                  - - Ongoing enhancements and bug fixes through June 2023
                                                                    - - Android compilation optimizations
                                                                      - - Login page improvements and integration API enhancements
                                                                       
                                                                        - ## License
                                                                       
                                                                        - This project is provided as-is. Check the repository for any specific license information.
                                                                       
                                                                        - ---

                                                                        For more information about individual components, see the README files in the respective directories:
                                                                        - Frontend details: [wiki/README.md](wiki/README.md)
                                                                        - - Backend details: [backend/README.md](backend/README.md)
