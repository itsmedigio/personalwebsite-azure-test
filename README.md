# Personal Portfolio Website

---

## Introduction

Welcome to my personal portfolio! This website serves as a comprehensive showcase of my skills, projects, and professional journey as a dedicated **DevOps Engineer**. With a strong passion for streamlining processes and building robust, automated solutions, I thrive on bringing order and efficiency to complex infrastructure and development workflows.

Here, you'll find examples of my work in automation, cloud infrastructure, container orchestration, and more, demonstrating how I leverage various technologies to drive business value and enhance system reliability.

---

## Features

* **About Me:** Learn about my background, my transition into DevOps, and my passion for problem-solving.
* **Skills:** A detailed overview of my technical proficiencies, categorized by core DevOps tools, cloud platforms, development languages, and specialized technologies.
* **Projects:** In-depth descriptions of key projects, illustrating the challenges faced, the solutions implemented using various DevOps tools, and the tangible impact achieved (e.g., cost savings, improved efficiency, enhanced reliability).
* **Contact Form:** A straightforward way to get in touch with me for opportunities or collaborations.
* **Responsive Design:** Optimized for seamless viewing across all devices.

---

## Technologies Used

This portfolio itself, and the projects it showcases, leverage a wide range of technologies:

### Frontend
* **Next.js:** React framework for building fast, scalable web applications.
* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Superset of JavaScript that adds static typing.
* **shadcn/ui:** Reusable UI components built with Radix UI and Tailwind CSS.
* **Tailwind CSS:** Utility-first CSS framework for rapid styling.

### DevOps & Automation
* **Ansible / AWX / AAP:** For configuration management, application deployment, and task automation.
* **Terraform:** For Infrastructure as Code (IaC) on cloud platforms.
* **Azure DevOps:** For CI/CD pipelines, Git version control, and project management.
* **PowerShell:** For Windows automation and scripting.
* **Python:** For scripting, automation, and general development.
* **Git / GitHub / Bitbucket:** For version control and collaborative development.
* **CI/CD Pipelines:** Implementation of automated build, test, and deploy processes.

### Cloud Platforms & Virtualization
* **Google Cloud Platform (GCP):** Experience with deploying and managing resources.
* **Azure:** Experience with cloud services and infrastructure.
* **Kubernetes / OpenShift:** Container orchestration and management.
* **VMware:** Virtualization management and VM deployment.

### Databases & Related Tools
* **SQL Server (incl. AlwaysOn/Failover Clusters):** Database administration, automation, and cost optimization.
* **SonarQube / Nexus IQ:** For static code analysis and software composition analysis.
* **CyberArk:** For secure credential management and privileged access.

### Other
* **Formspree:** For handling contact form submissions.

---

## Local Development

To get a copy of this project up and running on your local machine for development and testing purposes:

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/en/) (LTS recommended) and [npm](https://www.npmjs.com/) (which comes with Node.js) or [Yarn](https://yarnpkg.com/) installed.

2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/itsmedigio/personalwebsite-azure-test.git](https://github.com/itsmedigio/personalwebsite-azure-test.git)
    cd personalwebsite-azure-test
    ```
    *(Note: Replace `personalwebsite-azure-test` with the actual name of this repository if it differs.)*

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    The site will be accessible in your browser at `http://localhost:3000`.

---

## Deployment

This website is deployed automatically via a **GitHub Actions CI/CD pipeline**.

* Any push or pull request to the `main` (or `master`) branch triggers the workflow.
* The workflow builds the Next.js project as a static site.
* The generated static files are then deployed to the `itsmedigio.github.io` repository, which serves as my GitHub Pages site.

---

## Connect

I'm always open to discussing new opportunities, interesting projects, or just chatting about DevOps! Feel free to reach out:

* **Email:** davidedigiovanni999@gmail.com
* **LinkedIn:** [Your LinkedIn Profile URL Here]
* **GitHub:** [Your GitHub Profile URL Here]

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
