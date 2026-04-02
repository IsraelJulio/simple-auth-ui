# Simple Auth UI

`Simple Auth UI` is an Angular 15 frontend used to demonstrate a simple social authentication flow with Google.

![Animation](https://github.com/user-attachments/assets/bd374223-0e7a-4dd5-978e-3888d1160d8e)


The application redirects the user to a backend authentication API, receives the authentication result on a callback route, stores the returned token and user information in `localStorage`, and then moves the user to a success screen.

## Overview

This project is a small single-page application focused on authentication flow validation rather than a full dashboard experience.

Current responsibilities:

- Display a landing page with a Google sign-in button
- Redirect the user to the backend Google login endpoint
- Handle the social login callback route
- Persist token, email, and name in `localStorage`
- Provide a logout action that redirects to the backend logout endpoint

## Tech Stack

- Angular 15.2
- TypeScript
- Angular Router
- Angular HttpClient
- SCSS
- Karma + Jasmine for unit testing

## Project Structure

```text
simpleAuth/
├── src/
│   ├── app/
│   │   ├── home/                 # Landing page and Google login trigger
│   │   ├── logged-in/            # Success page and logout action
│   │   ├── social-callback/      # Reads callback query params and stores auth data
│   │   ├── services/
│   │   │   └── auth.service.ts   # Auth-related HTTP calls
│   │   ├── app-routing.module.ts # Route definitions
│   │   └── app.module.ts         # Root Angular module
│   ├── environments/
│   │   └── environment.ts        # API base URL and auth endpoints
│   └── ...
├── angular.json
├── package.json
└── README.md
```

## Authentication Flow

The app currently follows this flow:

1. The user opens the home page at `/`.
2. Clicking `Continue with Google` redirects the browser to the backend endpoint:
   `https://localhost:5001/auth/google/login`
3. The frontend sends a `returnUrl` query string pointing back to:
   `/auth/social-callback`
4. After authentication, the backend redirects the browser to the callback route with query params such as:
   - `token`
   - `email`
   - `name`
   - `error`
5. `SocialCallbackComponent` reads those params.
6. If a `token` exists, the app stores the values in `localStorage` and navigates to `/success`.
7. If an error exists or no token is returned, the app redirects back to `/`.
8. On the success page, the user can trigger logout, which clears `localStorage` and redirects to the backend logout endpoint.

## Routes

Defined in `src/app/app-routing.module.ts`:

- `/` -> `HomeComponent`
- `/auth/social-callback` -> `SocialCallbackComponent`
- `/success` -> `LoggedInComponent`

## Environment Configuration

The project centralizes backend URLs in:

- `src/environments/environment.ts`

Current configuration:

```ts
export const environment = {
  apiBaseUrl: 'https://localhost:5001',
  endpoints: {
    authLogin: '/auth/login',
    authGoogleLogin: '/auth/google/login',
    authLogout: '/auth/logout',
    socialCallbackPath: '/auth/social-callback',
  },
};
```

If your backend runs on another host or port, update `apiBaseUrl` and endpoint paths in this file.

## Local Storage Keys

After a successful callback, the app stores:

- `token`
- `userEmail`
- `userName`

These values are written in `SocialCallbackComponent`.

## Prerequisites

Before running the frontend, make sure you have:

- Node.js installed
- npm installed
- A backend authentication API running locally
- The backend configured to allow Google login and redirect back to this frontend

Expected local backend base URL:

- `https://localhost:5001`

Expected local frontend URL during development:

- `http://localhost:4200`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

Then open:

```text
http://localhost:4200
```

## Available Scripts

From `package.json`:

- `npm start` -> Runs `ng serve`
- `npm run build` -> Creates a production build
- `npm run watch` -> Builds in watch mode using the development configuration
- `npm test` -> Runs unit tests with Karma

## Build

To create a production build:

```bash
npm run build
```

Build output is generated in:

```text
dist/simple-auth
```

## Testing

To run unit tests:

```bash
npm test
```

The project is configured with Karma and Jasmine through Angular CLI.

## Main Components

### HomeComponent

Responsible for:

- Rendering the login button
- Building the callback `returnUrl`
- Redirecting the browser to the backend Google login endpoint

### SocialCallbackComponent

Responsible for:

- Reading query params from the authentication callback
- Detecting success or error responses
- Saving user data in `localStorage`
- Redirecting the user to the success page or back to home

### LoggedInComponent

Responsible for:

- Calling the auth service on initialization
- Offering a logout action
- Clearing local auth data before logout redirect

### AuthService

Responsible for:

- Sending the frontend auth-related HTTP request to the backend login endpoint

## Notes and Limitations

- The current success page is still minimal and mainly used as a confirmation step.
- Authentication state is stored only in `localStorage`; there is no route guard yet.
- There is no token expiration handling or refresh token flow yet.
- The project currently uses a single `environment.ts` file and does not yet separate development and production environment files.
- The app assumes the backend returns query parameters on the callback URL.

## Future Improvements

- Add `environment.prod.ts`
- Add route guards for authenticated pages
- Replace raw `localStorage` access with a dedicated auth state service
- Add token validation and session expiration handling
- Improve the success page UI with user profile details
- Add stronger unit tests around callback and auth flow behavior

## Angular CLI

This project was created with Angular CLI `15.2.11`.
