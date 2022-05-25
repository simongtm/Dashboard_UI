# Dashboard 
## Technology and libraries
- React with typescript
- Redux to maintain state
- React hooks to manupulation and communication with functional component
- Node js to build api
- Axios for AJAX Calls
- MySql database to store user details and dashboard details
- Express library to manage request and response pipeline
- CORS to allow cross domain applications
- Jest and Enzyme to support testing

## Features

- Node JS api provide SignIn, SignUp,Delete user detail
- Node JS api provide dashboard data with pagination support
- Node JS api provide middleware to handle basic authentication
- Node JS api handles generic exception
- React application has three pages SignIn, SignUp and Dashboard details
- Dashboard provide visual representation of data in the form of line chart, show the sale amount   and order detail in tabular form with pagination support to reduce the load

## Design
- Node JS api built on generic approach and followed the SOLID Priniciple
- MySql DBManager instance created using Singleton pattern and followed the repository pattern

## Server Installation

Dashboard API requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server. Server will start running on (http://localhost:8081/)

```sh
cd Server
npm install
npm start
```


## Mysql DB connection

Dashboard Api is using open source freemysql(https://www.freesqldatabase.com/) db connection
to create Database and tables
All the sql connection details mentioned in the env file under server folder


## Prerequisite to start frontend application
To connect to node js api. In the frontend I have maintained the ApiEndpoint.ts file. Which is responsible to provide the baseurl and endpoint.
```sh
To run Frontend application. First Node js api should be up and running
And configure the running server baseUrl in ApiEndpoint file under the path UI/src/Utility
```
## Frontend Installation

First Tab:

```sh
cd UI
```

Second Tab:

```sh
npm install
```

Third:

```sh
npm start
```

#### To Run Test case
```sh
npm run test
```
#### To Generate Test Report

```sh
npm run coverage
```

## Production Build

```sh
npm run build
```