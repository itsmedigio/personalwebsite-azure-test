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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <TypingText text="cat about.md" speed={100} onComplete={() => setShowContent(true)} />
          </div>
          {showContent && (
            <div className="ml-4">
              <TypingText text="# About Me" speed={50} />
              <br />
              <TypingText text="Ever since I was a kid, computers have fascinated me. Now, as a DevOps Engineer," speed={30} />
              <br />
              <TypingText text="I get to turn that passion into practical solutions, designing and implementing" speed={30} />
              <br />
              <TypingText text="systems that bring order and automation to even the most complex infrastructure." speed={30} />
              <br />
              <br />
              <TypingText text="## My Story" speed={50} />
              <br />
              <TypingText text="After IT school and a two-year dive into Cloud, Big Data, and IoT," speed={30} />
              <br />
              <TypingText text="I kicked off my career as a Full Stack Developer. But I quickly realized" speed={30} />
              <br />
              <TypingText text="my true calling was in solving tough problems, which pulled me towards DevOps." speed={30} />
              <br />
              <TypingText text="My coding background has been incredibly useful for personal projects" speed={30} />
              <br />
              <TypingText text="and all the Python development I do now." speed={30} />
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
                Writing maintainable, scalable, and efficient code that stands the test of time.
              </p>
            </div>
            <div className="border border-green-400 p-6 text-center">
              <div className="text-2xl mb-4">$</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Optimize Costs</h3>
              <p className="text-green-200">
                Designing efficient DevOps strategies that deliver cost savings and resource optimization.
              </p>
            </div>
            <div className="border border-green-400 p-6 text-center">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Collaboration</h3>
              <p className="text-green-200">
                Bringing together dev and ops teams with robust tools and streamlined workflows.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
