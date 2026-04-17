'use client'

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500)
    const timer2 = setTimeout(() => setShowButtons(true), 2000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-background text-green-400">
      <div className="text-left max-w-4xl mx-auto font-mono w-full">
        <div className="mb-8 hidden md:block text-green-500 font-bold whitespace-pre">
          {`██████╗  █████╗ ██╗   ██╗██╗██████╗ ███████╗
██╔══██╗██╔══██╗██║   ██║██║██╔══██╗██╔════╝
██║  ██║███████║██║   ██║██║██║  ██║█████╗  
██║  ██║██╔══██║╚██╗ ██╔╝██║██║  ██║██╔══╝  
██████╔╝██║  ██║ ╚████╔╝ ██║██████╔╝███████╗
╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═════╝ ╚══════╝`}
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-green-400 mr-2">itsmedigio@portfolio:~$</span>
            <span className="text-2xl"><TypingText text="whoami" speed={100} showCursor={!showContent} onComplete={() => setShowContent(true)} /></span>
          </div>
          {showContent && (
            <div className="ml-4">
              <span className="text-xl"><TypingText text="Davide Di Giovanni" speed={50} showCursor={false} /></span>
              <br />
              <span className="text-lg"><TypingText text="DevOps Engineer | Automation Enthusiast | Cloud Architect" speed={30} showCursor={false} /></span>
            </div>
          )}
        </div>

        {showContent && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-green-400 mr-2">itsmedigio@portfolio:~$</span>
              <TypingText text="cat skills.txt" speed={100} showCursor={!showButtons} />
            </div>
            <div className="ml-4">
              <TypingText text="• Ansible • Terraform • Kubernetes • AWS/Azure • CI/CD • Python • Bash" speed={30} showCursor={false} />
            </div>
          </div>
        )}

        {showButtons && (
          <div className="flex flex-wrap gap-4 justify-start mb-12">
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="#projects">ls projects/</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="#contact">mail contact</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <a href="https://giugno25-digiovannidavide.tiiny.site/" target="_blank" rel="noopener noreferrer">
                wget resume.pdf
              </a>
            </Button>
          </div>
        )}

        {showButtons && (
          <div className="flex justify-start space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="https://github.com/itsmedigio" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="https://linkedin.com/in/itsmedigio" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="mailto:davidedigiovanni25@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        )}

        <div className="text-center">
          <ArrowDown className="h-8 w-8 text-green-400 animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  )
}