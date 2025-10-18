// Dummy data for the entire application

export const packages = [
  {
    id: 1,
    name: "Starter Package",
    price: 999,
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "Basic Website",
      "Social Media Setup",
      "3 Design Revisions",
      "Email Support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional Package",
    price: 2499,
    description: "Complete digital presence for growing businesses",
    features: [
      "Custom Website",
      "SEO Optimization",
      "Social Media Management",
      "Content Creation",
      "10 Design Revisions",
      "Priority Support",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise Package",
    price: 5999,
    description: "Full-scale solution for established businesses",
    features: [
      "Advanced Website",
      "E-commerce Integration",
      "Full Marketing Suite",
      "Video Production",
      "Unlimited Revisions",
      "24/7 Support",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    description: "Custom websites built with latest technologies",
    price: 1500,
  },
  {
    id: 2,
    title: "Digital Marketing",
    icon: "📱",
    description: "Comprehensive digital marketing strategies",
    price: 1200,
  },
  {
    id: 3,
    title: "Brand Design",
    icon: "🎨",
    description: "Complete brand identity and design solutions",
    price: 2000,
  },
  {
    id: 4,
    title: "Video Production",
    icon: "🎬",
    description: "Professional video content creation",
    price: 3000,
  },
  {
    id: 5,
    title: "SEO Services",
    icon: "🔍",
    description: "Search engine optimization and ranking",
    price: 800,
  },
  {
    id: 6,
    title: "Content Writing",
    icon: "✍️",
    description: "Engaging content for your audience",
    price: 600,
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    client: "Tech Store Inc",
    description: "Full-featured online store with payment integration",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    client: "Fashion Co",
    description: "Complete brand redesign and marketing materials",
  },
  {
    id: 3,
    title: "Mobile App",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    client: "Fitness Plus",
    description: "iOS and Android fitness tracking application",
  },
  {
    id: 4,
    title: "Marketing Campaign",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    client: "Restaurant Chain",
    description: "Multi-channel marketing campaign with 300% ROI",
  },
];

export const clientProjects = [
  {
    id: 1,
    name: "Website Redesign Project",
    progress: 75,
    status: "In Progress",
    dueDate: "2025-11-15",
    team: ["Sarah Designer", "Mike Developer"],
    budget: 2500,
    spent: 1875,
    tasks: [
      {
        id: 1,
        title: "Design mockups",
        status: "completed",
        assignee: "Sarah Designer",
      },
      {
        id: 2,
        title: "Frontend development",
        status: "in-progress",
        assignee: "Mike Developer",
      },
      {
        id: 3,
        title: "Backend integration",
        status: "pending",
        assignee: "Mike Developer",
      },
      { id: 4, title: "Testing & QA", status: "pending", assignee: "QA Team" },
    ],
  },
  {
    id: 2,
    name: "Social Media Campaign",
    progress: 45,
    status: "In Progress",
    dueDate: "2025-10-30",
    team: ["Emma Marketing"],
    budget: 1500,
    spent: 675,
    tasks: [
      {
        id: 5,
        title: "Content calendar",
        status: "completed",
        assignee: "Emma Marketing",
      },
      {
        id: 6,
        title: "Create graphics",
        status: "in-progress",
        assignee: "Emma Marketing",
      },
      {
        id: 7,
        title: "Schedule posts",
        status: "pending",
        assignee: "Emma Marketing",
      },
    ],
  },
  {
    id: 3,
    name: "SEO Optimization",
    progress: 100,
    status: "Completed",
    dueDate: "2025-09-30",
    team: ["David SEO"],
    budget: 800,
    spent: 800,
    tasks: [],
  },
];

export const clientInvoices = [
  {
    id: "INV-001",
    date: "2025-10-01",
    amount: 2500,
    status: "Paid",
    description: "Website Redesign - Initial Payment",
  },
  {
    id: "INV-002",
    date: "2025-10-05",
    amount: 1500,
    status: "Paid",
    description: "Social Media Campaign - Full Payment",
  },
  {
    id: "INV-003",
    date: "2025-10-10",
    amount: 1250,
    status: "Pending",
    description: "Website Redesign - Final Payment",
  },
];

export const messages = [
  {
    id: 1,
    sender: "Sarah Designer",
    message: "Hi! I've uploaded the latest design mockups for your review.",
    timestamp: "2025-10-11 09:30",
    type: "received",
  },
  {
    id: 2,
    sender: "You",
    message:
      "Thanks! They look great. Can we adjust the color scheme slightly?",
    timestamp: "2025-10-11 10:15",
    type: "sent",
  },
  {
    id: 3,
    sender: "Sarah Designer",
    message: "Absolutely! I'll have the updated version ready by tomorrow.",
    timestamp: "2025-10-11 10:20",
    type: "received",
  },
];

export const communityContent = [
  {
    id: 1,
    type: "course",
    title: "Digital Marketing Fundamentals",
    description: "Learn the basics of digital marketing",
    duration: "4 weeks",
    enrolled: 245,
  },
  {
    id: 2,
    type: "webinar",
    title: "SEO Best Practices 2025",
    description: "Latest SEO strategies and techniques",
    date: "2025-10-20",
    attendees: 89,
  },
  {
    id: 3,
    type: "article",
    title: "Building a Strong Brand Identity",
    description: "Essential steps to create memorable brand",
    readTime: "8 min",
    views: 1250,
  },
];

// Admin Dashboard Data
export const adminUsers = [
  {
    id: 1,
    name: "John Client",
    email: "client@gmail.com",
    role: "client",
    status: "active",
    joinDate: "2025-01-15",
    projects: 3,
    totalSpent: 5250,
  },
  {
    id: 2,
    name: "Sarah Designer",
    email: "sarah@company.com",
    role: "freelancer",
    status: "active",
    joinDate: "2024-11-20",
    projectsCompleted: 28,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mike Developer",
    email: "mike@company.com",
    role: "freelancer",
    status: "active",
    joinDate: "2024-10-05",
    projectsCompleted: 35,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Emma Marketing",
    email: "emma@company.com",
    role: "freelancer",
    status: "active",
    joinDate: "2025-02-10",
    projectsCompleted: 15,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Admin User",
    email: "admin@gmail.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-01",
    permissions: "full",
  },
];

export const adminProjects = [
  {
    id: 1,
    name: "Website Redesign Project",
    client: "John Client",
    status: "In Progress",
    progress: 75,
    startDate: "2025-09-01",
    dueDate: "2025-11-15",
    budget: 2500,
    team: ["Sarah Designer", "Mike Developer"],
  },
  {
    id: 2,
    name: "Social Media Campaign",
    client: "John Client",
    status: "In Progress",
    progress: 45,
    startDate: "2025-10-01",
    dueDate: "2025-10-30",
    budget: 1500,
    team: ["Emma Marketing"],
  },
  {
    id: 3,
    name: "Mobile App Development",
    client: "Tech Startup Inc",
    status: "Planning",
    progress: 10,
    startDate: "2025-10-15",
    dueDate: "2026-03-30",
    budget: 15000,
    team: ["Mike Developer"],
  },
  {
    id: 4,
    name: "Brand Identity Package",
    client: "Fashion Co",
    status: "Completed",
    progress: 100,
    startDate: "2025-07-01",
    dueDate: "2025-09-15",
    budget: 3500,
    team: ["Sarah Designer"],
  },
];

export const adminAnalytics = {
  totalRevenue: 125000,
  activeClients: 24,
  completedProjects: 156,
  deliveryRate: 94,
  monthlyRevenue: [
    { month: "Jan", revenue: 8500 },
    { month: "Feb", revenue: 12000 },
    { month: "Mar", revenue: 15500 },
    { month: "Apr", revenue: 11000 },
    { month: "May", revenue: 14500 },
    { month: "Jun", revenue: 16000 },
    { month: "Jul", revenue: 18500 },
    { month: "Aug", revenue: 13000 },
    { month: "Sep", revenue: 16500 },
  ],
  projectsByStatus: {
    completed: 156,
    inProgress: 18,
    planning: 6,
    onHold: 3,
  },
};

export const testimonials = [
  {
    id: 1,
    name: "Michael Brown",
    company: "Tech Solutions Inc",
    rating: 5,
    text: "Outstanding service! The team delivered our project ahead of schedule and exceeded all expectations.",
    avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=random",
  },
  {
    id: 2,
    name: "Jessica Lee",
    company: "Fashion Forward",
    rating: 5,
    text: "Professional, creative, and reliable. Our brand has never looked better!",
    avatar: "https://ui-avatars.com/api/?name=Jessica+Lee&background=random",
  },
  {
    id: 3,
    name: "David Chen",
    company: "Startup Hub",
    rating: 5,
    text: "The best investment we made. The ROI from their marketing campaign was incredible.",
    avatar: "https://ui-avatars.com/api/?name=David+Chen&background=random",
  },
];

// Freelancer Data
export const freelancerTasks = [
  {
    id: 1,
    title: "Design Instagram Ad",
    project: "ABC Campaign",
    status: "in-progress",
    deadline: "2025-01-18",
    priority: "high",
    description: "Create engaging Instagram ad for the new product launch",
    assignedBy: "John Client",
    progress: 75,
  },
  {
    id: 2,
    title: "Landing Page UI",
    project: "Website Revamp",
    status: "pending",
    deadline: "2025-01-20",
    priority: "medium",
    description: "Design modern landing page for the website redesign",
    assignedBy: "Admin User",
    progress: 0,
  },
  {
    id: 3,
    title: "Logo Concept",
    project: "Brand Refresh",
    status: "completed",
    deadline: "2025-01-10",
    priority: "high",
    description: "Create new logo concepts for brand refresh",
    assignedBy: "John Client",
    progress: 100,
  },
  {
    id: 4,
    title: "Social Media Graphics",
    project: "Marketing Campaign",
    status: "in-progress",
    deadline: "2025-01-22",
    priority: "medium",
    description: "Design social media graphics for the campaign",
    assignedBy: "Admin User",
    progress: 40,
  },
  {
    id: 5,
    title: "Email Template",
    project: "Newsletter Design",
    status: "pending",
    deadline: "2025-01-25",
    priority: "low",
    description: "Create responsive email template for newsletter",
    assignedBy: "John Client",
    progress: 0,
  },
];

export const freelancerFiles = [
  {
    project: "ABC Campaign",
    files: [
      { name: "brief.pdf", size: "2.3 MB", type: "pdf", uploaded: "2025-01-15" },
      { name: "mockup1.png", size: "1.8 MB", type: "image", uploaded: "2025-01-16" },
      { name: "final.zip", size: "5.2 MB", type: "archive", uploaded: "2025-01-17" },
    ],
  },
  {
    project: "Website Revamp",
    files: [
      { name: "wireframe.pdf", size: "1.5 MB", type: "pdf", uploaded: "2025-01-14" },
      { name: "colors.ai", size: "3.1 MB", type: "design", uploaded: "2025-01-15" },
      { name: "assets.zip", size: "8.7 MB", type: "archive", uploaded: "2025-01-16" },
    ],
  },
  {
    project: "Brand Refresh",
    files: [
      { name: "logo_variations.png", size: "2.1 MB", type: "image", uploaded: "2025-01-12" },
      { name: "brand_guidelines.pdf", size: "4.3 MB", type: "pdf", uploaded: "2025-01-13" },
    ],
  },
];

export const chatMessages = [
  {
    id: 1,
    sender: "John Client",
    message: "Hi Sarah! How's the Instagram ad coming along?",
    timestamp: "2025-01-17T10:30:00Z",
    isOwn: false,
    avatar: "https://ui-avatars.com/api/?name=John+Client&background=DC1F2E&color=fff",
  },
  {
    id: 2,
    sender: "Sarah Freelancer",
    message: "Hi John! It's going great, I'm about 75% done. Should have the first draft ready by tomorrow.",
    timestamp: "2025-01-17T10:32:00Z",
    isOwn: true,
    avatar: "https://ui-avatars.com/api/?name=Sarah+Freelancer&background=10B981&color=fff",
  },
  {
    id: 3,
    sender: "Admin User",
    message: "Great work Sarah! The landing page design looks fantastic.",
    timestamp: "2025-01-17T11:15:00Z",
    isOwn: false,
    avatar: "https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff",
  },
  {
    id: 4,
    sender: "Sarah Freelancer",
    message: "Thank you! I'm really happy with how it turned out. Any feedback on the color scheme?",
    timestamp: "2025-01-17T11:17:00Z",
    isOwn: true,
    avatar: "https://ui-avatars.com/api/?name=Sarah+Freelancer&background=10B981&color=fff",
  },
  {
    id: 5,
    sender: "John Client",
    message: "The colors look perfect! Can't wait to see the final version.",
    timestamp: "2025-01-17T11:20:00Z",
    isOwn: false,
    avatar: "https://ui-avatars.com/api/?name=John+Client&background=DC1F2E&color=fff",
  },
];

export const freelancerKPIs = {
  activeTasks: 4,
  completedTasks: 12,
  onTimeRate: 92,
  monthlyProgress: 78,
  averageDeliveryTime: "2.3 days",
  projectsThisMonth: 8,
  rating: 4.8,
  tasksPerWeek: [
    { week: "Week 1", tasks: 3 },
    { week: "Week 2", tasks: 5 },
    { week: "Week 3", tasks: 4 },
    { week: "Week 4", tasks: 6 },
  ],
  taskStatusDistribution: [
    { status: "Completed", count: 12, color: "#10B981" },
    { status: "In Progress", count: 4, color: "#3B82F6" },
    { status: "Pending", count: 2, color: "#F59E0B" },
  ],
};
