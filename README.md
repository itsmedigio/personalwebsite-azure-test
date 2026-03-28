# Personal Portfolio Website

---

## Introduction

Welcome to my personal portfolio! This website serves as a comprehensive showcase of my skills, projects, and professional journey as a **DevOps Engineer**.

Here, you'll find examples of my work in automation, cloud infrastructure and more, demonstrating how I use various technologies everyday.

---

## Technologies Used for the portfolio

### Frontend

* **Next.js:**
* **React:**
* **shadcn/ui:**
* **Tailwind CSS:**

## Local Development

1. **Run the development server:**

    ```bash
    npm install &&
    npm run dev
    ```

    The site will be accessible in your browser at `http://localhost:3000`.

---

## Deployment

This website is deployed automatically via a **GitHub Actions CI/CD pipeline**.

* Any push or pull request to the `main` (or `master`) branch triggers the workflow.
* The workflow builds the Next.js project as a static site.
* The generated static files are then deployed to the `itsmedigio.github.io` repository, which serves as my GitHub Pages site.
