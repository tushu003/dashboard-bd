# Dashboard BD


A modern, feature-rich dashboard application built with Next.js for managing appointments, call logs, and business analytics. This application provides a comprehensive interface for tracking customer interactions, scheduling appointments, and monitoring key performance indicators.


## Features


### Dashboard Overview
- **KPI Cards**: Real-time metrics and key performance indicators
- **Call Trends Chart**: Visual analytics of call patterns over time
- **Recent Activity**: Latest customer interactions and updates
- **Top Repair Requests**: Most common repair types and issues


### Appointments Management
- **Appointment Scheduling**: View and manage customer appointments
- **Summary Cards**: Quick overview of appointment statistics
- **Booking Links**: Generate and manage booking links
- **Pagination**: Efficient navigation through appointment lists
- **Detailed Information**: Client details, device information, repair types, and time slots


### Call Logs & History
- **Call Tracking**: Complete history of customer calls
- **Search & Filters**: Advanced search functionality for quick access
- **Call Details**: Detailed view of individual calls with transcripts
- **Status Tracking**: Monitor call outcomes (AI-resolved, warm-transfer, appointment, dropped)
- **Issue Classification**: Categorize calls by issue type (Screen, Battery, Software, Unknown)


### Settings
- **Profile Management**: Update user profile information
- **Password Settings**: Secure password management


## Tech Stack


- **Framework**: [Next.js](https://nextjs.org/) 16.1.5
- **UI Library**: [React](https://react.dev/) 19.2.3
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Charts**: [Recharts](https://recharts.org/) 3.7.0
- **Icons**: [Lucide React](https://lucide.dev/) 0.563.0
- **Utilities**:
  - `class-variance-authority` - Component variant management
  - `clsx` & `tailwind-merge` - Conditional class utilities


## Prerequisites


Before you begin, ensure you have the following installed:


- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control


## Installation


1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-bd
   ```


2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```


3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```


4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.


## Available Scripts


- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality


## Project Structure


```
dashboard-bd/
├── app/                          # Next.js app directory
│   ├── (dashboard)/              # Dashboard route group
│   │   ├── appointments/         # Appointments page
│   │   ├── call-logs/            # Call logs page
│   │   ├── settings/             # Settings page
│   │   ├── layout.tsx            # Dashboard layout
│   │   └── page.tsx              # Dashboard overview
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── common/                   # Shared components
│   │   ├── navbar.tsx
│   │   ├── sidebar.tsx
│   │   ├── notification-menu.tsx
│   │   └── user-menu.tsx
│   ├── layout/                   # Layout components
│   │   └── dashboard-content.tsx
│   ├── pages/                    # Page-specific components
│   │   ├── appointments/
│   │   ├── call-logs/
│   │   ├── dashboard-overview/
│   │   └── settings/
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       └── progress.tsx
├── contexts/                     # React contexts
│   └── sidebar-context.tsx
├── types/                        # TypeScript type definitions
│   ├── appointment.ts
│   └── call.ts
├── lib/                          # Utility functions
│   └── utils.ts
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```


##  Key Components


### Layout Components
- **Sidebar**: Responsive navigation sidebar with mobile support
- **Navbar**: Top navigation bar with menu toggle
- **DashboardContent**: Main content wrapper with gradient background


### Feature Components
- **KPIGrid**: Displays key performance indicators
- **CallTrendsChart**: Interactive chart for call analytics
- **AppointmentsTable**: Data table for appointment management
- **CallList**: List view of call logs with selection
- **CallDetails**: Detailed view of selected call with transcript


## Type Definitions


### Appointment
```typescript
interface Appointment {
  id: string
  clientName: string
  clientPhone: string
  clientEmail: string
  device: string
  repairType: string
  date: string
  slotNo: number
  startTime: string
}
```


### Call
```typescript
interface Call {
  id: string
  phoneNumber: string
  date: string
  time: string
  duration: string
  outcome: string
  issueType: string
  status: "ai-resolved" | "warm-transfer" | "appointment" | "dropped"
  transcript?: {
    speaker: "ai" | "customer"
    message: string
  }[]
}
```


##  Features in Detail


### Responsive Design
- Mobile-first approach with responsive breakpoints
- Collapsible sidebar for mobile devices
- Adaptive layouts for tablets and desktops


### State Management
- React Context API for sidebar state
- Local state management with React hooks
- Efficient data filtering and pagination


### User Experience
- Smooth transitions and animations
- Intuitive navigation
- Modern gradient-based UI design
- Accessible components with proper ARIA labels


## 🚀 Deployment


### Build for Production
```bash
npm run build
```


### Start Production Server
```bash
npm run start
```


### Deploy to Vercel
The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):


1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with a single click


##  Configuration


### Next.js Configuration
The `next.config.ts` file includes:
- Image optimization settings
- Remote image patterns for external sources


### TypeScript Configuration
- Strict type checking enabled
- Path aliases configured (`@/*` maps to project root)
- Modern ES module support


##  Development Guidelines


### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Write self-documenting code with clear variable names


### Component Organization
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for prop types
- Organize components by feature and commonality


##  Contributing


1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


##  License


This project is private and proprietary.


## 👥 Authors


- Dashboard BD Development Team


## Acknowledgments


- Built with [Next.js](https://nextjs.org/)
- UI components inspired by modern design systems
- Icons provided by [Lucide](https://lucide.dev/)


---


**Note**: This is a development version. For production deployment, ensure all environment variables are properly configured and security measures are in place.


