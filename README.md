# 🚀 Dr-Tasweeq - Digital Marketing Services Platform

A comprehensive **frontend demo/POC** built with **React**, **Vite**, and **Tailwind CSS** showcasing a complete digital marketing services platform with three main areas:

1. **Landing Page** (Public Area) - Browse services, packages, and portfolio
2. **Client Dashboard** - Project management and collaboration workspace
3. **Admin Dashboard** - Platform administration and analytics

---

## 🎯 Features Overview

### 📱 Landing Page (Public)
- Browse packages, services, and digital products
- Interactive shopping cart with checkout simulation
- Portfolio showcase and testimonials
- Pricing plans and featured offers
- Multi-language support ready
- Fully responsive design

### 👤 Client Dashboard
- **Project Overview** - Track progress with interactive progress bars
- **Project Management** - Kanban Board and Timeline views
- **File Management** - Upload/download files, organized storage
- **Financial Management** - Invoices, payments, subscriptions
- **Communication** - Built-in chat and messaging
- **Community Hub** - Access courses, webinars, and articles

### ⚙️ Admin Dashboard
- **User Management** - CRUD operations, roles & permissions
- **Project Management** - Monitor all projects and teams
- **Financial Analytics** - Revenue tracking, transactions
- **Content Management** - Edit packages, services, and community content
- **System Settings** - SMTP, security, integrations, backups

---

## 🔐 Demo Credentials

### Client Login
- **Email:** `client@gmail.com`
- **Password:** `123456`
- **Access:** Client Dashboard features

### Admin Login
- **Email:** `admin@gmail.com`
- **Password:** `123456`
- **Access:** Admin Dashboard features

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
dr-tasweeq/
├── src/
│   ├── components/          # Reusable components
│   │   └── DashboardLayout.jsx
│   ├── contexts/            # React Context (Auth)
│   │   └── AuthContext.jsx
│   ├── data/                # Dummy data
│   │   └── dummyData.js
│   ├── pages/               # Page components
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── client/          # Client dashboard pages
│   │   │   ├── ClientDashboard.jsx
│   │   │   ├── ClientProjects.jsx
│   │   │   ├── ClientFiles.jsx
│   │   │   ├── ClientInvoices.jsx
│   │   │   └── ClientCommunity.jsx
│   │   └── admin/           # Admin dashboard pages
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminUsers.jsx
│   │       ├── AdminProjects.jsx
│   │       ├── AdminFinance.jsx
│   │       ├── AdminContent.jsx
│   │       └── AdminSettings.jsx
│   ├── AppRouter.jsx        # Routing configuration
│   └── main.jsx             # Entry point
├── public/                  # Static assets
└── package.json
```

---

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Context API** - State management

---

## 📚 Documentation

- **[PROJECT_README.md](./PROJECT_README.md)** - Detailed project documentation
- **[FEATURES_GUIDE.md](./FEATURES_GUIDE.md)** - Complete features walkthrough

---

## 🎨 Design Highlights

- **Modern UI** - Gradient accents, smooth animations
- **Dark Theme** - Professional dark color scheme
- **Responsive** - Mobile-first design approach
- **Interactive** - Hover effects, modals, notifications
- **Accessible** - Semantic HTML, keyboard navigation

---

## 🔄 Demo Features

This is a **frontend-only demo** with:
- Simulated authentication (no backend)
- Dummy data for all content
- Local storage for session persistence
- Mock API interactions

---

## 📝 Next Steps for Production

To convert this demo into a production application:

1. **Backend Integration**
   - Connect to real API endpoints
   - Implement proper authentication (JWT/OAuth)
   - Add database integration

2. **Payment Integration**
   - Integrate payment gateways (Stripe, PayPal, Mada)
   - Implement secure checkout flow

3. **File Management**
   - Setup cloud storage (AWS S3, Cloudinary)
   - Implement file upload/download APIs

4. **Real-time Features**
   - Add WebSocket for live chat
   - Implement real-time notifications

5. **Security**
   - Add input validation and sanitization
   - Implement CSRF protection
   - Setup proper CORS policies

6. **Testing & CI/CD**
   - Add unit and integration tests
   - Setup GitHub Actions for automated deployment

---

## 👨‍💻 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Adding New Features

1. Create new page components in `src/pages/`
2. Add routes in `src/AppRouter.jsx`
3. Update dummy data in `src/data/dummyData.js`
4. Add navigation links in `DashboardLayout.jsx`

---

## 📄 License

This is a demo/POC project for client presentation purposes.

---

## 🤝 Contact

For questions or support regarding this demo, please contact the development team.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
