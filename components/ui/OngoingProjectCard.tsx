"use client";

import { motion } from "framer-motion";
import { OngoingProject } from "@/lib/domain/entities/OngoingProject";
import { TechBadge } from "./TechBadge";
import { Calendar, TrendingUp } from "lucide-react";

interface OngoingProjectCardProps {
  project: OngoingProject;
  index: number;
}

export function OngoingProjectCard({ project, index }: OngoingProjectCardProps) {
  const statusColors = {
    'Planning': 'bg-blue-500',
    'In Progress': 'bg-green-500',
    'On Hold': 'bg-yellow-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{project.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <TrendingUp className="w-6 h-6 text-zinc-400" />
      </div>

      {/* Description */}
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        {project.description}
      </p>

      {/* Timeline */}
      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <Calendar className="w-4 h-4" />
        <span>{project.startDate} → {project.estimatedCompletion}</span>
      </div>

      {/* Progress Bar */}
      {project.progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-600 dark:text-zinc-400">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Key Goals */}
      {project.keyGoals && project.keyGoals.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Key Goals:</p>
          <ul className="space-y-1">
            {project.keyGoals.slice(0, 3).map((goal, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech, idx) => (
          <TechBadge key={idx} tech={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-zinc-500 dark:text-zinc-400">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
}
