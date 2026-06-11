# Klasika — School Management System UI Prototype

## Project overview
Build a fully functional **React + TypeScript + Tailwind CSS + shadcn/ui** UI prototype for a school management system called **Klasika**. All data is dummy/hardcoded — no backend, no API calls. The goal is a realistic, polished prototype that demonstrates the full experience for all three user roles.

---

## Tech stack
- **React 18** with TypeScript (strict mode)
- **Tailwind CSS** for styling
- **shadcn/ui** for components (use liberally — tables, cards, badges, dialogs, dropdowns, etc.)
- **React Router v6** for navigation and role-based routing
- **Recharts** for grade trend charts and progress visualizations
- **Lucide React** for icons
- **date-fns** for date formatting
- No backend, no API calls — all data from a central `src/data/` folder with typed mock data

---

## Project structure

```
src/
├── data/
│   ├── users.ts          # All mock users (students, teachers, parents)
│   ├── classes.ts        # Classes and subjects
│   ├── grades.ts         # Grade and assignment data
│   ├── attendance.ts     # Attendance records
│   ├── messages.ts       # Chat message threads
│   ├── announcements.ts  # School announcements and events
│   └── blog.ts           # Blog posts
├── types/
│   └── index.ts          # All TypeScript interfaces
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── AppShell.tsx
│   └── shared/           # Reusable components
├── pages/
│   ├── auth/
│   │   └── LoginPage.tsx
│   ├── teacher/
│   ├── student/
│   └── parent/
├── hooks/
│   └── useAuth.ts        # Mock auth hook with role switching
└── App.tsx
```

---

## Mock data requirements

### Users — create at least:
- 3 teachers (different subjects: Math, English, Science)
- 8 students (spread across 2 classes: Grade 10A and Grade 10B)
- 4 parents (some with 2 children at the school)

### Academic data:
- 2 classes with 3–4 subjects each
- 6 assignments per subject (mix of homework, quiz, midterm, final)
- Full grade records for all students across all assignments
- 30 days of attendance records
- Computed GPA and class ranking per student

---

## Authentication (mock)

- Login page with email + password fields (no real validation)
- A role switcher or preset quick-login buttons:
  - "Login as Teacher" → loads teacher dashboard
  - "Login as Student" → loads student dashboard  
  - "Login as Parent" → loads parent dashboard
- `useAuth` hook stores current user in state/localStorage
- React Router guards redirect unauthenticated users to `/login`
- Each role has a completely separate route namespace:
  - `/teacher/*`
  - `/student/*`
  - `/parent/*`

---

## Pages and features per role

---

### TEACHER dashboard (`/teacher/*`)

#### 1. Dashboard (`/teacher/dashboard`)
- Summary cards: total students, classes today, pending assignments to grade, announcements
- Today's schedule (which classes at what time)
- Recent activity feed (last 5 grade submissions, attendance marks)
- Quick action buttons: Mark Attendance, Add Grade, Post Announcement

#### 2. Students (`/teacher/students`)
- Full data table of all students (shadcn DataTable with sorting + search)
- Columns: photo placeholder, name, class, GPA, attendance %, status badge
- Click a student row → opens a student detail drawer/modal with:
  - Profile info
  - Grade breakdown by subject (table + mini bar chart)
  - Attendance summary
  - Recent assignments

#### 3. Grades (`/teacher/grades`)
- Subject/class selector tabs at the top
- Assignment list for selected subject
- Grade input table: each row is a student, columns are assignments
- Cells show score with color coding (green ≥ 80, yellow 60–79, red < 60)
- Summary row at the bottom showing class average per assignment

#### 4. Attendance (`/teacher/attendance`)
- Date picker to select a date (default today)
- Class selector
- Student list with Present / Absent / Late toggle per student (use shadcn RadioGroup or segmented buttons)
- Attendance summary at the top: X present, Y absent, Z late
- Monthly attendance heatmap view (simple grid, color-coded by status)

#### 5. Assignments (`/teacher/assignments`)
- Card grid of all assignments grouped by subject
- Each card shows: title, type badge (Quiz / Homework / Midterm / Final), due date, submitted count vs total
- "Add Assignment" button opens a dialog with a form (title, type, subject, due date, max score)

#### 6. Progress reports (`/teacher/reports`)
- Student selector dropdown
- Full report card view:
  - Subject table with scores, grades (A/B/C/D), and teacher remarks
  - Overall GPA and class rank
  - Attendance summary
  - A Recharts LineChart showing grade trend across assignments over time
- "Export PDF" button (just a toast notification saying "PDF exported")

#### 7. Announcements (`/teacher/announcements`)
- List of posted announcements with title, target audience badge, date
- "New Announcement" button → dialog with form (title, content, target: all / students only / parents only, publish date)

#### 8. Chat (`/teacher/chat`)
- Left sidebar: list of conversation threads (student or parent name, last message preview, unread badge)
- Right panel: message thread with bubbles (sent right, received left)
- Message input at the bottom
- All dummy data, no real sending — just UI

#### 9. Blog (`/teacher/blog`)
- Grid of blog post cards (title, excerpt, date, author, cover color placeholder)
- "New Post" button → full-page editor view (just a textarea for now, with title input and publish button)

---

### STUDENT dashboard (`/student/*`)

#### 1. Dashboard (`/student/dashboard`)
- Welcome card with student name, class, current GPA badge
- Cards: attendance rate, assignments due, average grade
- Today's schedule
- Recent grades feed (last 5 scored assignments)

#### 2. My grades (`/student/grades`)
- Tabs per subject
- Each tab shows:
  - Assignment breakdown table (name, type, score / max score, grade letter)
  - Subject average prominently displayed
  - Recharts BarChart of scores across assignments

#### 3. Progress report (`/student/progress`)
- Same report card view as teacher's version but read-only
- Overall GPA, rank in class ("You are ranked #3 out of 32 students")
- Grade trend LineChart
- Motivational status message based on GPA (e.g. "Great work! Keep it up.")

#### 4. Attendance (`/student/attendance`)
- Monthly calendar view showing each day colored by status (present = green, absent = red, late = yellow)
- Summary stats: present %, total absences, total late
- Attendance records table with date, subject, status, note

#### 5. Assignments (`/student/assignments`)
- Tabs: All / Pending / Submitted / Graded
- Assignment cards with: subject badge, title, due date, status, score (if graded)
- Overdue assignments highlighted in red

#### 6. Schedule (`/student/schedule`)
- Weekly timetable grid (Mon–Fri × time slots)
- Each cell shows subject name + room number
- Color-coded by subject

#### 7. Chat (`/student/chat`)
- Same chat UI as teacher but showing only teacher threads
- Students can only message teachers, not other students

#### 8. Announcements & blog (`/student/announcements`)
- Announcement list (read-only)
- Blog post list with full post view on click

---

### PARENT dashboard (`/parent/*`)

#### 1. Dashboard (`/parent/dashboard`)
- If parent has 2 children: child switcher tabs at the top
- Summary cards per selected child: GPA, attendance %, upcoming events, unread messages
- Recent activity: last grades posted, attendance flags, new announcements

#### 2. Child's progress (`/parent/progress`)
- Identical to student progress report view but labeled as "Viewing: [Child Name]'s report"
- GPA, rank, grade trend chart, subject breakdown

#### 3. Child's attendance (`/parent/attendance`)
- Same calendar + table view as student attendance
- Any absence flagged with a notification-style callout

#### 4. Child's grades (`/parent/grades`)
- Read-only version of the grade breakdown (same as student grades view)

#### 5. Fees (`/parent/fees`)
- Fee summary card: total due, amount paid, outstanding balance
- Payment history table: date, description, amount, status badge (Paid / Pending / Overdue)
- Outstanding invoices section with "Pay Now" button (just a toast)

#### 6. Chat (`/parent/chat`)
- Same chat UI — parent can message their child's teachers only
- Teacher list on left, message thread on right

#### 7. Announcements & events (`/parent/announcements`)
- Announcement feed
- Upcoming events calendar (simple list with date badges)

---

## UI design requirements

### Design system — Steep style reference

Klasika's visual language is adapted from the **Steep** design system: an editorial, almost achromatic canvas warmed by a single rust-peach accent. The feeling should be closer to a magazine layout than a typical SaaS dashboard — calm, confident, and refined. Not teenage, not corporate — editorial.

---

### CSS custom properties

Register all tokens in `src/styles/tokens.css` and import globally. Use these throughout — never hardcode hex values.

```css
:root {
  /* Colors */
  --color-ink: #17191c;
  --color-pure-white: #ffffff;
  --color-fog: #f7f7f8;
  --color-ash: #4c4c4c;
  --color-graphite: #777b86;
  --color-dove: #a3a6af;
  --color-rust: #5d2a1a;
  --color-apricot-wash: #fbe1d1;
  --color-sky-wash: #d3e3fc;

  /* Typography */
  --font-display: 'Playfair Display', 'Georgia', serif;   /* Signifier substitute */
  --font-ui: 'Inter', ui-sans-serif, system-ui, sans-serif; /* Sohne substitute */

  /* Type scale */
  --text-caption: 14px;
  --text-body: 16px;
  --text-body-lg: 18px;
  --text-subheading: 22px;
  --text-heading-sm: 26px;
  --text-heading: 44px;

  /* Border radius */
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-images: 12px;
  --radius-inputs: 16px;
  --radius-avatars: 9999px;
  --radius-buttons: 9999px;

  /* Shadows */
  --shadow-card: rgba(4, 23, 43, 0.05) 0px 0px 0px 1px,
                 rgba(0, 0, 0, 0.10) 0px 20px 25px -5px,
                 rgba(0, 0, 0, 0.10) 0px 8px 10px -6px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-fog: #f7f7f8;
  --surface-warm: #fbe1d1;
  --surface-cool: #d3e3fc;
  --surface-ink: #17191c;
}
```

**Font loading** — add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=Inter:wght@400;450;480;500&display=swap" rel="stylesheet">
```

---

### Tailwind v4 theme extension

In `tailwind.config.ts` (or `@theme` block for v4):

```css
@theme {
  --color-ink: #17191c;
  --color-fog: #f7f7f8;
  --color-ash: #4c4c4c;
  --color-graphite: #777b86;
  --color-dove: #a3a6af;
  --color-rust: #5d2a1a;
  --color-apricot: #fbe1d1;
  --color-sky: #d3e3fc;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-ui: 'Inter', ui-sans-serif, system-serif;
  --radius-card: 24px;
  --radius-input: 16px;
  --radius-pill: 9999px;
}
```

---

### Color roles — strict rules

| Token | Hex | Use |
|---|---|---|
| `--color-ink` | `#17191c` | All primary text, filled CTA background, page headings |
| `--color-fog` | `#f7f7f8` | Page canvas, sidebar background, section fills |
| `--color-ash` | `#4c4c4c` | Secondary body text, descriptions |
| `--color-graphite` | `#777b86` | Tertiary text, icon strokes, table labels |
| `--color-dove` | `#a3a6af` | Hairline borders, placeholders, dividers |
| `--color-rust` | `#5d2a1a` | Accent only — grade trend lines, warm chart strokes, decorative details |
| `--color-apricot-wash` | `#fbe1d1` | Warm data card backgrounds (GPA widget, progress chart) |
| `--color-sky-wash` | `#d3e3fc` | Cool data card backgrounds (attendance chart, chat bubbles) |

**Hard rules:**
- No saturated blues, greens, or reds in UI chrome — color is punctuation, not decoration
- `--color-rust` is the only chromatic accent; use it sparingly (chart lines, one badge type, decorative strokes only)
- `--color-ink` fills only the single primary CTA button per screen — secondary actions are text links
- Grade status colors (pass/fail/late) are the ONLY exception to the achromatic rule — use muted semantic tones: `#3d6b4f` (pass green), `#8b4a2a` (warm red), `#7a6230` (amber) — never pure `green-500` / `red-500`

---

### Typography rules

- **Display font** (`Playfair Display` / `--font-display`): page section headings only — login hero, dashboard welcome headline, report card title. Never below 32px. Never in navigation, tables, or labels.
- **UI font** (`Inter` / `--font-ui`): everything else — nav items, table cells, form labels, badges, body copy, captions
- **Weight scale** (Inter): 400 = body, 450 = table headers / nav items, 480 = numbers / stat values, 500 = card titles / section labels. Never use 600 or 700 — too heavy against the editorial palette.
- **Letter spacing**: `-0.009em` on all Inter text. `-0.025em` on display font 44px+.

---

### Surface hierarchy

| Surface | Color | Used for |
|---|---|---|
| Canvas | `#ffffff` | Main content area background |
| Fog | `#f7f7f8` | Sidebar, page shell, section bands |
| Card | `#ffffff` + `--shadow-card` | All dashboard widgets, data cards |
| Warm card | `#fbe1d1` | GPA widget, progress trend card, report summary |
| Cool card | `#d3e3fc` | Attendance chart card, chat bubble background |
| Ink | `#17191c` | Primary CTA button only |

---

### Component specifications

#### Sidebar navigation
- Background: `--color-fog` (`#f7f7f8`), 240px wide, no visible border
- Logo: "Klasika" wordmark in `--font-display` at 20px, `--color-ink`
- Nav items: 16px Lucide outline icon + 15px Inter 450 in `--color-ink`, 12px vertical padding
- Active item: `#ffffff` background, `--radius-images` (12px) radius, `--shadow-card` subtle lift
- Section labels: 11px Inter 500, `--color-graphite`, uppercase, 0.5px tracking
- Mobile: collapses to `Sheet` component from shadcn, hamburger trigger in top bar

#### Top bar
- Background: `#ffffff`, optional 1px `--color-dove` bottom border
- Height: 64px
- Page title: 17px Inter 480, `--color-ink`
- Right side: notification bell (Lucide `Bell`, 20px, `--color-graphite`) + Avatar (32px pill, pastel initials)
- No dark mode toggle — Steep is a light-only system; keep it light

#### Cards — all dashboard widgets
- Background: `#ffffff`, `--radius-cards` (24px), 20–24px padding, `--shadow-card`
- Card title: 15px Inter 500, `--color-ink`
- Card subtitle / label: 13px Inter 400, `--color-graphite`
- Warm variant: swap background to `#fbe1d1`, use `--color-rust` for chart strokes
- Cool variant: swap background to `#d3e3fc`, use `#4a90e2` for chart fills

#### Primary CTA button
- One per screen maximum
- Background: `--color-ink` (`#17191c`), text: `#ffffff`, 15px Inter 450
- Padding: 8px 20px, radius: `9999px` (pill)
- Example: "Export PDF", "New Announcement", "Add Assignment"

#### Secondary actions
- Text links only: `--color-ink`, 15px Inter 450, no border, no background
- Or ghost outline pill: 1px `--color-dove` border, `--color-ink` text, same pill radius

#### Badges / status pills
- Radius: `9999px`, padding: 2px 10px, 12px Inter 450
- Present: `#d1e8d5` background, `#3d6b4f` text
- Absent: `#f0ddd5` background, `#8b4a2a` text
- Late: `#f0e9d0` background, `#7a6230` text
- Grade A: `--color-apricot-wash` background, `--color-rust` text
- Grade B/C: `--color-fog` background, `--color-graphite` text

#### Data tables
- Header row: 13px Inter 500, `--color-graphite`, uppercase, 0.5px tracking
- Body cells: 14px Inter 400, `--color-ink`
- Number cells (scores, GPA): 14px Inter 480, `--color-ink`
- Row dividers: 1px `--color-dove`, no zebra striping
- Hover row: `--color-fog` background

#### Grade score color coding
- ≥ 80: text `#3d6b4f` (muted green) — not pure green
- 60–79: text `#7a6230` (muted amber)
- < 60: text `#8b4a2a` (muted rust-red)

#### Recharts styling
- Warm chart (grade trends, GPA): line/stroke color `--color-rust` (`#5d2a1a`), card background `--color-apricot-wash`
- Cool chart (attendance, bar charts): fill color `#4a90e2`, card background `--color-sky-wash`
- Grid lines: 1px `--color-dove`, dashed
- Axis labels: 12px Inter 400, `--color-graphite`
- No chart borders or heavy outlines — let the surface tints do the separation

#### Avatar badges
- 32–40px circle, `9999px` radius
- Pastel backgrounds: mint `#d1ece0`, sky `#d3e3fc`, peach `#fbe1d1`
- Initials: 13px Inter 500, `--color-ink`

#### Chat bubbles
- Sent (right): `--color-ink` background, `#ffffff` text, `--radius-images` radius (12px)
- Received (left): `--color-sky-wash` background, `--color-ink` text, 12px radius
- Input field: `#ffffff` background, 1px `--color-dove` border, `--radius-inputs` (16px), circular send button in `--color-ink`

#### Login page
- Split layout: left panel `--color-fog` with display font headline + tagline, right panel `#ffffff` with login form
- Headline: 44px `--font-display` weight 400, `--color-ink`
- Tagline: 18px Inter 400, `--color-ash`
- Role quick-select buttons: pill shape, `--color-fog` background, `--color-ink` text, 1px `--color-dove` border — active role gets `--color-ink` fill with `#ffffff` text
- Form inputs: `--radius-inputs` (16px), 1px `--color-dove` border

---

### shadcn/ui component usage

Override shadcn defaults to match Steep tokens — do this in `src/styles/shadcn-overrides.css`:

- `Card`: set `border-radius: var(--radius-cards)`, `box-shadow: var(--shadow-card)`, remove default border
- `Badge`: set `border-radius: var(--radius-tags)`, use status-specific color pairs above (not shadcn defaults)
- `Button` (default variant): set to Ink fill pill — `background: var(--color-ink)`, `border-radius: 9999px`
- `Button` (outline variant): `border: 1px solid var(--color-dove)`, `border-radius: 9999px`, no fill
- `Button` (ghost variant): no border, no fill, `--color-graphite` text — for icon buttons
- `Input`: `border-radius: var(--radius-inputs)`, `border: 1px solid var(--color-dove)`
- `Tabs`: underline style only — no pill tabs, no box tabs. Active tab: 2px `--color-ink` underline, 15px Inter 450
- `Dialog`: `border-radius: var(--radius-cards)`, `box-shadow: var(--shadow-card)`
- `Sheet`: `background: var(--color-fog)` for the panel surface
- `Skeleton`: use `--color-fog` base with `--color-dove` shimmer

Components to use (same list as before):
`Card`, `Table`, `Badge`, `Dialog`, `Sheet`, `Tabs`, `Avatar`, `Button`, `Select`, `Input`, `Textarea`, `Tooltip`, `Separator`, `ScrollArea`, `Sonner`

---

### Empty and loading states

- **Empty state**: centered layout, 48px Lucide icon in `--color-dove`, 16px Inter 400 message in `--color-graphite`, optional pill CTA button
- **Skeleton loader**: triggered by 800ms `useEffect` fake delay; use `--color-fog` / `--color-dove` Skeleton components — no color variation in skeletons

---

### Design do's and don'ts for this project

**Do:**
- Use `Playfair Display` only for the login hero headline, dashboard welcome greeting, and report card title
- Apply `--color-apricot-wash` and `--color-sky-wash` as card backgrounds for data widgets — not as decorative washes elsewhere
- Keep the sidebar and top bar surfaces on `--color-fog` and `#ffffff` — no colored chrome
- Use `--shadow-card` (three-layer stack) on every elevated card — never a flat border alone
- Make badges feel like ceramic tiles: generous `9999px` radius, soft muted color pairs
- Use Inter weight 480 for all numeric values (GPA, scores, counts) to make them feel slightly heavier than surrounding text without being bold

**Don't:**
- Don't add dark mode — Steep / Klasika is a light-only system
- Don't use Tailwind's built-in `indigo`, `blue`, `green`, or `red` classes anywhere — map everything to the custom tokens
- Don't add more than one `--color-ink` filled button per page
- Don't use `font-bold` or `font-semibold` anywhere — use Inter weight 480 or 500 instead
- Don't add background color to the sidebar active item using a colored tint — use white with the card shadow
- Don't stripe table rows — use row hover state on `--color-fog` instead

---

## Dummy data specifics

Make the data feel realistic:

```typescript
// Example student
{
  id: "s001",
  name: "Aisha Putri",
  studentNumber: "2024001",
  class: "Grade 10A",
  gpa: 3.72,
  attendanceRate: 94,
  dateOfBirth: "2008-03-15",
  address: "Jl. Merdeka No. 12, Jakarta",
  parentIds: ["p001"]
}

// Example grade entry
{
  studentId: "s001",
  assignmentId: "a003",
  score: 88,
  maxScore: 100,
  gradedAt: "2024-10-14",
  remarks: "Good understanding of quadratic equations"
}
```

Use Indonesian-sounding names for students and parents to match the school context. Teacher names can be more neutral/international.

---

## Key implementation notes

1. **Role-based routing**: use a `ProtectedRoute` wrapper component that reads from `useAuth` and redirects accordingly
2. **Shared components**: the grade report view, chat UI, and announcement list are shared across roles — build them as generic components with props to control read/write permissions
3. **Chart data**: pre-compute grade trend arrays in `src/data/grades.ts` so Recharts can consume them directly
4. **Class ranking**: compute and store rank in the mock data (or compute it in a utility function `computeRanking(students, grades)`)
5. **Parent multi-child**: the parent role should demonstrate switching between two children cleanly — the entire dashboard re-renders for the selected child
6. **Chat demo**: pre-populate 3–4 message threads with realistic back-and-forth conversation history
7. **Responsive sidebar**: use a `Sheet` from shadcn for the mobile sidebar drawer

---

## Deliverables

A single Vite + React project that runs with `npm install && npm run dev`, showing:
- Login page with role quick-select
- All three role dashboards fully navigable
- All pages listed above with realistic dummy data
- No console errors, no TypeScript errors (strict mode)
- README with setup instructions and a short description of each role's features