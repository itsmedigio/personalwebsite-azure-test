'use client'

import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function Projects() {
  const [showContent, setShowContent] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Old banking applications upgrade",
      description:
        "Successfully modernized legacy VB.NET banking applications by migrating them to C# Microservices. This upgrade enhanced key functionalities like user authentication, data entry, and message queuing, significantly improving performance and scalability.",
      technologies: ["C#", "Angular", "Azure DevOps", "Kubernetes", "IBM Cloud"],
    },
    {
      title: "Real-time KPI Monitoring Platform",
      description:
        "Engineered and deployed a comprehensive KPI monitoring application. This full-stack solution leverages React for the front-end and C# Microservices for the backend, providing real-time insights into key performance indicators.",
      technologies: ["React", "C#", "Azure DevOps", "ARM Templates (IaC)", "SonarQube", "Nexus IQ"],
    },
    {
      title: "Hybrid Cloud Engineering & Support",
      description:
        "Provided first-level operational support and management for Intesa Sanpaolo's critical hybrid cloud infrastructure. Responsibilities included managing Openshift deployments, administering VMs on VMWare, and provisioning resources on GCP using Terraform.",
      technologies: ["Openshift", "VMWare", "Google Cloud Platform (GCP)", "Terraform", "Linux"],
    },
    {
      title: "SQL Server Automations and Downgrade",
      description:
        "Engineered enterprise-wide automation to reduce SQL Server Enterprise license costs. Developed automation via AWX integrating PowerShell scripting to automate SQL Server instance downgrades, resulting in substantial cost savings.",
      technologies: ["Ansible", "AWX", "SQL Server", "PowerShell", "CyberArk"],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showContent && currentProject < projects.length) {
      const timer = setTimeout(() => setCurrentProject(prev => prev + 1), 3000)
      return () => clearTimeout(timer)
    }
  }, [showContent, currentProject, projects.length])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <TypingText text="ls -la projects/" speed={100} onComplete={() => setShowContent(true)} />
          </div>
          {showContent && (
            <div className="ml-4">
              <div className="mb-4">total {projects.length}</div>
              {projects.slice(0, currentProject + 1).map((project, index) => (
                <div key={index} className="mb-6">
                  <div className="text-green-300">drwxr-xr-x 2 user user 4096 {new Date().toISOString().split('T')[0]} project{index + 1}</div>
                  <div className="ml-4 mt-2">
                    <TypingText text={`Name: ${project.title}`} speed={50} />
                    <br />
                    <TypingText text={`Description: ${project.description}`} speed={30} />
                    <br />
                    <TypingText text={`Technologies: ${project.technologies.join(', ')}`} speed={30} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
