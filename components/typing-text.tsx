'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
    text: string
    speed?: number
    delay?: number
    showCursor?: boolean
    onComplete?: () => void
}

export function TypingText({ text, speed = 50, delay = 0, showCursor = false, onComplete }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (delay > 0 && currentIndex === 0) {
            const delayTimer = setTimeout(() => {
                const timer = setTimeout(typeCharacter, speed)
                return () => clearTimeout(timer)
            }, delay)
            return () => clearTimeout(delayTimer)
        }

        const timer = setTimeout(typeCharacter, speed)
        return () => clearTimeout(timer)

        function typeCharacter() {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            } else {
                setIsTyping(false)
                onComplete?.()
            }
        }
    }, [currentIndex, text, speed, delay, onComplete])

    return (
        <span>
            {displayedText}
            {showCursor && (
                <span className={`inline-block w-2 bg-green-400 h-4 ml-1 align-middle ${!isTyping ? 'animate-pulse' : ''}`}></span>
            )}
        </span>
    )
}