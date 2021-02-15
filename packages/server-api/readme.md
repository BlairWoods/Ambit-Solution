# Server-API - Outline

Creates a new GraphQL server that returns people data for the UI component.

## Installation

Install all required modules:

```cmd
npm install
```

Start the Server-API component:

```cmd
npm start
```

Start the Server-API component without building it and running linting (i.e. using the existing build):

```cmd
npm quickstart
```

## Configuration

Refer to the .env file for relevant configuration values:

```.env
API_PORT=5000 // The port that the graphQL server will be exposed on.
LOGGER_TYPE=Consola // The logging framework to use.
MOCK_MODE=True // Whether mock data will be served up.
```
