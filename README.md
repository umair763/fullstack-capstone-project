# GiftLink - Fullstack Capstone Project

GiftLink is a full-stack web application that connects users who want to give away household items with users who prefer to recycle or find free items instead of purchasing new ones.

## Features

- **Item Listings**: Browse all available gift items on the main page
- **Search & Filter**: Filter items by category, name, and age
- **User Registration & Login**: Secure authentication using JWT tokens
- **Item Details**: View full details for any listed item
- **Sentiment Analysis**: NLP-powered sentiment analysis on user comments
- **User Profiles**: Editable user profile information

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **NLP**: natural npm package
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Project Structure

```
fullstack-capstone-project/
├── backend/
│   ├── routes/
│   │   ├── giftRoutes.js      # Gift item API routes
│   │   ├── searchRoutes.js    # Search/filter API routes
│   │   └── authRoutes.js      # Authentication API routes
│   ├── db.js                  # MongoDB connection
│   ├── app.js                 # Express server setup
│   ├── sample_gifts.json      # Sample gift item data
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage/
│   │   │   ├── RegisterPage/
│   │   │   └── LoginPage/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── sentiment/
│   ├── index.js               # Sentiment analysis microservice
│   └── package.json
├── .github/workflows/
│   └── ci-cd.yml              # GitHub Actions workflow
├── Dockerfile
├── user-story.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 6.0+
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/fullstack-capstone-project.git
cd fullstack-capstone-project
```

2. Install dependencies:
```bash
npm install --prefix backend
npm install --prefix frontend
npm install --prefix sentiment
```

3. Import sample data:
```bash
node backend/import_gifts.js
```

4. Start the backend server:
```bash
npm start --prefix backend
```

5. Start the frontend:
```bash
npm start --prefix frontend
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/gifts` | List all gift items |
| GET | `/api/gifts/:id` | Get item details |
| GET | `/api/search?category=X` | Search items by category |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| PUT | `/api/auth/update` | Update user profile |

## License

This project is part of the IBM Full Stack Software Developer Professional Certificate capstone.
