'use client'

import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function About() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <span className="text-2xl"><TypingText text=" cat about.md" speed={100} onComplete={() => setShowContent(true)} /></span>
          </div>
          {showContent && (
            <div className="ml-4">
              <span className="text-xl"><TypingText text="# About Me" speed={50} /></span>
              <br />
              <TypingText text="Ever since I was a kid, I liked messing around with computers—breaking things, fixing them, and figuring out how they worked." speed={30} />
              <br />
              <TypingText text="Today I am a DevOps Engineer, mostly focused on automating infrastructure and making systems behave the way they’re supposed to." speed={30} />
              <br />
              <TypingText text="My daily routine involves working with tools such as Ansible, Terraform, Openshift, Linux and many many more" speed={30} />
              <br />
              <br />
              <span className="text-xl"><TypingText text="# My Story" speed={50} /></span>
              <br />
              <TypingText text="After earning my diploma in IT, I attended ITS ICT Piemonte, where I specialized in Cloud Computing, Big Data, and IoT." speed={30} />
              <br />
              <TypingText text="I kicked off my career as a Full Stack Developer. But I quickly realized" speed={30} />
              <br />
              <TypingText text="I preferred working with infrastructure and automation to solve tough problems, which pulled me towards DevOps." speed={30} />
              <br />
              <TypingText text="My coding background has nevertheless been incredibly useful for various projects" speed={30} />
              <br />
              <br />
              <TypingText text="Skills: Ansible Automation, VMWare, Linux, Kubernetes" speed={30} />
            </div>
          )}
        </div>

        {showContent && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-green-400 p-6 text-center">
              <div className="text-2xl mb-4">{'</>'}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Clean Code</h3>
              <p className="text-green-200">
                Wrote maintainable, scalable, and efficient code
              </p>
            </div>
            <div className="border border-green-400 p-6 text-center">
              <div className="text-2xl mb-4">$</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Optimize Costs</h3>
              <p className="text-green-200">
                Delivered strategies that resulted in cost savings and resource optimization.
              </p>
            </div>
            <div className="border border-green-400 p-6 text-center">
              <div className="text-2xl mb-4">§</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Collaboration</h3>
              <p className="text-green-200">
                Used tools such as Jira/Confluence to facilitate communication across teams
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
