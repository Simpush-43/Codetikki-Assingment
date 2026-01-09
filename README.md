# Codetikki-Assingment
# Notes Management App

## Project Overview
This application is a clean, component-based React solution for managing personal notes.It was built to demonstrate "frontend craftsmanship" by focusing on solid architecture, flawless state management, and thoughtful user experience without relying on external state libraries or backend APIs.

## Technical Stack
**Framework:** React JS (Vite)
**Styling:** CSS Modules / Pure CSS (No external UI frameworks used)
**State Management:** React Hooks (`useState`, `useEffect`)

## How to Run
Ensure you have **Node.js (v14 or higher)** installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Simpush-43/Codetikki-Assingment
    cd Codetikki-Assingment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Click the link provided in the terminal (usually `http://localhost:5173`).

## Component Breakdown
The application follows a strict "Container-Component" pattern to separate concerns:

* **`App.jsx`**: The main container that holds the "source of truth" (state). It manages the `notes` array and the `isLoading` status.
* **`NoteForm.jsx`**: Handles user input and validation.It ensures the "Title" field is never empty before submitting data to the parent.
**`NoteList.jsx`**: A purely presentational component that receives the array of notes and renders them.
**`NoteItem.jsx`**: Renders individual note details and handles the "Delete" interaction.
**`Loader.jsx`**: Provides visual feedback during the initial simulated API call.
**`EmptyState.jsx`**: Displays a friendly user guide when the note list is empty.

## State Management & Data Flow
Per the assessment requirements, no external libraries (Redux, Context, Zustand) were used.

**Lifting State Up:** All shared state (`notes`, `loading`) resides in the lowest common ancestor, `App.jsx`.
* **Data Flow:** Data flows **down** via props (e.g., passing the `notes` array to `NoteList`).
* **Action Flow:** Actions flow **up** via callback functions (e.g., `onAdd` and `onDelete`), allowing child components to request state updates from the parent.

## UX Decisions & Assumptions
**Simulated Latency:** A `setTimeout` of 1.5 seconds is used on mount to simulate a real-world API fetch, triggering the `Loader` component.
**Inline Validation:** To avoid intrusive browser alerts, validation errors appear inline immediately below the input field and clear automatically when the user starts typing.
* **Non-Persistence:** As this is a frontend-only assessment, data is stored in temporary state and will reset upon browser refresh.

---
*Built for the Codetikki React JS Notes Management Assessment.*

# Codetikki-Assingment
