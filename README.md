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
<img width="1366" height="768" alt="Goals page completed desktop screen" src="https://github.com/user-attachments/assets/2c275a79-2164-4e59-9649-11672830cf22" />

<img width="1366" height="768" alt="Login mobile screen" src="https://github.com/user-attachments/assets/7df46d75-3c99-4be4-b594-f3c139484e02" />

<img width="1366" height="768" alt="Dashboard mobile screen" src="https://github.com/user-attachments/assets/6a9a907e-8013-4eaa-a686-8b96c68a1f68" />

<img width="1366" height="768" alt="Settings mobile screen" src="https://github.com/user-attachments/assets/87a6a0cc-6fa0-4d1f-9cdf-cce9b6bb4a3b" />

<img width="1366" height="768" alt="Goals mobile screen" src="https://github.com/user-attachments/assets/af9f946c-1e98-4621-afeb-23479dd5abd4" />

<img width="1366" height="768" alt="Dashboard dark mode mobile screen" src="https://github.com/user-attachments/assets/5d3d70dc-1ad3-4017-b692-15e3540616eb" />

<img width="1366" height="768" alt="Login desktop screen" src="https://github.com/user-attachments/assets/e10662c1-4c72-4778-b166-3cea5bcfd1c4" />

<img width="1366" height="768" alt="Settings desktop screen" src="https://github.com/user-attachments/assets/0897e587-c8c1-4474-8bbf-8db4017a75dd" />

<img width="1366" height="768" alt="Login desktop screen" src="https://github.com/user-attachments/assets/b59ebb03-aa77-495c-956d-6a703a97be3d" />

<img width="1366" height="768" alt="Dashboard  dark modedesktop screen" src="https://github.com/user-attachments/assets/3aa00cd2-1657-4346-a9f8-3fbc8bee3465" />

<img width="1366" height="768" alt="Catagories desktop 
screen" src="https://github.com/user-attachments/assets/d6a4f6c0-052f-4787-99ff-2ec97077c714" />
