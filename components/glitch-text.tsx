'use client'

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  interval?: number
  intensity?: number
}

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function GlitchText({ text, className = "", interval = 4000, intensity = 3 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsGlitching(true)
      const arr = text.split("")
      const positions = new Set<number>()
      while (positions.size < Math.min(intensity, arr.length)) {
        positions.add(Math.floor(Math.random() * arr.length))
      }
      for (const pos of positions) {
        if (arr[pos] !== " ") {
          arr[pos] = chars[Math.floor(Math.random() * chars.length)]
        }
      }
      setDisplayText(arr.join(""))
      setTimeout(() => {
        setDisplayText(text)
        setIsGlitching(false)
      }, 120)
    }, interval)
    return () => clearInterval(timer)
  }, [text, interval, intensity])

  return (
    <span className={`${className} ${isGlitching ? "text-yellow-300" : ""} transition-colors duration-75`}>
      {displayText}
    </span>
  )
}
