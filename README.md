## Jelly Bean

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Screen Shots](#project-screen-shots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Server Setup and API Endpoints](#server-setup-and-api-endpoints)
- [Reflection](#reflection)
- [Feedback](#feedback)

## Project Overview

This project gains essential information about your favourite jelly bean flavours with Jelly Bean :tm: company milestones. This app is designed to demonstrate my ability to parse information from an API and display the data in reusable components. I have also added a simple filter allowing the user to filter the results by colour.
This project is a React application developed with TypeScript. It uses Tailwind CSS for styling, and it’s set up to deploy automatically to GitHub Pages using a GitHub Actions workflow.

## Features

- Developed using React with TypeScript.
- Styled with Tailwind CSS for rapid UI design.
- Automatically deployed to GitHub Pages via GitHub Actions.

## Project Screen Shots

#### Overview:

<img width="1367" alt="full page image" src="https://github.com/user-attachments/assets/62d11094-b3a5-472c-8bdc-beaaf7c1d910">

#### Bean Detail:

<img width="781" alt="Bean Modal" src="https://github.com/user-attachments/assets/12e269ec-97b4-4338-8cc6-cd078d8282f0">

#### Filtered Results

<img width="1371" alt="Filtered Results" src="https://github.com/user-attachments/assets/65c85cd6-0cd4-4810-b5bf-feb8b6018c4f">

## Getting Started

### Prerequisites

- **Node.js** (version 16 or later recommended)
- **npm** (Node package manager)

### Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run start:client`

To Visit App:

`localhost:3000/jelly-bean`

### Server Setup and API Endpoints

This section outlines the server setup and API routes for handling requests in this project. The server is built using **Express.js**, a popular web framework for Node.js, and is configured to serve a React application along with an example API endpoint.

#### Key Features

- **CORS Configuration**: The server is configured to allow Cross-Origin Resource Sharing (CORS) for specific origins (e.g., `http://localhost:3000` for local development and `https://enewcombe30.github.io` for the deployed frontend). This ensures that the server can accept requests from these origins while supporting the following HTTP methods:

  - `GET`
  - `POST`
  - `PUT`
  - `DELETE`

- **Static File Serving**: The server serves static files from the React application's build directory. This allows users to access the frontend assets directly from the server.

- **API Endpoint**: An example API endpoint is provided:

  - **GET /api/:category**: This endpoint accepts a category as a URL parameter and returns a JSON response indicating the requested category. For example, a request to `/api/some-category` will respond with:
    ```json
    {
      "message": "Category requested: some-category"
    }
    ```

- **Fallback to React App**: For any other routes, the server will respond by sending the `index.html` file of the React application. This setup allows the React Router to handle client-side routing.

#### Starting the Server

The server listens on a specified port (defaulting to `5000` if not defined in the environment variables). When the server is running, it will log the port number in the console, indicating that it is ready to accept requests.

## Reflection

**Why build this app?**
Having worked with api calls on a daily basis in my previous role as Frontend Dev at fern and being unable to display any of the functions as they are not open source, I built this app to demonstrate my ability working with APIs. Having other projects that purely gain information from an API, this project has an added filter so the user can filter the results by colour.

**What did I set out to build?**
This project was built to demonstrate that I can use an API to gather information and display it with an added filter to display user defined results. This app is focused on functionality with very basic UI.

**Was this project challenging and therefore a really good learning experience?**
The [Jelly Bean Wiki](https://jelly-belly-wiki.netlify.app/) API requires extra steps handle Cross-Origin Resource Sharing which had not been something I'd covered in previous projects which provided valuable learning oppotunities.

## Feedback:

Feedback is always welcome so if you have any questions, spot errors or think this app can be improved in any way feel free to drop me a message on either:

- **email**: [enewcombe30@gmail.com](mailto:enewcombe30@gmail.com)
- **LinkedIn** [enewcombe30](https://www.linkedin.com/in/enewcombe30)
