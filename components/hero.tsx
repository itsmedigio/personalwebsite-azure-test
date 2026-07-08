'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown, ChevronDown, Contact, GitPullRequestCreateArrow, Mail } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { GlitchText } from "./glitch-text"
import { TypingText } from "./typing-text"

export function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [skipAll, setSkipAll] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300)
    const timer2 = setTimeout(() => setShowButtons(true), 1500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const handleSkip = useCallback(() => {
    setSkipAll(true)
    setShowContent(true)
    setShowButtons(true)
  }, [])

  const banner = String.raw`
            _                    _                   
__ __ _____| |__ ___ _ __  ___  | |_ ___   _ __ _  _ 
\ V  V / -_) / _/ _ \ '  \/ -_) |  _/ _ \ | '  \ || |
 \_/\_/\___|_\__\___/_|_|_\___|  \__\___/ |_|_|_\_, |
                                                |__/ 
               _    __     _ _     
 _ __  ___ _ _| |_ / _|___| (_)___ 
| '_ \/ _ \ '_|  _|  _/ _ \ | / _ \
| .__/\___/_|  \__|_| \___/_|_\___/
|_|                                
`

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-background text-green-400 relative" onClick={handleSkip}>
      <div className="text-left max-w-4xl mx-auto font-mono w-full" onClick={e => e.stopPropagation()}>
        <div className="mb-6 hidden md:block text-green-500/60 font-bold whitespace-pre select-none">
          {banner}
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-green-400 mr-2">itsmedigio@portfolio:~$</span>
            <span className="text-2xl">
              <TypingText text="whoami" speed={80} showCursor={!showContent} instant={skipAll} onComplete={() => setShowContent(true)} />
            </span>
          </div>
          {showContent && (
            <div className="ml-4">
              <span className="text-xl">
                <GlitchText text="Davide Di Giovanni" interval={5000} intensity={2} />
              </span>
              <br />
              <span className="text-lg">
                <TypingText text="DevOps Engineer | Automation Enthusiast | Cloud Architect" speed={30} showCursor={false} instant={skipAll} />
              </span>
            </div>
          )}
        </div>

        {showContent && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-green-400 mr-2">itsmedigio@portfolio:~$</span>
              <TypingText text="cat skills.txt" speed={80} showCursor={!showButtons} instant={skipAll} />
            </div>
            <div className="ml-4">
              <TypingText text="• Ansible • Terraform • Kubernetes • AWS/Azure • CI/CD • Python • Bash" speed={25} showCursor={false} instant={skipAll} onComplete={() => setShowButtons(true)} />
            </div>
          </div>
        )}

        {showButtons && (
          <div className="flex flex-wrap gap-4 justify-start items-center mb-12">
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="#projects">view projects</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Link href="#contact">mail contact</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black gap-1">
                  curriculum vitae <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-green-400 text-green-400 font-mono">
                <DropdownMenuItem className="focus:bg-green-400 focus:text-black cursor-pointer">
                  <a href="/resume.pdf" download className="w-full">Full CV</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-green-400 focus:text-black cursor-pointer">
                  <a href="/resume-short.pdf" download className="w-full">One Page CV</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {showButtons && (
          <div className="flex justify-start space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black" asChild>
              <Link href="https://github.com/itsmedigio" target="_blank" rel="noopener noreferrer">
                <GitPullRequestCreateArrow className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black" asChild>
              <Link href="https://linkedin.com/in/itsmedigio" target="_blank" rel="noopener noreferrer">
                <Contact className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:bg-green-400 hover:text-black" asChild>
              <Link href="mailto:davide@davidedigiovanni.it">
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

      {!skipAll && (
        <div className="absolute bottom-4 right-4 text-green-600/50 text-xs font-mono hidden md:block">
          Click anywhere to skip
        </div>
      )}
    </section>
  )
}
