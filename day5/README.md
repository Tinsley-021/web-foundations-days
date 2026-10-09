# Day 5: Users and Library API

## Users Directory

This project fetches users from JSONPlaceholder and displays their details.

API endpoint:

https://jsonplaceholder.typicode.com/users

### Features

- Fetch users from a REST API.
- Display names, email addresses, cities and company names.
- Filter users by name without another API request.
- Show loading and error messages.
- Check HTTP response status.
- Prevent duplicate requests while loading.
- Use safe DOM manipulation.

## Library API Documentation

The file `library-api.md` documents a proposed REST API for library books.

It specifies six endpoints:

- GET `/api/books`
- GET `/api/books/{id}`
- POST `/api/books`
- PUT `/api/books/{id}`
- PATCH `/api/books/{id}`
- DELETE `/api/books/{id}`

The specification also covers query parameters, request bodies, success status codes, validation rules, and HTTP error scenarios.

The library API is a design document. A working backend is not included.

## How to Run

1. Keep `index.html`, `styles.css` and `users.js` in the same folder.
2. Open the folder in VS Code.
3. Start the Live Server extension.
4. Open the local page in your browser.
5. Click the plus button to load users.
6. Search for a name to filter the results.

An internet connection is required to fetch users from JSONPlaceholder.
