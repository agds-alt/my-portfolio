"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/domain/entities/Project";
import { TechBadge } from "./TechBadge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image/Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'production'
              ? 'bg-green-500 text-white'
              : project.status === 'development'
              ? 'bg-yellow-500 text-white'
              : 'bg-zinc-500 text-white'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.category} • {project.year}</p>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-4">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
              <div>
                <p className="text-sm font-medium">{highlight.title}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <TechBadge key={idx} tech={tag} />
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-zinc-500 dark:text-zinc-400">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
