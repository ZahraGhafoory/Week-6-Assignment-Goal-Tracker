# Week-6-Assignment-Goal-Tracker
Week 6 Assignment – Goal Tracker 
Assignment: “Goal Tracker Dashboard” (Web App)
Core Idea
Build a multipage React app that lets users create goals/habits, track progress, and view a dashboard like the screenshot: active goals with progress bars, categories, streak, XP, completed goals archive, and responsive layout (desktop + mobile).
*****
1) Required Tech Constraints
Must-have
React + Vite
React Router (multi-page)
Two languages (example: English + Arabic/Persian)
RTL ↔ LTR layout switch based on language
Responsive UI (desktop + mobile)
Persist data (at least LocalStorage, or Data.js)
UI Library
Recommended: MUI (latest)
Allowed: Tailwind / Chakra / Ant / shadcn, etc.
*****
2) Pages (Routes) Required  
You must implement at least these routes:
> A) / or /dashboard — Dashboard
Shows a summary of the user’s progress.
> B) /goals — Goals List (All Goals)
A dedicated page to manage all goals.
> C) /goals/new — Create Goal
A form to create a goal.
> D) /goals/:id — Goal Details
Shows a single goal with deeper details.
> E) /categories — Categories Overview
A page showing categories and their stats.
> F) /settings — Settings
Required settings:
 Language toggle (e.g., EN / FA or EN / AR)
 When language changes:
 Text changes
 Layout direction changes (RTL/LTR)
 Theme toggle (Light/Dark) (required if using MUI theming; otherwise optional but recommended)
> G) * — Not Found (404)
Basic 404 page with a “Go back home” button.
*****
3) Required Functionalities
* Goal Management (CRUD)
 Create goal
 Read/list goals
 Update/edit goal
 Delete goal (confirm dialog)
* Progress Tracking
Each goal must support progress updates:
 Add progress entry (today)
 Auto-calculate progress %
 When reaching target → mark as completed automatically (or prompt)
* Streak System (Minimum viable)
 Streak increases if user logs progress on consecutive days (for daily goals)
 Reset if they miss a day (define rules clearly in your README)
* XP / Gamification (Minimum viable)
 Each progress log gives XP (example: +20)
 Level is optional, but XP total must be shown on dashboard
* Archive (Completed Goals)
Completed goals must move to “Completed/Archive”
Allow restoring back to active (bonus)
* Language & Direction (Important!)
 At least 2 languages
 App direction should change:
 RTL for Arabic/Persian
 LTR for English
 UI should not break when switching direction.
*****
4) Data Model (Suggested)
A simple structure like:
* Goal
 id
 title
 category
 type: "daily" | "count" | "time"
 target: number
 progress: number
 status: "active" | "paused" | "completed"
 startDate, endDate?
 logs: Array of { date, amount }
 createdAt, updatedAt
* UserStats
 xpTotal
 streak
 completedCount
*****
5) UI Requirements
 Must look clean and modern.
 Must be responsive.
 Must include:
 Progress bars
 Cards
 Buttons and icons
 Empty states (no goals yet, no completed goals, etc.)
 Loading state (even if local storage)
***** THANKS FOR YOUR PATIENCE
***** HERE ARE A FEW SCREENSHOTS OF THE OUTPUT
   
