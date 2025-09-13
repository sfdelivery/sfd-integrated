SFD Deploy-Ready Package

This package contains a small demo backend (Node/Express) and frontend (React + Vite) plus deploy configs for Render (backend) and Netlify (frontend).

Structure:
  - backend/   -> Node server
  - frontend/  -> React + Vite app (uses env VITE_API_BASE or localhost)

VERY SIMPLE STEPS (no coding needed):

1) Create a GitHub repo (https://github.com) and upload the whole folder contents.
   - Click New -> Repository -> give name e.g. sfd-integrated -> Create
   - On the repo page, click Add file -> Upload files -> drag & drop everything from this package -> Commit

2) Deploy backend to Render.com
   - Sign up at https://render.com (click Sign in with GitHub)
   - Click New -> Web Service
   - Connect the GitHub repo you just uploaded
   - For Service Root/Folder choose: backend
   - Build Command: npm install
   - Start Command: npm start
   - Create the service and wait for the build to finish
   - Note the service URL (example: https://sfd-backend.onrender.com)

3) Update frontend to use the backend URL
   - In Netlify you can set environment variable VITE_API_BASE to the backend URL
   - OR edit frontend/src/api.js and replace default with the Render URL before pushing

4) Deploy frontend to Netlify
   - Sign up at https://app.netlify.com (Sign in with GitHub)
   - Click New site from Git -> choose your repo
   - Set Base directory: frontend
   - Build command: npm install && npm run build
   - Publish directory: dist
   - Deploy site. Note the Netlify URL.

5) Open the Netlify site on your phone and choose Add to Home screen to install PWA.

Demo credentials (backend seeded):
  email: demo@demo.com
  password: password

If you want, I will guide you click-by-click while you perform actions. If any error occurs, paste the exact error or screenshot here and I will fix it.

Security notes (for production):
 - Do not store real API keys in code. Use Render & Netlify environment variables for secrets.
 - Move from in-memory orders to a real DB (MySQL/Postgres) before going to production. I can help set this up.
