# Hackathon App

## Objective

Create a hackathon app for organizers to create hackathons and participants to view, search, filter, and sort hackathons.

## Features

- **Home Page**:

  - Search bar to dynamically update hackathon list.
  - Filter dropdown for level (easy, medium, hard) and status (active, upcoming, past).
  - Sorting button for newest first and oldest first.
  - List of hackathon cards with hover effect and onClick action.
  - Two-section layout: main header and hackathon list.

- **Create Hackathon Page**:

  - Form fields: Name, Start Date, End Date, Description, Image (uploader), Level.
  - Unique ID generation for each hackathon.

- **Hackathon Card**:

  - Image, status, name, timer (end/start dates), and "Participate Now" button.

- **Hackathon Detail Page**:
  - Display all hackathon details with edit and delete buttons.
  - Data persistence on page reload.

## Technologies

- **ReactJS**: Frontend framework.
- **Redux Toolkit**: State management.
- **TailwindCSS**: Styling.
- **LocalStorage**: Data storage.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Crazyhaller/ai-planet-assignment.git
   ```

2. Navigate to the project directory:

   ```sh
   cd ai-planet-assignment
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

## Notes

- No backend; use `data.json` and LocalStorage for data.
