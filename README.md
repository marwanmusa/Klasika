# Klasika — School Management System UI Prototype

Klasika is a highly polished, fully functional **React + TypeScript + Tailwind CSS (v4) + shadcn/ui** UI prototype for a modern school management system. Designed around the aesthetic principles of the design system, Klasika offers a calm, confident, and refined editorial interface that delivers a premium user experience across three distinct roles: Teachers, Students, and Parents.

All academic, attendance, and message data is powered by a central mock data repository—designed to run completely client-side without any external backend or API dependencies.

---

## 🎨 Design System: The Steep Aesthetic

Klasika’s visual identity: an editorial, achromatic canvas warmed by a single rust-peach accent. It evokes the feel of a layout in a high-end magazine rather than a traditional, busy SaaS dashboard.

### Strict Design Guidelines
*   **Colors**: Primary text and headers are styled in ink (`#17191c`) against a pure white or fog (`#f7f7f8`) canvas. A singular warm rust-peach accent (`#5d2a1a`) is used sparingly for data trend lines, highlights, and subtle elements.
*   **Typography**:
    *   **Display Font**: *Playfair Display* is reserved exclusively for major headlines (login hero, dashboard welcomes, and report titles) at 32px or larger.
    *   **UI Font**: *Inter* is used for navigation, tables, cards, badges, and general UI labels (utilizing weights `400`, `450`, `480`, and `500` for hierarchy—avoiding `600` or `700` weights).
*   **Surfaces**: Raised elements use a soft, multi-layered custom card shadow (`--shadow-card`), avoiding harsh flat borders.
*   **Light-Only**: The Steep system is a light-only interface; dark mode is intentionally excluded to preserve the warm, clean paper aesthetic.

---

## 🚀 Tech Stack

*   **Framework**: React 19 + Vite
*   **Styling**: Tailwind CSS v4 + Custom Tokens (`src/styles/tokens.css`)
*   **UI Components**: shadcn/ui (Cards, Data Tables, Tabs, Dialogs, Avatars, Badges, etc.)
*   **Routing**: React Router v7 (`react-router-dom`)
*   **Visualizations**: Recharts (for grade trend lines and performance bars)
*   **Icons**: Lucide React
*   **Date Helpers**: `date-fns`

---

## 📦 Project Structure

```
src/
├── data/                 # Typed mock databases
│   ├── users.ts          # Teachers, students, parents database
│   ├── classes.ts        # Class schedules, subjects, classrooms
│   ├── grades.ts         # Academic assignments, student scores, GPA scales
│   ├── attendance.ts     # Daily attendance status logs (30 days)
│   ├── messages.ts       # Pre-populated chat threads
│   ├── announcements.ts  # School-wide events and notices
│   ├── blog.ts           # Editor articles
│   └── fees.ts           # Parent billing statements
├── types/
│   └── index.ts          # Shared TypeScript interfaces
├── components/
│   ├── layout/           # Sidebar, TopBar, and AppShell layout wrappers
│   └── shared/           # Generic reusable components (e.g., ChatPage)
├── pages/
│   ├── auth/             # LoginPage with quick role select
│   ├── teacher/          # Teacher dashboards and management screens
│   ├── student/          # Student grade, schedule, and attendance panels
│   └── parent/           # Parent dashboard with child switching & fees
├── hooks/
│   └── useAuth.ts        # Client-side auth context & localStorage persistence
└── App.tsx               # Router definitions and protected routes
```

---

## 👥 Role-Based Features

### 👨‍🏫 Teacher Dashboard (`/teacher/*`)
*   **Overview Panel**: High-level counters (students, class hours, grading queue, active bulletins) paired with the day's schedule and recent grade submissions.
*   **Student Registry**: A filterable data table with sortable columns detailing class, GPA, and attendance percentages. Clicking a row opens a profile drawer highlighting that student's subject grades and attendance history.
*   **Gradebook Matrix**: Interactive class lists showing graded items with color-coded alerts (green for pass $\ge 80$, amber for $60-79$, rust-red for fail $< 60$) and dynamically computed class averages.
*   **Attendance Tracker**: Daily record toggles (Present, Absent, Late) featuring class summaries and a monthly attendance heatmap grid.
*   **Assignment Manager**: Card grid summarizing assignment types (Quizzes, Homework, Midterms, Finals) alongside a creation modal.
*   **Report Card Generator**: Comprehensive review sheet showing student performance, grade trends visualised via a Recharts LineChart, and an "Export PDF" toast mockup.
*   **Announcements & Blog**: Administrative forms to publish board notices and a dedicated blog post editor.
*   **Chat Console**: Threaded interface displaying mock inbox streams with parents and students.

### 🎒 Student Dashboard (`/student/*`)
*   **Personal Home**: Welcome widget showing current GPA, attendance rate, assignment checklist, and active announcements.
*   **Grades Portal**: Tabbed panels showing scores, letter evaluations, and a Recharts BarChart rendering grades across subjects.
*   **Progress Dashboard**: Read-only copy of the student's official progress report showing class ranking and motivational status indicators.
*   **Attendance Log**: A calendar colored by attendance state (green/yellow/red) detailing dates, subjects, and late notes.
*   **Assignments Tracker**: Organized tabs (All, Pending, Submitted, Graded) highlighting overdue work in warning shades.
*   **Schedule Timetable**: Color-coded, time-slotted grid representing the student’s weekly subject timetable.
*   **Chat Inbox**: Direct line to message course teachers.

### 👩‍👦 Parent Dashboard (`/parent/*`)
*   **Child Switcher**: Tab controls to toggle between multiple enrolled children. The dashboard, reports, and grades immediately reload for the selected child.
*   **Progress & Grades Summary**: Integrated views of the selected child's GPA trend, grades sheet, and rank in class.
*   **Attendance Records**: Calendar overview of the child's attendance with urgent notification alerts for any recorded absences.
*   **Fees & Invoices**: Billing widget displaying current balances due, a payment ledger, and a simulated checkout flow ("Pay Now" toast).
*   **Teacher Messages**: Dedicated inbox to coordinate directly with the child's teachers.

---
