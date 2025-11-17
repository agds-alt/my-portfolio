import { OngoingProject } from "../domain/entities/OngoingProject";

export const ongoingProjects: OngoingProject[] = [
  {
    id: "agds-pos-v2",
    name: "AGDS POS v2.0",
    description: "Major update with enhanced multi-store capabilities and AI-powered inventory predictions",
    status: "In Progress",
    startDate: "2024-11",
    estimatedCompletion: "2025-02",
    techStack: ["Next.js 16", "tRPC", "PostgreSQL", "AI/ML", "Redis"],
    progress: 45,
    keyGoals: [
      "AI-powered inventory forecasting",
      "Enhanced multi-store sync",
      "Advanced analytics dashboard",
      "Mobile app integration"
    ]
  },
  {
    id: "personal-saas",
    name: "SaaS Boilerplate",
    description: "Production-ready SaaS starter kit with auth, billing, and multi-tenancy",
    status: "Planning",
    startDate: "2025-01",
    estimatedCompletion: "2025-04",
    techStack: ["Next.js 15", "Supabase", "Stripe", "Tailwind", "shadcn/ui"],
    progress: 10,
    keyGoals: [
      "Complete authentication system",
      "Stripe subscription integration",
      "Multi-tenant architecture",
      "Admin dashboard"
    ]
  },
  {
    id: "monitoring-platform",
    name: "IoT Monitoring Platform",
    description: "Real-time IoT device monitoring and alerting system for industrial use",
    status: "Planning",
    startDate: "2025-02",
    estimatedCompletion: "2025-06",
    techStack: ["Next.js", "WebSocket", "InfluxDB", "MQTT", "D3.js"],
    progress: 5,
    keyGoals: [
      "Real-time device telemetry",
      "Alert management system",
      "Historical data visualization",
      "Custom dashboard builder"
    ]
  }
];
