export const translations = {
  en: {
    // Dashboard
    welcome: "Welcome! 👋",
    tagline: "Building scalable web applications",
    bio: "Full-stack developer with a passion for creating scalable and performant web applications. Experienced in building production-ready solutions from concept to deployment.",

    // Stats
    experience: "Experience",
    projects: "Projects",
    technologies: "Technologies",

    // Sections
    completedProjects: "Completed Projects",
    ongoingProjects: "Ongoing Projects",
    projectsCount: "projects",
    inProgress: "in progress",

    // Status
    production: "Production",
    development: "Development",
    planning: "Planning",
    progress: "Progress",

    // Nav
    home: "Home",
    about: "About",
    contact: "Contact",
  },
  id: {
    // Dashboard
    welcome: "Selamat Datang! 👋",
    tagline: "Membangun aplikasi web yang scalable",
    bio: "Full-stack developer dengan passion untuk membuat aplikasi web yang scalable dan performant. Berpengalaman dalam membangun solusi production-ready dari konsep hingga deployment.",

    // Stats
    experience: "Pengalaman",
    projects: "Proyek",
    technologies: "Teknologi",

    // Sections
    completedProjects: "Proyek Selesai",
    ongoingProjects: "Proyek Berjalan",
    projectsCount: "proyek",
    inProgress: "sedang berjalan",

    // Status
    production: "Produksi",
    development: "Pengembangan",
    planning: "Perencanaan",
    progress: "Progres",

    // Nav
    home: "Beranda",
    about: "Tentang",
    contact: "Kontak",
  }
};

export type TranslationKey = keyof typeof translations.en;
