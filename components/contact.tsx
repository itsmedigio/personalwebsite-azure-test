'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from '@formspree/react'
import { useEffect, useState } from "react"
import { TypingText } from "./typing-text"

export function Contact() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  function ContactForm() {
    const [state, handleSubmit] = useForm("xvgrabqj")

    if (state.succeeded) {
      return (
        <div className="text-center py-8 text-green-400">
          <TypingText text="Message sent successfully! I'll get back to you soon." speed={50} />
        </div>
      )
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4 font-mono">
        <div>
          <Label htmlFor="email" className="text-green-300">Your email to be contacted at: </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            className="bg-black border-green-400 text-green-400 font-mono"
            placeholder="your.email@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-green-300">Message: </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="bg-black border-green-400 text-green-400 font-mono"
            placeholder="Type your message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <Button type="submit" disabled={state.submitting} className="w-full bg-green-400 text-black hover:bg-green-300 font-mono">
          {state.submitting ? "Sending..." : "sendmail"}
        </Button>

        <ValidationError
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </form>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl font-mono">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-green-400">$ </span>
            <TypingText text="mail -s 'Hello' davide@davidedigiovanni.it" speed={100} onComplete={() => setShowContent(true)} />
          </div>
          {showContent && (
            <div className="ml-4">
              <TypingText text="Subject: New Project Opportunity" speed={50} />
              <br />
              <TypingText text="From: you@domain.com" speed={30} />
              <br />
              <TypingText text="To: davide@davidedigiovanni.it" speed={30} />
              <br />
              <br />
              <TypingText text="I'm always open to discussing new opportunities, interesting projects, or just having a chat. Use the form below to get in touch with me" speed={30} />
              <br />
              <br />
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}