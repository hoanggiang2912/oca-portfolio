"use client";
import { useState } from "react";

export function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    status: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);

  const statusColor = {
    production: "bg-drac-green",
    wip: "bg-drac-yellow",
    archived: "bg-drac-current",
    experiment: "bg-drac-purple",
  }[project.status];

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-300 ${isHovered ? "border-drac-pink" : "border-drac-current"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-drac-pink">{project.name}</h3>
          <span
            className={`w-3 h-3 rounded-full animate-pulse ${statusColor}`}
          ></span>
        </div>

        <p className="my-2 text-drac-base">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="pr-2 py-1 text-xs rounded bg-drac-current/20 text-drac-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`flex border-t border-drac-current bg-drac-black/20 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <a
          href={project.github}
          className="flex-1 py-2 text-center hover:bg-drac-current/10"
        >
          <span
            className={`text-drac-purple ${project.github ? "" : "cursor-not-allowed opacity-50 hover:none"}`}
          >
            View Code
          </span>
        </a>
        <a
          href={project.demo}
          className="flex-1 py-2 text-center hover:bg-drac-current/10"
        >
          <span
            className={`text-drac-green ${project.demo ? "" : "cursor-not-allowed opacity-50 hover:none"}`}
          >
            Live Demo
          </span>
        </a>
      </div>
    </div>
  );
}
