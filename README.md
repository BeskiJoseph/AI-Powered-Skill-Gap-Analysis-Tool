# AI-Powered Skill Gap Analysis Tool

## Overview

This project is an AI-powered web application that analyzes your resume and job descriptions, identifies skill gaps, and generates a personalized learning roadmap with recommended resources. It is built with modern frontend technologies and is ideal for developers looking to showcase advanced React, TypeScript, and UI/UX skills.

## Features

- **Resume & Job Description Upload:** Upload or paste your resume and job descriptions as text.
- **Skill Extraction:** Automatically extracts technical and soft skills using keyword matching and optional AI analysis.
- **Skill Gap Analysis:** Compares your skills with job requirements to identify missing skills.
- **Personalized Learning Path:** Generates a multi-phase roadmap to bridge your skill gaps, including recommended videos and quizzes.
- **Progress Tracking:** Track your progress through phases, skills, videos, and milestones.
- **Modern UI:** Built with shadcn-ui, Radix UI, and Tailwind CSS for a beautiful and accessible experience.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [shadcn-ui](https://ui.shadcn.com/) (UI components)
- [Radix UI](https://www.radix-ui.com/) (accessibility primitives)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [React Context API](https://react.dev/reference/react/useContext) (state management)
- [React Hook Form](https://react-hook-form.com/) (form handling)
- [Zod](https://zod.dev/) (schema validation)
- [Axios](https://axios-http.com/) (HTTP requests)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```sh
git clone https://github.com/BeskiJoseph/AI-Powered-Skill-Gap-Analysis-Tool.git
cd AI-Powered-Skill-Gap-Analysis-Tool
npm install
```

### Running Locally
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Upload or paste your resume.
2. Add one or more job descriptions.
3. The app will analyze and extract skills, then show your skill gaps.
4. View your personalized learning roadmap and start learning!

## Video Recommendations

- The app can fetch recommended videos for each skill using the YouTube Data API.
- To enable this, set your YouTube API key in a `.env` file as `VITE_REACT_APP_YOUTUBE_API_KEY`.
- If no API key is provided, video recommendations will be empty.

## Project Structure

- `src/pages/` – Main pages and step navigation
- `src/context/` – Global state management
- `src/services/` – Skill extraction, analysis, and video fetching logic
- `src/components/` – UI and feature components
- `src/types/` – TypeScript types and interfaces

## Deployment

You can deploy this app to Vercel, Netlify, or any static hosting provider. Example for Vercel:

```sh
npm run build
# Then deploy the `dist/` folder
```

## License

MIT
