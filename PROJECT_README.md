# Dr-Tasweeq - Digital Marketing Services Platform Demo

A comprehensive demo/POC frontend application built with React, Vite, and Tailwind CSS showcasing a complete digital services platform with three main areas:

1. **Landing Page** (Public)
2. **Client Dashboard**
3. **Admin Dashboard**

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔐 Demo Login Credentials

### Client Dashboard

- **Email:** `client@gmail.com`
- **Password:** `123456`

### Admin Dashboard

- **Email:** `admin@gmail.com`
- **Password:** `123456`

## 📁 Project Structure

```
src/
├── contexts/
│   └── AuthContext.jsx          # Authentication context with simulated login
├── data/
│   └── dummyData.js             # All dummy data for the application
├── components/
│   └── DashboardLayout.jsx      # Shared dashboard layout with sidebar
├── pages/
│   ├── LandingPage.jsx          # Public landing page
│   ├── LoginPage.jsx            # Login page with quick login buttons
│   ├── client/                  # Client dashboard pages
│   │   ├── ClientDashboard.jsx  # Overview with stats and messages
│   │   ├── ClientProjects.jsx   # Project management with Kanban & Timeline
│   │   ├── ClientFiles.jsx      # File management system
│   │   ├── ClientInvoices.jsx   # Invoice and payment management
│   │   └── ClientCommunity.jsx  # Community hub with courses & webinars
│   └── admin/                   # Admin dashboard pages
│       ├── AdminDashboard.jsx   # Overview with analytics
│       ├── AdminUsers.jsx       # User management (CRUD)
│       ├── AdminProjects.jsx    # Project management
│       ├── AdminFinance.jsx     # Financial analytics & transactions
│       ├── AdminContent.jsx     # Content management
│       └── AdminSettings.jsx    # System settings
└── AppRouter.jsx                # Main routing configuration
```

## 🎨 Features Overview

### 1. Landing Page (Public Area)

#### Main Features:

- **Hero Section** with compelling CTA
- **Services Showcase** - 6 different services with pricing
- **Packages Section** - 3 pricing tiers (Starter, Professional, Enterprise)
- **Portfolio Gallery** - Sample projects with categories
- **Testimonials** - Client feedback with ratings
- **Contact Form** - Get in touch section with contact details
- **Shopping Cart** - Add services/packages to cart
- **Checkout System** - Multiple payment methods (Credit Card, Bank Transfer, Mada)

#### Technologies:

- Responsive design
- Smooth animations
- Interactive cart system
- Modern UI with gradients and animations

### 2. Client Dashboard

#### Overview Page:

- Project statistics cards
- Real-time project progress bars
- Built-in messaging system
- Recent activity feed

#### My Projects:

- **Kanban Board View** - Drag-and-drop task management
- **Timeline View** - Chronological project overview
- Project progress tracking
- Team member management
- Budget monitoring

#### File Management:

- Folder organization
- File upload/download
- Storage usage tracking
- File type categorization (PDF, Images, Videos, Archives)
- Search and filter functionality

#### Invoices & Payments:

- Invoice history
- Payment status tracking
- Multiple payment methods
- Subscription management
- Financial summary cards

#### Community Hub:

- **Courses** - Educational content with enrollment
- **Webinars** - Upcoming events and registration
- **Articles** - Blog posts and guides
- **Q&A Section** - Community discussions

### 3. Admin Dashboard

#### Overview:

- Key metrics (Revenue, Clients, Projects, Delivery Rate)
- Monthly revenue chart
- Project status breakdown
- Recent activity log
- Quick action cards

#### User Management:

- Full CRUD operations for users
- Role management (Admin, Client, Freelancer)
- User statistics
- Search and filter functionality
- Status management

#### Project Management:

- Project grid view
- Progress tracking
- Team assignment
- Budget monitoring
- Status filtering
- Performance metrics

#### Financial Management:

- Revenue analytics
- Transaction history
- Income vs. Payout tracking
- Monthly revenue trends
- Expense breakdown
- Key financial metrics

#### Content Management:

- Manage packages, services, and pricing
- Community content administration
- Content statistics
- Easy editing interface

#### System Settings:

- **General Settings** - Site configuration
- **Email/SMTP** - Email server setup
- **Security** - 2FA, encryption, session management
- **Backup** - Automated backup scheduling
- **Integrations** - Third-party service connections (Google Analytics, Stripe, WhatsApp, etc.)
- **Notifications** - Email and WhatsApp notification preferences

## 🎯 Key Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Context API** - State management

## 🔄 Simulated Features

### Authentication

- Simulated login system (no backend)
- Role-based routing (Client vs Admin)
- Protected routes
- Persistent login with localStorage

### Data

- All data is dummy/mock data
- No real API calls
- Perfect for demonstrations and presentations

## 🎨 Design Features

- **Modern UI** with gradients and animations
- **Responsive Design** - Works on all screen sizes
- **Dark Theme** - Professional dark mode design
- **Smooth Transitions** - Polished user experience
- **Interactive Elements** - Hover effects, animations
- **Professional Color Scheme** - Purple/Pink gradients with dark backgrounds

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Navigation

### Public Routes:

- `/` - Landing Page
- `/login` - Login Page

### Client Routes (Requires client@gmail.com login):

- `/client/dashboard` - Client Dashboard
- `/client/projects` - My Projects
- `/client/files` - File Management
- `/client/invoices` - Invoices & Payments
- `/client/community` - Community Hub

### Admin Routes (Requires admin@gmail.com login):

- `/admin/dashboard` - Admin Dashboard
- `/admin/users` - User Management
- `/admin/projects` - Project Management
- `/admin/finance` - Financial Management
- `/admin/content` - Content Management
- `/admin/settings` - System Settings

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Notes for Development

- All authentication is simulated - no real backend
- Data persists only in memory/localStorage
- Perfect for client presentations and POC demos
- Easily extendable with real API integration
- All components are well-organized and documented

## 🎓 Use Cases

This demo is perfect for:

- Client presentations
- POC demonstrations
- UI/UX showcases
- Frontend development portfolios
- Template for building real applications
- Learning React and modern web development

## 🔧 Customization

To customize the application:

1. **Update Colors**: Modify Tailwind classes throughout components
2. **Change Data**: Edit `src/data/dummyData.js`
3. **Add Features**: Create new pages in respective directories
4. **Modify Routes**: Update `src/AppRouter.jsx`
5. **Update Branding**: Change name/logo in components

## 📄 License

This is a demo project. Feel free to use it as a template for your own projects.

## 🤝 Contributing

This is a demo project, but feel free to use it as inspiration or a starting point for your own applications!

---

**Built with ❤️ using React + Vite + Tailwind CSS**
