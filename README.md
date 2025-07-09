# URL Shortener

This is a simple full-stack URL shortener application built with React and Node.js.

## Features

*   Shorten long URLs to a custom or randomly generated short code.
*   Set an optional expiry time for shortened URLs.
*   Redirects to the original URL when the shortened URL is visited.
*   Displays a history of shortened URLs.

## Tech Stack

*   **Frontend:** React
*   **Backend:** Node.js, Express
*   **Database:** In-memory JSON object (urlDatabase)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/ps1.git
    ```
2.  Install NPM packages for both the client and server
    ```sh
    npm install
    ```

### Running the app

You can run the client and server concurrently with the following command:
To execute Frontend:
```sh
npm start
```
To execute Backend:
```sh
node server.js
```

This will start the React development server on `http://localhost:3000` and the Node.js server on `http://localhost:3001`.

## API Endpoints

### POST /api/shorten

Creates a new shortened URL.

**Request Body:**

```json
{
  "longUrl": "https://www.example.com",
  "validityInMinutes": 60,
  "shortCode": "my-short-url"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:3001/my-short-url",
  "expiryDate": "...",
  "originalUrl": "https://www.example.com"
}
```

### GET /:shortCode

Redirects to the original URL.

## Screenshots

### Backend Server Running

![Backend Server Running](<REPLACE_WITH_YOUR_BACKEND_IMAGE_URL>)
![image](https://github.com/user-attachments/assets/738ec7ac-28d4-4db3-8538-776f74b81b13)


### Localhost Results

![Localhost Results](<REPLACE_WITH_YOUR_LOCALHOST_IMAGE_URL>)
![image](https://github.com/user-attachments/assets/f68cf4df-6091-48e8-8a89-78817371f8f7)
![image](https://github.com/user-attachments/assets/4a49f04e-fa0a-4d32-817c-48fc7fa15f04)

