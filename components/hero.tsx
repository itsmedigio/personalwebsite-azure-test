import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="/propic.png?height=200&width=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Davide Di Giovanni</span>
          <br />
          Welcome to my Portfolio!
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          DevOps Engineer<br></br>
          Automation Lover<br></br>
          Cloud Enthusiast<br></br>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button size="lg" asChild>
            <a href="https://giugno25-digiovannidavide.tiiny.site/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
              </svg> View Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/itsmedigio" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/itsmedigio/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:davidedigiovanni999@gmail.com">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Scroll down for more 🙃<br></br>
        </p>
      </div>
    </section>
  )
}