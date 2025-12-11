"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ongoingProjects } from "@/lib/data/ongoingProjects";
import { personalInfo } from "@/lib/data/personalInfo";
import { Briefcase, Clock, Code, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function DashboardPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white"
      >
        <h1 className="text-4xl font-bold mb-2">{t.welcome}</h1>
        <p className="text-xl opacity-90 mb-4">{t.tagline}</p>
        <p className="opacity-80">{t.bio}</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Briefcase, label: t.experience, value: personalInfo.stats.experience },
          { icon: Code, label: t.projects, value: personalInfo.stats.projectsCompleted },
          { icon: TrendingUp, label: t.technologies, value: personalInfo.stats.technologiesMastered }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800"
          >
            <stat.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Completed Projects Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{t.completedProjects}</h2>
          <span className="text-sm text-zinc-500">{projects.length} {t.projectsCount}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Ongoing Projects Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Clock className="w-6 h-6" />
            {t.ongoingProjects}
          </h2>
          <span className="text-sm text-zinc-500">{ongoingProjects.length} {t.inProgress}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <Link
              key={project.id}
              href={`/ongoing/${project.id}`}
              className="group bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'In Progress'
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                {project.description}
              </p>
              {project.progress !== undefined && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-500">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5">
                    <div
                      className="bg-emerald-600 h-1.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
