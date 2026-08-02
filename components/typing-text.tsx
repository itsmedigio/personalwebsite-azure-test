'use client'

import { useEffect, useState } from 'react'

interface TypingTextProps {
    text: string
    speed?: number
    delay?: number
    showCursor?: boolean
    onComplete?: () => void
    instant?: boolean
    onSkip?: () => void
}

export function TypingText({ text, speed = 50, delay = 0, showCursor = false, onComplete, instant = false, onSkip }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (instant) {
            setDisplayedText(text)
            setCurrentIndex(text.length)
            setIsTyping(false)
            onComplete?.()
            return
        }

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
    }, [currentIndex, text, speed, delay, onComplete, instant])

    const handleClick = () => {
        if (isTyping) {
            setDisplayedText(text)
            setCurrentIndex(text.length)
            setIsTyping(false)
            onComplete?.()
            onSkip?.()
        }
    }

    return (
        <span onClick={handleClick} className={isTyping ? 'cursor-pointer' : ''}>
            {displayedText}
            {showCursor && (
                <span className={`inline-block w-2 bg-green-400 h-4 ml-1 align-middle ${!isTyping ? 'animate-pulse' : ''}`}></span>
            )}
        </span>
    )
}