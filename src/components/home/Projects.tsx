"use client";

import { CodeBlock } from "../CodeBlock";
import { TerminalWindow } from "../TerminalWindow";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio OS",
      description: "VS Code-themed personal portfolio",
      tags: ["Next.js", "Tailwind", "Supabase"],
      github: "https://github.com/hoanggiang2912/oca-portfolio",
      demo: "https://oca-portfolio.vercel.app/",
      status: "production",
    },
    {
      name: "Flood decision support system",
      description: "Vinh Long City flood management tool",
      tags: ["Next.js", "Node.js", "SQLite", "TailwindCSS"],
      github: "",
      demo: "https://vinhlong.ewater.net.vn/",
      status: "wip",
    },
    {
      name: "Joie Palace",
      description: "Wedding hall management system for Joie Palace",
      tags: ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS"],
      github: "https://github.com/HongSon04/JoiePalace",
      demo: "",
      status: "archived",
    },
  ];

  return (
    <div className="h-full overflow-auto p-6 font-mono text-drac-base">
      {/* Content area */}
      <h1 className="h1"># 🚀 Some of My Projects</h1>
      <div className="py-6">
        <TerminalWindow
          command="npm run projects --filter=featured"
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </TerminalWindow>

        {/* Project status legend */}
        <CodeBlock language="typescript" showLineNumbers={false}>
          {`// Status Legend
type ProjectStatus = 
  | "production"   // Live and maintained
  | "wip"          // Actively developing
  | "archived"     // No longer updated
  | "experiment";  // Proof of concept`}
        </CodeBlock>
      </div>
    </div>
  );
}
