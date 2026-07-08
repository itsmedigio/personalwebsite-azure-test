'use client'

import { useState } from "react"
import { About } from "@/components/about"
import { BootSequence } from "@/components/boot-sequence"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Portfolio() {
  const [bootDone, setBootDone] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <>
      {!bootDone && <BootSequence onComplete={() => setBootDone(true)} />}
      {terminalOpen ? (
        <InteractiveTerminal fullScreen onExit={() => setTerminalOpen(false)} />
      ) : (
        <div className="min-h-screen bg-black text-green-400 font-mono crt pb-12">
          <Header onTerminalOpen={() => setTerminalOpen(true)} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <InteractiveTerminal />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
