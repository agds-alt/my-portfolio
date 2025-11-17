import { Project } from "../domain/entities/Project";

export const projects: Project[] = [
  {
    id: "wc-check",
    title: "WC Check",
    shortDescription: "Professional Toilet Monitoring System dengan QR code scanning dan analytics real-time",
    fullDescription: "Sistem monitoring kebersihan toilet berbasis web dengan QR code scanning dan analytics real-time untuk organisasi, perusahaan, dan institusi. Meningkatkan efisiensi inspeksi hingga 70% dan mengurangi paperwork manual.",
    category: "full-stack",
    techStack: [
      {
        category: "Frontend",
        technologies: ["Next.js 14", "React 18.2", "TypeScript 5.9", "Tailwind CSS", "Framer Motion"]
      },
      {
        category: "Backend & Database",
        technologies: ["Supabase", "PostgreSQL"]
      },
      {
        category: "Services & Tools",
        technologies: ["Cloudinary", "PWA", "QR Code Generator"]
      }
    ],
    highlights: [
      {
        title: "QR Code Scanning",
        description: "Auto-generated QR codes untuk setiap lokasi toilet",
        icon: "qr-code"
      },
      {
        title: "Real-time Analytics",
        description: "Dashboard dengan insights dan trends inspection",
        icon: "activity"
      },
      {
        title: "PWA Support",
        description: "Installable sebagai mobile app dengan offline capability",
        icon: "smartphone"
      }
    ],
    features: [
      "QR Code Scanning & Auto-generated QR codes",
      "Multi-component inspection checklist (11 komponen)",
      "Real-time dashboard dengan analytics",
      "Photo documentation dengan Cloudinary",
      "Role-based access control (Admin, User, Super Admin)",
      "Multi-level organization hierarchy (Org → Building → Location)",
      "PWA support - Installable sebagai mobile app",
      "Export data (CSV)",
      "Calendar view untuk inspection history"
    ],
    impact: {
      performance: "Meningkatkan efisiensi inspeksi hingga 70%",
      users: "Mengurangi paperwork dan manual tracking"
    },
    demo: "https://wc-checks.vercel.app",
    image: "/projects/wccheck-thumb.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "PWA", "QR Code"],
    year: "2024",
    status: "production"
  },
  {
    id: "agds-pos",
    title: "AGDS Corp POS",
    shortDescription: "Point of Sale & Warehouse Management System dengan modern tech stack",
    fullDescription: "Comprehensive POS and Warehouse Management System untuk berkompetisi dengan established Indonesian POS solutions seperti Moka POS, Pawoon, dan Majoo. Menggunakan modern tech stack dengan performance superior dan cost-efficient alternative untuk Indonesian market.",
    category: "full-stack",
    techStack: [
      {
        category: "Frontend",
        technologies: ["Next.js 16", "TypeScript 5.9", "Tailwind CSS"]
      },
      {
        category: "Backend & API",
        technologies: ["tRPC", "PostgreSQL", "Prisma"]
      },
      {
        category: "Infrastructure",
        technologies: ["Upstash Redis", "Vercel"]
      }
    ],
    highlights: [
      {
        title: "Multi-outlet Management",
        description: "Kelola banyak outlet dari satu dashboard",
        icon: "store"
      },
      {
        title: "Real-time Inventory",
        description: "Tracking stock dan warehouse monitoring",
        icon: "package"
      },
      {
        title: "Superior Performance",
        description: "FCP <1.8s, LCP <2.5s performance targets",
        icon: "zap"
      }
    ],
    features: [
      "Multi-outlet management system",
      "Real-time inventory tracking",
      "Sales recording & transaction management",
      "Warehouse monitoring",
      "User roles & permissions",
      "Transaction void/cancel system",
      "End of day reports",
      "Discount & promotions system",
      "Low stock alerts",
      "Responsive tablet design (7-8 inch optimized)"
    ],
    impact: {
      performance: "FCP <1.8s, LCP <2.5s performance",
      users: "90% feature parity dengan competitors menggunakan free-tier solutions"
    },
    demo: "https://agdspos.vercel.app",
    image: "/projects/agds-thumb.jpg",
    tags: ["Next.js 16", "tRPC", "PostgreSQL", "Prisma", "Redis"],
    year: "2024",
    status: "development"
  },
  {
    id: "selisih-berat",
    title: "Selisih Berat",
    shortDescription: "Logistics Weight Audit System for J&T Express dengan GPS watermarking",
    fullDescription: "Aplikasi audit dan tracking selisih berat untuk operasional logistik dengan real-time monitoring, barcode scanning, dan GPS watermarking. Streamlined logistics weight verification process dengan gamification untuk meningkatkan user engagement.",
    category: "full-stack",
    techStack: [
      {
        category: "Frontend",
        technologies: ["Next.js 14", "TypeScript 5.9", "Tailwind CSS"]
      },
      {
        category: "Backend & Services",
        technologies: ["Supabase", "Cloudinary"]
      },
      {
        category: "Features",
        technologies: ["Quagga2 (Barcode)", "GPS API", "PWA"]
      }
    ],
    highlights: [
      {
        title: "Barcode Scanner",
        description: "Scan No Resi JNT packages dengan Quagga2",
        icon: "scan"
      },
      {
        title: "GPS Watermark",
        description: "Photo dengan GPS coordinates, date, time, dan location",
        icon: "map-pin"
      },
      {
        title: "Gamification",
        description: "Leaderboard system (Beginner → Diamond levels)",
        icon: "trophy"
      }
    ],
    features: [
      "Barcode scanner untuk No Resi (JNT packages)",
      "Auto GPS capture & reverse geocoding",
      "GPS watermark on photos (Date, Time, Coordinates, Location)",
      "Real-time dashboard dengan statistik",
      "Gamified leaderboard system (Beginner → Diamond levels)",
      "User earnings calculation (500-1500 IDR per entry)",
      "Photo management dengan Cloudinary",
      "Export to Excel/CSV",
      "PWA support dengan offline capability",
      "Role-based access (Admin vs User)"
    ],
    impact: {
      dataVolume: "Production database: 25,000+ entries, 50,000+ photos",
      users: "Real-time operational insights untuk J&T Express"
    },
    demo: "https://selisih-berat.vercel.app",
    image: "/projects/selisih-thumb.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "GPS", "Barcode"],
    year: "2024",
    status: "production"
  }
];
