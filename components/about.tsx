import { Card, CardContent } from "@/components/ui/card"
import { Code, DollarSign, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ever since I was a kid, computers have fascinated me. Now, as a DevOps Engineer,
            I get to turn that passion into practical solutions,
            designing and implementing systems that bring order and automation to even the most complex
            infrastructure and tasks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="/about.png?height=400&width=400" alt="About me" className="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground mb-4">
              After IT school and a two-year dive into Cloud, Big Data, and IoT,
              I kicked off my career as a Full Stack Developer.
              But I quickly realized my true calling was in solving tough problems,
              which pulled me towards DevOps. My coding background has been incredibly useful, though
              as it's still essential for personal projects and all the Python development I do now


            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ansible Automation</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">VMWare</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Linux</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Kubernetes</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code that stands the test of time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimize costs</h3>
              <p className="text-muted-foreground">
                Designing and implementing efficient DevOps strategies that deliver tangible cost savings and resource optimization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Bringing together development and operations teams by providing robust tools and streamlined workflows for enhanced productivity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
