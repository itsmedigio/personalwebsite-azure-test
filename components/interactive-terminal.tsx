'use client'

import { useEffect, useRef, useState } from "react"

interface TerminalLine {
  input?: string
  output?: string | string[]
}

const commands: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami   - About me",
    "  skills   - Technical skills",
    "  projects - My projects",
    "  about    - My story",
    "  contact  - Contact info",
    "  ls       - List page sections",
    "  banner   - Display the banner",
    "  clear    - Clear terminal",
    "  exit     - Return to the website",
    "  help     - Show this message",
  ],
  whoami: "Davide Di Giovanni — DevOps Engineer, Automation Enthusiast, Cloud Architect",
  skills: [
    "OS:          Linux (Debian, RHEL, Arch), Windows Server",
    "DevOps:      Docker, Kubernetes, OpenShift, Ansible, Terraform",
    "Cloud:       AWS, Azure, GCP",
    "Development: Python, Bash, TypeScript, C#, React",
    "Tools:       Git, CI/CD, SonarQube, Nexus IQ, Jira",
  ],
  about: "DevOps engineer with a full-stack background. I automate infrastructure, reduce costs, and make systems reliable at scale.",
  contact: "Email: davide@davidedigiovanni.it  |  GitHub: itsmedigio  |  LinkedIn: itsmedigio",
  projects: [
    "DevOps and Automation in Intesa Sanpaolo",
    "Ansible Automations in Unicredit",
    "Full Stack Developer and CI/CD consultant in BNP Paribas",
    "Many more to come... :)"
  ]
}

interface InteractiveTerminalProps {
  fullScreen?: boolean
  onExit?: () => void
}

export function InteractiveTerminal({ fullScreen = false, onExit }: InteractiveTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { output: fullScreen ? 'Terminal session started. Type "exit" to return to the website or "help" for available commands.' : 'Welcome to the interactive terminal. Type "help" to get started.' },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight)
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim()
    const lower = trimmed.toLowerCase()
    const newLines: TerminalLine[] = [...lines, { input: trimmed }]

    if (lower === "clear") {
      setLines([])
      setHistory(prev => [...prev, trimmed])
      return
    }

    if (lower === "exit") {
      onExit?.()
      return
    }

    if (lower === "ls") {
      newLines.push({ output: ["#home", "#about", "#experience", "#projects", "#skills", "#contact"] })
    } else if (lower === "banner") {
      newLines.push({ output: ["", "  welcome to my portfolio", "", "  (view the banner at the top of the page)"] })
    } else if (commands[lower]) {
      newLines.push({ output: commands[lower] })
    } else if (lower === "") {
      // just a prompt with no command
    } else {
      newLines.push({ output: `bash: ${trimmed}: command not found` })
    }

    setLines(newLines)
    setHistory(prev => [...prev, trimmed])
    setHistoryIdx(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
        setHistoryIdx(newIdx)
        setInput(history[newIdx])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIdx >= 0) {
        const newIdx = historyIdx + 1
        if (newIdx >= history.length) {
          setHistoryIdx(-1)
          setInput("")
        } else {
          setHistoryIdx(newIdx)
          setInput(history[newIdx])
        }
      }
    }
  }

  useEffect(() => {
    if (fullScreen) {
      inputRef.current?.focus()
    }
  }, [fullScreen])

  const titleBar = (
    <div className="bg-green-900/20 px-3 py-1.5 text-green-500 text-xs border-b border-green-400/30 flex items-center gap-1.5 select-none">
      <span className="w-3 h-3 rounded-full bg-red-500/80" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <span className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-2 text-green-600">interactive-terminal</span>
      {fullScreen && (
        <span className="ml-auto text-green-600/60 text-[10px]">
          Type 'exit' to return
        </span>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-[90] bg-black flex flex-col crt"
        onClick={() => inputRef.current?.focus()}
      >
        {titleBar}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 text-base md:text-lg leading-relaxed"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#22c55e #000" }}
        >
          {lines.map((line, idx) => (
            <div key={idx}>
              {line.input && (
                <div className="text-green-400">
                  <span className="text-green-500">$ </span>
                  {line.input}
                </div>
              )}
              {line.output && (
                <div className="text-green-300/90 mb-1 ml-4 whitespace-pre">
                  {Array.isArray(line.output)
                    ? line.output.map((l, i) => <div key={i}>{l}</div>)
                    : line.output}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-green-400/30 px-4 md:px-6 py-3 flex items-center bg-black/50">
          <span className="text-green-500 mr-2 shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400 placeholder-green-700/50 text-base md:text-lg"
            placeholder="Type a command..."
            aria-label="Terminal input"
            autoFocus
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className="border border-green-400/40 rounded-lg overflow-hidden font-mono text-sm max-w-4xl mx-auto my-12 shadow-[0_0_15px_rgba(0,255,0,0.08)]"
      onClick={() => inputRef.current?.focus()}
    >
      {titleBar}
      <div
        ref={containerRef}
        className="p-3 max-h-48 overflow-y-auto bg-black/30"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#22c55e #000" }}
      >
        {lines.map((line, idx) => (
          <div key={idx}>
            {line.input && (
              <div className="text-green-400">
                <span className="text-green-500">$ </span>
                {line.input}
              </div>
            )}
            {line.output && (
              <div className="text-green-300/90 mb-1 ml-4 whitespace-pre">
                {Array.isArray(line.output)
                  ? line.output.map((l, i) => <div key={i}>{l}</div>)
                  : line.output}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-green-400/30 px-3 py-2 flex items-center bg-black/50">
        <span className="text-green-500 mr-2 shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-green-400 placeholder-green-700/50"
          placeholder="Type a command..."
          aria-label="Terminal input"
        />
      </div>
    </div>
  )
}
