'use client'

import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function Experience() {
  const [showContent, setShowContent] = useState(false)
  const [currentCommit, setCurrentCommit] = useState(0)

  const commits = [
    {
      hash: "8f3a3",
      branch: "HEAD -> master",
      date: "2023-Present",
      message: "DevOps Engineer @ Sunnyvale",
      details: ["Managed automation of a large bank Hybrid Cloud infrastructure", "Automated SQL Server deployments and management via Ansible", "Automations to deploy applications to Kubernetes/Openshift", "Managed infrastructure on GCP using Terraform"]
    },
    {
      hash: "2c8d1",
      branch: "HEAD~1",
      date: "2022-2023",
      message: "Software Engineer @ Capgemini",
      details: ["Modernized VB.NET apps to C# Microservices", "Implemented various CI/CD pipelines in Azure DevOps", "Orchestrated container deployments on Kubernetes"]
    },
    {
      hash: "1a4f0",
      branch: "origin/legacy",
      date: "2020-2022",
      message: "Full Stack Developer @ SCAI Finance",
      details: ["Developed Real-Time KPI Monitoring Platform", "Worked with React and C# backends", "Integrated SonarQube for continuous code quality"]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showContent && currentCommit < commits.length) {
      const timer = setTimeout(() => setCurrentCommit(prev => prev + 1), 2500)
      return () => clearTimeout(timer)
    }
  }, [showContent, currentCommit, commits.length])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <TypingText text='git log --oneline --graph --author="Davide"' speed={100} onComplete={() => setShowContent(true)} />
          </div>
          {showContent && (
            <div className="ml-2 font-mono leading-relaxed">
              {commits.slice(0, currentCommit + 1).map((commit, index) => (
                <div key={commit.hash} className="mb-6 flex">
                  <div className="mr-4 text-green-600">
                    <div>*</div>
                    {index < commits.length - 1 && <div className="h-full border-l border-green-600 ml-1.5 mt-1 -mb-1 opacity-50"></div>}
                  </div>
                  <div>
                    <div>
                      <span className="text-yellow-500 font-bold">{commit.hash}</span>
                      {commit.branch && <span className="text-cyan-400"> ({commit.branch})</span>} <span className="text-gray-400">[{commit.date}]</span> - <span className="font-bold">{commit.message}</span>
                      <span className="text-green-500 ml-2">&lt;Davide&gt;</span>
                    </div>
                    <div className="mt-2 text-sm text-green-300">
                      {commit.details.map((detail, idx) => (
                        <div key={idx} className="ml-4">
                          <TypingText text={`|  - ${detail}`} speed={20} />
                        </div>
                      ))}
                    </div>
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
