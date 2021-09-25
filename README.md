# Marktplaats Coding Challenge

## Description

This project was built for a coding challenge. The client is a CRA React + Typescript application. The server was built using Node js and Express. This project uses Styled Components for the styles.

## Folder structure

    root
      └── src
      ├── api
      │    ├── controllers
      │    ├── routes
      │    └── index.js
      ├── data
      ├── integration
      ├── middlewares
      ├── services
      └── utils
      │
      ├── client
      │   ├── public
      │   │
      │   └── src
      │       ├── assets
      │       ├── components
      │       ├── constants
      │       ├── containers
      │       ├── pages
      │       ├── theme
      │       ├── types
      │       ├── utils
      │       └── index.tsx
      │
      └── README.md

## Stack

### Server

    - Node JS
    - Express

### Frontend

    - React
    - Typescript
    - Styled Components
    - Jest + React testing library

## How to start

### Clone

You can clone the repo using this url: https://github.com/Safro94/marktplaats-challenge

```
git clone https://github.com/Safro94/marktplaats-challenge.git
```

### Install dependencies

Make sure you are using the correct Node version(v12).

Install dependencies

```
cd marktplaats-challenge
```

Run

```
npm install
```

Add .env file with this keys

```
PORT=9000
CLIENT_URL=http://localhost:3000
```

Go to the client folder

```
cd marktplaats-challenge/client
```

Run

```
npm install
```

Add .env file with this keys

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_SERVER_URL=http://localhost:9000/api
```

To run both projects at the same time, go to the root folder and run

```
npm run dev
```

the server should be running on http://localhost:9000 and the client http://localhost:3000

## Server endpoints

To see the docs, go to http://localhost:9000/docs

## Test

The frontend uses Jest + React testing library. The server uses Jest. You can run this command on each project

```
npm test
```

to run the tests or

```
npm run coverage
```

if you want to check the code coverage. Both projects have a coverage threshold of 80%.

## Technical decisions

See this [file](https://github.com/Safro94/marktplaats-challenge/docs/blob/master/decisions.md).
