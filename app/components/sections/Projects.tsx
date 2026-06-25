"use client";

import { useState } from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../ui/Card";
import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";
import { X, ExternalLink, Github, Lock } from "lucide-react";
import { Mdx } from "../mdx";
import Image from "next/image";
import type { Project } from "@/.contentlayer/generated";

export default function Projects() {
  const t = useT();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  const isPrivateRepo = (repo: string | undefined) => {
    if (!repo) return false;
    // Se não tem "/" é um repositório privado
    return !repo.includes("/");
  };

  return (
    <>
      <section
        id="projects"
        className="relative w-full flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black
        py-32 md:py-40"
      >
        <div className="max-w-6xl w-full px-6 md:px-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display dark:text-white mb-4 text-center">
              Projects
            </h2>
            <p className="text-center dark:text-zinc-400 text-base md:text-lg mb-16">
              A collection of projects I've built
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full h-full text-left hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="w-full h-full flex flex-col overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 dark:border-zinc-600 border-zinc-400 group-hover:border-blue-500/50 transition-colors">
                    <div className="pointer-events-none">
                      <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                    </div>

                    <article className="p-6 md:p-8 h-full flex flex-col justify-between flex-1 relative z-10">
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-4">
                          <span className="text-xs dark:text-zinc-400 uppercase tracking-wider">
                            {project.date ? (
                              <time dateTime={new Date(project.date).toISOString()}>
                                {Intl.DateTimeFormat(undefined, {
                                  dateStyle: "short",
                                }).format(new Date(project.date))}
                              </time>
                            ) : (
                              <span>SOON</span>
                            )}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-zinc-500 text-xs mt-4 group-hover:text-zinc-400">
                        Click to view more →
                      </p>
                    </article>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 border border-zinc-700/50 rounded-2xl p-8 md:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 hover:bg-zinc-800 rounded-lg transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 dark:text-zinc-400" />
            </button>

            {/* Header */}
            <div className="mb-8 pt-8 md:pt-0">
              <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
                {selectedProject.title}
              </h2>
              <span className="text-xs dark:text-zinc-400 uppercase tracking-wider block mb-6">
                {selectedProject.date ? (
                  <time dateTime={new Date(selectedProject.date).toISOString()}>
                    {Intl.DateTimeFormat(undefined, {
                      dateStyle: "medium",
                    }).format(new Date(selectedProject.date))}
                  </time>
                ) : (
                  <span>SOON</span>
                )}
              </span>

              <p className="text-lg dark:text-zinc-300 mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg dark:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Project
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-lg dark:text-red-400">
                    <Lock className="w-4 h-4" />
                    No Site
                  </span>
                )}
                {!selectedProject.repository || isPrivateRepo(selectedProject.repository) ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700/20 border border-zinc-600/50 rounded-lg dark:text-zinc-400 cursor-default">
                    <Github className="w-4 h-4" />
                    Private Repo
                  </span>
                ) : (
                  <a
                    href={`https://github.com/${selectedProject.repository}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700/20 hover:bg-zinc-700/30 border border-zinc-600/50 rounded-lg dark:text-zinc-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-zinc-700/50 mb-8" />

            {/* Image */}
            {selectedProject.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none dark:prose-pre:bg-zinc-950 dark:prose-pre:border dark:prose-pre:border-zinc-800">
              <Mdx code={selectedProject.body.code} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
