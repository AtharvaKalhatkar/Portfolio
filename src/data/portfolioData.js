export const portfolioData = {
  profile: {
    name: "Atharva",
    fullTitle: "Founder, LogicSync Digital | Final-Year B.E. IT Student @ JSPM's BSIOTR, Pune",
    motto: "Digitizing Indian SMEs through Offline-First Systems & Gen AI 🚀",
    roles: [
      "Founder & Developer @ LogicSync Digital",
      "Software Engineer — Java 21 & Spring Boot 3.3",
      "10+ Live Production SME Applications",
      "B.E. IT (6th Sem) @ JSPM BSIOTR",
      "Real-World Business Automation Architect"
    ],
    cgpa: "8.6 / 10.0",
    batch: "2027 Batch",
    college: "JSPM's Bhivarabai Sawant Institute of Technology & Research (BSIOTR), Wagholi, Pune",
    location: "Pune, Maharashtra, India",
    email: "kalhatkaratharva01@gmail.com",
    phone: "+91 83907 68833",
    github: "https://github.com/AtharvaKalhatkar",
    linkedin: "https://www.linkedin.com/in/atharva-kalhatkar/",
    avatar: "/images/avatar.jpg",
    startup: "LogicSync Digital",
    focus: "Digitizing Indian SMEs — shipped production systems for 10+ real business clients across agriculture, water distribution, retail, wholesale, and real estate.",
    interests: ["Indian Market Dynamics", "Fintech & UPI Integrations", "Gen AI & RAG Architectures"],
    stats: [
      { label: "Production Apps", value: "10+ Live" },
      { label: "Startup", value: "LogicSync" },
      { label: "Degree", value: "B.E. IT" },
      { label: "Core Stack", value: "Java & Spring" }
    ]
  },

  flagshipAi: {
    title: "SmartSpend — Gen AI Expense Tracker",
    tagline: "Built on Spring AI with Groq / LLaMA3, RBAC, PostgreSQL & Docker on Render",
    description: "Lead portfolio project showcasing Generative AI integration in backend architectures. Features natural language expense processing via LLaMA3, Spring Security role-based access control, PostgreSQL persistence, and containerized Render deployment. Planned extension: Retrieval-Augmented Generation (RAG) for financial insights.",
    tags: ["Spring AI", "Groq / LLaMA3", "Java 21", "Spring Boot", "PostgreSQL", "Docker", "Render"],
    metrics: "Production Gen AI integration with Sub-second Groq inference"
  },

  learningJourney: [
    "Advanced Spring Boot & Microservices",
    "Docker & Kubernetes Containerization",
    "AWS Cloud Infrastructure & Deployment",
    "System Design & Distributed Systems"
  ],

  services: [
    "Backend & REST API Architecture",
    "Custom SME Business Automation Software",
    "ERP Systems for Agencies & Wholesale Distributors",
    "Property & Tenant Billing Automation",
    "Stone Crusher Weighbridge Invoicing Systems",
    "Offline-first Sync Engines & Mobile Apps"
  ],

  skills: [
    { name: "Java 21 / Spring Boot 3.3", category: "Backend", level: 96, color: "#3B82F6" },
    { name: "Spring AI & Groq LLaMA3", category: "AI & Backend", level: 92, color: "#8B5CF6" },
    { name: "PostgreSQL 15 & Flyway", category: "Database", level: 94, color: "#3B82F6" },
    { name: "SQLite & WatermelonDB / Dexie", category: "Offline Sync", level: 95, color: "#10B981" },
    { name: "Redis & RabbitMQ", category: "Backend & Queues", level: 88, color: "#EF4444" },
    { name: "React / TypeScript / Vite PWA", category: "Frontend", level: 92, color: "#38BDF8" },
    { name: "React Native / Expo Mobile", category: "Mobile", level: 86, color: "#6366F1" },
    { name: "JavaFX 21 & AtlantaFX UI", category: "Desktop", level: 90, color: "#F59E0B" },
    { name: "Tesseract.js Purchase OCR", category: "AI & Tools", level: 85, color: "#10B981" },
    { name: "Docker & GitHub Actions CI/CD", category: "DevOps", level: 90, color: "#3B82F6" }
  ],

  products: [
    {
      id: "dukan-setu",
      title: "Dukan Setu (Vyapar Setu)",
      subtitle: "Universal Offline-First Business Management Platform / ERP for Indian SMEs",
      category: "Flagship SME ERP",
      liveClients: "15+ Live Customers",
      shortDesc: "Universal offline-first ERP for Indian retailers & wholesalers. Positioned against Tally, Vyapar, OkCredit & Khatabook.",
      fullDesc: "Dukan Setu is LogicSync Digital's flagship business management platform. Built with a plugin/vertical configuration architecture designed to support 33 industry verticals. Includes GST-compliant invoicing, barcode scanning, party ledger (Udhari) tracking, OCR purchase entry via Tesseract.js, daybook cashbook, GSTR-1/3B reporting, CRM, and payroll.",
      image: "/images/dukan_setu_real_ui.png",
      tags: ["React PWA", "React Native", "WatermelonDB", "Java 21", "Spring Boot 3.3", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
      features: [
        "Invoicing & Smart Billing (GST-compliant, Barcode, Multi-theme)",
        "Party Ledger & Udhari Credit Tracking",
        "Purchase Entry via Tesseract.js OCR",
        "Banking, Cashbook & Daybook Management",
        "GST & Financial Reports (GSTR-1 / 3B)",
        "33 Planned Industry Vertical Configurations"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    },
    {
      id: "vega-erp",
      title: "VEGA ERP — Distributor Desktop ERP",
      subtitle: "Desktop ERP for Indian Wholesalers & Agencies with AI Assistant",
      category: "Desktop ERP",
      liveClients: "12 Full Modules",
      shortDesc: "JavaFX 21 + Spring Boot 3 desktop ERP featuring modern AtlantaFX dark UI, AI assistant, and WhatsApp PDF dispatch.",
      fullDesc: "Built for Indian distributors and agencies requiring heavy desktop throughput. Features 12 core modules including billing, inventory, GST compliance, distribution routes, payroll, integrated AI assistant, and instant WhatsApp PDF invoice dispatch with cloud sync.",
      image: "/images/vega_erp_real_ui.png",
      tags: ["JavaFX 21", "Spring Boot 3", "AtlantaFX UI", "WhatsApp API", "Cloud Sync"],
      features: [
        "12 Core Modules (Billing, Inventory, GST, Distribution, Payroll)",
        "Integrated AI Assistant for inventory forecasting",
        "Modern AtlantaFX Dark UI theme",
        "Automated WhatsApp PDF invoice dispatch",
        "Offline-first engine with seamless cloud backup"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    },
    {
      id: "agri-sync",
      title: "AgriSync — Krushi Seva Kendra PWA",
      subtitle: "Offline-First Management for Agri-Input Stores",
      category: "Agri Tech PWA",
      liveClients: "50+ Verified Pune Leads",
      shortDesc: "Offline-first PWA for Krushi Seva Kendras featuring Dexie.js + Supabase sync and UPI payment sharing.",
      fullDesc: "Tailored specifically for agricultural input retail shops. Manages fertilizer/pesticide batches, credit (Udhari) ledgers, offline Dexie.js database persistence, Supabase cloud sync, and instant UPI QR/link payment sharing.",
      image: "/images/agrisync_real_ui.png",
      tags: ["Dexie.js", "Supabase", "React PWA", "UPI Integration"],
      features: [
        "Fertilizer & Pesticide batch inventory tracking",
        "Dexie.js offline-first local storage",
        "Supabase cloud database synchronization",
        "Instant UPI payment link sharing with farmers"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    },
    {
      id: "aqua-sync",
      title: "AquaSync — Water Distribution Suite",
      subtitle: "Water Delivery & Drinking Water Supply ERP",
      category: "Utility ERP",
      liveClients: "Warm Buyer Leads",
      shortDesc: "Water distribution management platform featuring driver route tracking, customer monthly billing, and warm buyer leads.",
      fullDesc: "Automates water delivery operations for suppliers. Manages customer monthly jar ledgers, delivery route tracking, driver mobile app integration, offline sync, and automated PDF invoice generation.",
      image: "/images/aquasync_real_ui.png",
      tags: ["Java", "SQLite", "Supabase", "PostgreSQL", "PWA"],
      features: [
        "Monthly jar delivery & return tracking",
        "Driver PWA mobile application",
        "Automated PDF bill generation",
        "Supabase cloud data synchronization"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    },
    {
      id: "crusher-sync",
      title: "Crusher Sync — Stone Crusher Management",
      subtitle: "Industrial Invoicing & Weighbridge Scale ERP",
      category: "Industrial ERP",
      liveClients: "Crusher Operations",
      shortDesc: "Specialized management system for stone crusher & quarry operations with weighbridge scale integration.",
      fullDesc: "Built for stone crusher businesses. Connects directly with weighbridge scale readings, calculates tonnage and brass billing, generates vehicle dispatch challans, and manages party credit ledgers.",
      image: "/images/crusher_sync.png",
      tags: ["Java", "Spring Boot", "SQLite", "PostgreSQL", "Weighbridge API"],
      features: [
        "Weighbridge scale hardware integration",
        "Brass & tonnage billing calculations",
        "Vehicle dispatch challan generation",
        "Party credit ledger & daily quarry reporting"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    },
    {
      id: "property-sync",
      title: "Property Sync & PropEmpire Invoice Engine",
      subtitle: "Tenant Billing & Real Estate Channel Partner Invoice Generator",
      category: "Real Estate Tech",
      liveClients: "Real Estate Partners",
      shortDesc: "Tenant electricity bill & rent management system + pixel-perfect React invoice generator for real estate channel partners.",
      fullDesc: "Dual real estate solution: Property Sync manages tenant leases, calculates utility light bills, and sends rent payment links. PropEmpire is a pixel-perfect React invoice generator designed for real estate channel partners with instant PDF download and printing.",
      image: "/images/property_sync.png",
      tags: ["React", "Spring Boot", "PostgreSQL", "WhatsApp API", "PDF Generator"],
      features: [
        "Automated tenant electricity bill calculation",
        "WhatsApp rent payment collection link sharing",
        "PropEmpire pixel-perfect React invoice generator",
        "One-click PDF download & print engine"
      ],
      demoUrl: "https://github.com/AtharvaKalhatkar",
      githubUrl: "https://github.com/AtharvaKalhatkar"
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Founder & Lead Software Developer",
      company: "LogicSync Digital",
      description: "Building production software for Indian SMEs across Pune district. Architected Dukan Setu (15+ live customers), VEGA ERP, AgriSync (50+ leads), AquaSync, Crusher Sync, and Property Sync.",
      highlights: [
        "Shipped production systems for 10+ real business clients across 5 industry sectors",
        "Architected Dukan Setu universal offline-first PWA/Mobile platform with 33 planned vertical configs",
        "Developed custom offline-first sync engines combining WatermelonDB / Dexie.js with Spring Boot 3.3"
      ]
    },
    {
      period: "2023 - 2027 (Final Year)",
      role: "Bachelor of Engineering (Information Technology)",
      company: "Jaywant Shikshan Prasarak Mandals Bhivarabai Sawant Institute of Technology & Research (JSPM BSIOTR), Wagholi, Pune",
      description: "Final-Year B.E. IT Student (2027 Batch) maintaining an academic CGPA of 8.6 / 10.0.",
      highlights: [
        "Academic CGPA: 8.6 / 10.0",
        "Specialized in Java 21, Spring Boot, Distributed Systems, Database Design, and Gen AI"
      ]
    }
  ],

  contact: {
    name: "Atharva",
    email: "kalhatkaratharva01@gmail.com",
    phone: "+91 83907 68833",
    location: "Pune, Maharashtra, India",
    github: "https://github.com/AtharvaKalhatkar",
    linkedin: "https://www.linkedin.com/in/atharva-kalhatkar/",
    twitter: "https://twitter.com/AtharvaKalhatkar"
  }
};
