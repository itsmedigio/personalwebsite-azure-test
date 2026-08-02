'use client'

import { useEffect, useState } from "react"

export function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }) + " " + now.toLocaleDateString())
    }
    updateTime()
    const intval = setInterval(updateTime, 1000)
    return () => clearInterval(intval)
  }, [])

  return (
    <footer className="bg-green-600 text-black font-mono text-sm py-1 px-2 fixed bottom-0 w-full z-50 flex flex-col md:flex-row justify-between items-center shadow-[0_-2px_10px_rgba(0,255,0,0.2)]">
      <div className="flex items-center space-x-4">
        <span className="bg-black text-green-500 px-2 font-bold">[0] portfolio</span>
        <span className="hidden md:inline">0:bash*</span>
        <span className="hidden md:inline">1:node-server</span>
        <span className="hidden md:inline">2:vim</span>
      </div>

      <div className="flex items-center space-x-4 text-xs md:text-sm">
        <span className="hidden lg:inline">© 2026 davidedigiovanni.it</span>
        <span className="hidden md:inline">UPTIME: 42d 13h</span>
        <span className="hidden lg:inline">MEM: [||||||    ] 60%</span>
        <span>{time}</span>
      </div>
    </footer>
  )
}
