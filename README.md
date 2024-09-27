# User Acquisition Service

## Prerequisites

- **Node.js**: Version 12 or higher.
- **npm**: Comes with Node.js.
- **PostgreSQL**: Version 9.5 or higher.

## Installation

### 1. Clone the Repository

```
git clone https://github.com/GeorGius11/user-acquisition-service
cd user-acquisition-service
```

### 2. Install Dependencies

```
npm install
```

## Configuration

At the root of the project, create a .env file to store your environment variables:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=user_acquisition_db
ANALYTICS_SERVICE_URL=http://analytics.service/purchase
ASTROLOGY_SERVICE_URL=http://astrology.service/report
```

Replace your_db_username and your_db_password with your actual PostgreSQL credentials.

## Database Setup

You need to manually create the user_acquisition_db database in PostgreSQL.

## Running the Application in Development Mode

To run the application in development mode with automatic reload on code changes:

```
npm run start:dev
```

It will run on http://localhost:3000.
