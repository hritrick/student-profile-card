# Student Profile Card (React + Tailwind via Vite plugin)

A responsive student profile card built with React, styled using Tailwind CSS integrated directly via the official `@tailwindcss/vite` plugin.

## What this Project Does
- Displays student information: **name**, **roll number**, **department**, and **email**.
- Features an **Edit Profile** button that toggles an in-place edit form with input fields and a **Save** button.
- Updates the live profile upon clicking Save and switches back to the view card.
- Implements fully responsive design across screen sizes using Tailwind's `sm` and `md` breakpoints (e.g. single-column layout on mobile, two-column grid and widened card on larger viewports).

---

## Step-by-Step Commands (From Scratch)

### 1. Create project from an empty folder
```bash
npm create vite@latest student-profile-card -- --template react
cd student-profile-card
```

### 2. Install dependencies & Tailwind Vite plugin
```bash
npm install
npm install -D tailwindcss @tailwindcss/vite
```

### 3. Configure Tailwind in Vite
In `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

In `src/index.css`:
```css
@import "tailwindcss";
```

### 4. Run development server
```bash
npm run dev
```

The app will run on: **`http://localhost:5173`**.

---

## Required Ports & Services
- **Port:** `5173` (Vite dev server)
- **Database:** None (client-side React state)

---

## File-by-File Implementation Notes

| File | Purpose & Requirements Covered |
| :--- | :--- |
| `src/App.jsx` | - **Profile state**: Stores `name`, `rollNumber`, `department`, `email`<br>- **Edit toggle state**: `isEditing` toggles between display and edit modes<br>- **Edit Profile button**: Switches `isEditing` to `true`<br>- **Edit form & Save button**: Inputs bind to `editForm`; on submit (`handleSave`), commits changes to `profile` and sets `isEditing = false`<br>- **Responsive classes**: Uses `sm:` and `md:` breakpoints (e.g., `max-w-sm sm:max-w-md md:max-w-xl`, `grid-cols-1 sm:grid-cols-2`, `w-full sm:w-auto`, `flex-col sm:flex-row`) |
| `vite.config.js` | Configures `@tailwindcss/vite` alongside `@vitejs/plugin-react` |
| `src/index.css` | Loads Tailwind CSS using `@import "tailwindcss";` |
| `src/main.jsx` | React root mounting `<App />` |
| `index.html` | Page shell styled with Tailwind background utilities |
| `package.json` | Dependencies and scripts |
