'use client'

import { useEffect, useState } from "react"

interface BootMessage {
  type: "ok" | "info" | "warn"
  message: string
}

const bootMessages: BootMessage[] = [
  { type: "info", message: "Powering up subsystem...                                      " },
  { type: "ok", message: "Initialized low-level hardware interfaces                       " },
  { type: "ok", message: "Started Network Manager                                         " },
  { type: "ok", message: "Reached target Network                                          " },
  { type: "info", message: "Starting Portfolio Service...                                 " },
  { type: "ok", message: "Started Portfolio Service (PID 1337)                            " },
  { type: "info", message: "Starting HTTPS listener on port 443...                        " },
  { type: "ok", message: "Started HTTPS listener (nginx)                                  " },
  { type: "info", message: "Loading: assets, components, modules...                       " },
  { type: "ok", message: "Loaded all subsystems successfully                              " },
  { type: "ok", message: "Reached target davidedigiovanni.it                              " },
  { type: "info", message: "╔══════════════════════════════════════════════════════════╗  " },
  { type: "info", message: "║         welcome to davidedigiovanni.it                   ║  " },
  { type: "info", message: "╚══════════════════════════════════════════════════════════╝  " },
]

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState<number[]>([])
  const [fading, setFading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < bootMessages.length) {
        setVisible(prev => [...prev, i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setFading(true)
          setTimeout(() => {
            setDone(true)
            onComplete()
          }, 600)
        }, 1000)
      }
    }, 120)
    return () => clearInterval(interval)
  }, [onComplete])

  const handleSkip = () => {
    if (!done) {
      setVisible(bootMessages.map((_, i) => i))
      setFading(true)
      setTimeout(() => {
        setDone(true)
        onComplete()
      }, 300)
    }
  }

  if (done) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center ${fading ? "opacity-0 transition-opacity duration-600" : ""}`}
      onClick={handleSkip}
    >
      <div className="font-mono text-sm max-w-2xl w-full px-4">
        <div className="mb-4 text-green-500 font-bold text-lg">
          System initialization sequence
        </div>
        {bootMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start mb-0.5 transition-opacity duration-150 ${visible.includes(idx) ? "opacity-100" : "opacity-0"}`}
          >
            <span
              className={`mr-2 shrink-0 ${
                msg.type === "ok"
                  ? "text-green-400"
                  : msg.type === "warn"
                    ? "text-yellow-400"
                    : "text-cyan-400"
              }`}
            >
              [{msg.type === "ok" ? "  OK  " : msg.type === "warn" ? " WARN " : " INFO "}]
            </span>
            <span className="text-green-300">{msg.message}</span>
          </div>
        ))}
        {visible.length === bootMessages.length && !fading && (
          <div className="mt-4 text-green-500 animate-pulse text-xl">_</div>
        )}
        <div className="mt-8 text-green-600 text-xs">Click anywhere to skip</div>
      </div>
    </div>
  )
}
