# ai-productivity-course-widget1
🚀 AI Productivity Course (Interactive App)

An interactive, bilingual (English/Hindi) React application designed to teach beginners and MSME owners how to use essential AI tools for daily productivity.

This project serves as a Proof of Concept (PoC) for Sudarshan AI Labs, demonstrating how interactive simulations can bridge the digital literacy gap in India.

🌟 Key Features

Interactive Flow: A gamified visual roadmap that guides users topic-by-topic.

App Simulators: Realistic, hands-on mini-apps for Gemini AI, Google Tasks, Google Keep, and Google Drive (no real account needed).

Bilingual Support: Instant toggle between English and Hindi for regional accessibility.

Gamification: Progress tracking, "illuminate" effects, and completion celebrations.

Mobile-First Design: Fully responsive layout optimized for smartphones.

🛠️ Tech Stack

Framework: React + Vite (Fast & Lightweight)

Styling: Tailwind CSS (Modern UI)

Icons: Lucide React

Deployment: Ready for Netlify/Vercel

⚡ Quick Start (Local Development)

Clone the repository (or download files):

git clone [https://github.com/your-username/ai-productivity-course.git](https://github.com/your-username/ai-productivity-course.git)
cd ai-productivity-course


Install Dependencies:

npm install


Run the App:

npm run dev


Open the link shown in the terminal (usually http://localhost:5173) to view it in your browser.

🚀 How to Deploy (Netlify)

Run the build command to create the production files:

npm run build


Locate the new dist folder in your project directory.

Log in to Netlify.

Drag and drop the dist folder onto the Netlify dashboard.

Done! Your app is live.

📂 Project Structure

src/App.jsx - Contains the entire logic, UI components, and bilingual text data.

src/index.css - Global styles and Tailwind directives.

tailwind.config.js - Configuration for custom colors and gradients.

📝 Customization Guide

To add more topics or change the text:

Open src/App.jsx.

Locate the COURSE_DATA constant at the top.

Add a new object or edit the en/hi text fields.

Developed by Sudarshan AI Labs, Lucknow
Empowering India's Growth through AI Literac
