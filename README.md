# Frontend Intern Assessment – Tobams Group

This project is my implementation of the Tobams Group frontend assessment. The goal was to recreate the provided Figma design as accurately as possible while maintaining clean structure, responsiveness, and reusable components.

I focused on writing code that is easy to understand, scalable, and visually consistent across different screen sizes.


🔗 **Live Project**

Live URL: https://frontend-intern-assessment-tobams-g.vercel.app/

📌 **Project Overview**

The application is a responsive landing page built using Next.js and Tailwind CSS, based on the provided Figma design.

# Tech Stack:

1. Next.js (App Router)
2. Tailwind CSS
3. Framer Motion
4. Lucide React & React Icons


# 🚀 Getting Started
1. Requirements
2. Node.js (v18 or higher)
3. npm / yarn / pnpm


**Installation**
git clone https://frontend-intern-assessment-tobams-g.vercel.app/
cd tobams-assessment
npm install
npm run dev

Then open:
http://localhost:3000



🎯 **What I Focused On**

# 1. Responsive Design

I built the layout with a mobile-first approach and ensured it adapts properly across:

1. Mobile (small screens)
2. Tablets
3. Desktop

Tailwind’s responsive utilities (sm, md, lg) were used consistently without custom media queries.

# 2. Component Structure

Each section of the page is broken into reusable components to keep the code organized and maintainable.

Some key components include:

1. Navbar
2. Hero section
3. Training sections
4. Testimonials
5. Footer

I also made parts like the training section reusable with props to avoid repetition.

# 3. Animations

I used Framer Motion to add subtle animations as sections come into view. The goal was to improve user experience without making it distracting or heavy.

# 4. Clean UI Implementation

I paid close attention to:

1. Spacing
2. Typography
3. Alignment
4. Color consistency

The aim was to match the Figma design as closely as possible while keeping the code simple.

# 5. Accessibility & Semantics
1. Used semantic HTML elements (section, nav, footer, etc.)
2. Added meaningful alt text to images
3. Ensured buttons and links are usable via keyboard


**🧩 Project Structure**

app/
├── page.js
├── layout.js
├── globals.css
└── Components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── LearningSystem.jsx
    ├── TrainingSection.jsx
    ├── ManagementDevelopment.jsx
    ├── TransformationHub.jsx
    ├── ConsultantTraining.jsx
    ├── CTA.jsx
    ├── Testimonial.jsx
    └── Footer.jsx


   ** ⚙️ Key Decisions**

1. Used Tailwind CSS for speed and consistency
2. Avoided external UI libraries to build everything from scratch
3. Kept components modular for easier updates
4. Used lightweight icon libraries to avoid unnecessary bundle size

**🚀 Deployment**

The project is deployed on Vercel for easy integration with Next.js and fast performance.

**🔍 Possible Improvements**

If I had more time, I would:

1. Add form functionality and validation
2. Improve interactivity in the testimonial section
3. Add more performance optimizations (image handling, lazy loading)
4. Introduce testing

**📚 Resources Used**
1. Next.js Documentation
2. Tailwind CSS Docs
3. Framer Motion Docs


**🔗 Repository**

https://github.com/Newness01/Frontend-Intern-Assessment-Tobams-Group

**🤝 Note**

Some parts of this project were built with the assistance of AI tools for guidance. However, all code was reviewed, tested, and adjusted by me to ensure full understanding and correctness.

**📅 Submission**

Submitted: 23/04/26

**💬 Final Thought**

This project helped me strengthen my understanding of building responsive UIs, structuring components properly, and working with real-world design specifications.