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
<img width="1366" height="768" alt="Dashboard mobile screen" src="https://github.com/user-attachments/assets/391480eb-0141-4a83-a5cc-1b22c0f8a1ad" />
<img width="1366" height="768" alt="Dashboard dark mode mobile screen" src="https://github.com/user-attachments/assets/13065b82-47fb-46b3-98e3-ba78890db14d" />
<img width="1366" height="768" alt="Goals mobile screen" src="https://github.com/user-attachments/assets/da0819ac-9e5f-4029-aeb4-1a9659dc67fc" />
<img width="1366" height="768" alt="Login mobile screen" src="https://github.com/user-attachments/assets/f5f4c282-318f-4dca-839e-b23d9320c7e9" />
<img width="1366" height="768" alt="Settings mobile screen" src="https://github.com/user-attachments/assets/20366114-1809-4c80-9f2f-fe10b172fca7" />
<img width="1366" height="768" alt="Dashboard  dark mode desktop screen" src="https://github.com/user-attachments/assets/0f607ad4-42fa-4d48-8605-71919ad9ed09" />
<img width="1366" height="768" alt="Catagories desktop screen" src="https://github.com/user-attachments/assets/1418bad5-616c-4908-9bdc-d86fe3b3de55" />
<img width="1366" height="768" alt="Goals page completed desktop screen" src="https://github.com/user-attachments/assets/05fa4c08-69f4-4071-abab-b2000caff017" />
<img width="1366" height="768" alt="Login desktop screen" src="https://github.com/user-attachments/assets/8558fd3b-5144-4187-8902-1f540b69febb" />
<img width="1366" height="768" alt="Settings desktop screen" src="https://github.com/user-attachments/assets/ff714374-b6f8-4730-a63f-77b0a4488ef1" />


   
   

