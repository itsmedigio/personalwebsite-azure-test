'use client'

import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function Skills() {
  const [showContent, setShowContent] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(0)

  const skillCategories = [
    {
      title: "DevOps & Automation",
      skills: [
        "Ansible / AWX / AAP",
        "Pipelines (CI/CD)",
        "PowerShell",
        "Python (Scripting & Automation)",
        "Terraform (IaC)"
      ],
    },
    {
      title: "Cloud Platforms & Orchestration",
      skills: [
        "Google Cloud Platform (GCP)",
        "Azure",
        "Kubernetes / OpenShift",
        "VMware",
      ],
    },
    {
      title: "Development & Data",
      skills: [
        "C# / .NET",
        "React",
        "Angular",
        "TypeScript",
        "SQL Server",
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        "Git / GitHub / Bitbucket",
        "Azure DevOps",
        "Jira / Confluence",
        "SonarQube / Nexus IQ",
        "CyberArk"
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showContent && currentCategory < skillCategories.length) {
      const timer = setTimeout(() => setCurrentCategory(prev => prev + 1), 2000)
      return () => clearTimeout(timer)
    }
  }, [showContent, currentCategory, skillCategories.length])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <TypingText text="cat skills.yml" speed={100} onComplete={() => setShowContent(true)} />
          </div>
          {showContent && (
            <div className="ml-4">
              {skillCategories.slice(0, currentCategory + 1).map((category, index) => (
                <div key={index} className="mb-6">
                  <TypingText text={`[${category.title}]`} speed={50} />
                  <br />
                  {category.skills.map((skill) => (
                    <div key={skill} className="ml-4">
                      <TypingText text={`- ${skill}`} speed={30} />
                      <br />
                    </div>
                  ))}
                  <br />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
