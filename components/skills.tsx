import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Automation",
      skills: [
        { name: "Ansible / AWX / AAP", level: 95 }, // Combine related tools for clarity
        { name: "Pipelines (CI/CD)", level: 85 }, // Clarify "Pipelines"
        { name: "PowerShell", level: 80 },
        { name: "Python (Scripting & Automation)", level: 90 }, // Emphasize use case
        { name: "Terraform (IaC)", level: 85 } // Add Terraform explicitly given your GCP project
      ],
    },
    {
      title: "Cloud Platforms & Orchestration",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 80 },
        { name: "Azure", level: 80 },
        { name: "Kubernetes / OpenShift", level: 90 }, // Combine and add OpenShift
        { name: "VMware", level: 85 }, // Essential for hybrid cloud
      ],
    },
    {
      title: "Development & Data", // Renamed to better reflect content
      skills: [
        { name: "C# / .NET", level: 85 },
        { name: "React", level: 70 },
        { name: "Angular", level: 75 },
        { name: "TypeScript", level: 80 },
        { name: "SQL Server", level: 85 }, // Crucial given your project
      ],
    },
    {
      title: "Tools & Methodologies", // Broader category for common tools
      skills: [
        { name: "Git / GitHub / Bitbucket", level: 90 },
        { name: "Azure DevOps (Boards, Repos, Pipelines)", level: 85 }, // Be specific about Azure DevOps parts
        { name: "Jira / Confluence", level: 90 },
        { name: "SonarQube / Nexus IQ", level: 75 }, // Add these from your project
        { name: "CyberArk (Credential Management)", level: 70 } // Add this from your project
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
