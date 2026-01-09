# Codetikki-Assingment
# Notes Management App

## Project Overview
This application is a clean, component-based React solution for managing personal notes. [cite_start]It was built to demonstrate "frontend craftsmanship" by focusing on solid architecture, flawless state management, and thoughtful user experience without relying on external state libraries or backend APIs[cite: 18, 12].

## Technical Stack
* [cite_start]**Framework:** React JS (Vite) [cite: 43]
* [cite_start]**Styling:** CSS Modules / Pure CSS (No external UI frameworks used) [cite: 60]
* [cite_start]**State Management:** React Hooks (`useState`, `useEffect`) [cite: 107]

## How to Run
Ensure you have **Node.js (v14 or higher)** installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd <your-repo-name>
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
[cite_start]The application follows a strict "Container-Component" pattern to separate concerns[cite: 91]:

* **`App.jsx`**: The main container that holds the "source of truth" (state). It manages the `notes` array and the `isLoading` status.
* **`NoteForm.jsx`**: Handles user input and validation. [cite_start]It ensures the "Title" field is never empty before submitting data to the parent[cite: 92].
* [cite_start]**`NoteList.jsx`**: A purely presentational component that receives the array of notes and renders them[cite: 93].
* [cite_start]**`NoteItem.jsx`**: Renders individual note details and handles the "Delete" interaction[cite: 93].
* [cite_start]**`Loader.jsx`**: Provides visual feedback during the initial simulated API call[cite: 94].
* [cite_start]**`EmptyState.jsx`**: Displays a friendly user guide when the note list is empty[cite: 94].

## State Management & Data Flow
[cite_start]Per the assessment requirements, no external libraries (Redux, Context, Zustand) were used[cite: 57, 111].

* [cite_start]**Lifting State Up:** All shared state (`notes`, `loading`) resides in the lowest common ancestor, `App.jsx`[cite: 112].
* **Data Flow:** Data flows **down** via props (e.g., passing the `notes` array to `NoteList`).
* **Action Flow:** Actions flow **up** via callback functions (e.g., `onAdd` and `onDelete`), allowing child components to request state updates from the parent.

## UX Decisions & Assumptions
* [cite_start]**Simulated Latency:** A `setTimeout` of 1.5 seconds is used on mount to simulate a real-world API fetch, triggering the `Loader` component[cite: 120].
* [cite_start]**Inline Validation:** To avoid intrusive browser alerts, validation errors appear inline immediately below the input field and clear automatically when the user starts typing[cite: 124, 138].
* **Non-Persistence:** As this is a frontend-only assessment, data is stored in temporary state and will reset upon browser refresh.

---
*Built for the Codetikki React JS Notes Management Assessment.*

# Codetikki-Assingment
