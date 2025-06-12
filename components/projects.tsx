import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Old banking applications upgrade",
      description:
        "Successfully modernized legacy VB.NET banking applications by migrating them to C# Microservices. This upgrade enhanced key functionalities like user authentication, data entry, and message queuing, significantly improving performance and scalability.",
      image: "/bnpp.png?height=300&width=400",
      technologies: ["C#", "Angular", "Azure DevOps", "Kubernetes", "IBM Cloud"],
    },
    {
      title: "Real-time KPI Monitoring Platform",
      description:
        "Engineered and deployed a comprehensive KPI monitoring application. This full-stack solution leverages React for the front-end and C# Microservices for the backend, providing real-time insights into key performance indicators. My work significantly focused on establishing robust CI/CD pipelines, managing infrastructure as code, and integrating quality gates within Azure DevOps.",
      image: "/kpi-monitor.png?height=300&width=400",
      technologies: ["React", "C#", "Azure DevOps", "ARM Templates (IaC)", "SonarQube", "Nexus IQ"],
    },
    {
      title: "Hybrid Cloud Engineering & Support",
      description:
        "Provided first-level operational support and management for Intesa Sanpaolo's critical hybrid cloud infrastructure. My responsibilities included managing Openshift deployments, administering and deploying VMs on VMWare, and provisioning resources on Google Cloud Platform using Terraform.",
      image: "/isp.png", // <--- Suggest a relevant image name (e.g., a cloud icon with multiple platforms)
      technologies: ["Openshift", "VMWare", "Google Cloud Platform (GCP)", "Terraform", "Linux", "ITIL (Implied Operations)"],
    },
    {
      title: "SQL Server Automations and Downgrade",
      description:
        "Engineered and led an enterprise-wide automation campaign to significantly reduce SQL Server Enterprise license costs across non-production environments. I developed an automation, orchestrated via AWX, which integrated PowerShell scripting to automate the downgrade of SQL Server instances. This project directly resulted in substantial cost savings by eliminating unnecessary licensing, while deepening my expertise in SQL Server management.",
      image: "/sqls.png", // <--- Suggest a relevant image name (e.g., a chart showing savings, or SQL Server logo with automation)
      technologies: ["Ansible", "AWX", "SQL Server (AlwaysOn/FC)", "PowerShell", "CyberArk"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects that I was involed into
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
