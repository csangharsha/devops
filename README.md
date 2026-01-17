# DevOps & Cloud Engineering Portfolio

This repository is a hands-on DevOps and Cloud Engineering monorepo built as part of my journey toward becoming a **Cloud Engineer and AWS Solutions Architect**.

It demonstrates real-world practices such as CI/CD pipelines, containerization, reverse proxying, and infrastructure-ready application design.

---

## 🏗️ Architecture Overview

**Applications**
- **Backend**: Spring Boot (Java 25)
- **Frontend**: React + TypeScript

**Infrastructure & DevOps**
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Nginx (Reverse Proxy)
- Contabo VPS
- Custom Domain: `csangharsha.com.np`

---

## 🌐 Application Access

| Component   | URL                            |
|-------------|--------------------------------|
| Frontend    | https://csangharsha.com.np     |
| Backend API | https://csangharsha.com.np/api |

---

## 📂 Repository Structure
devops/
├── apps/
│ ├── backend/ # Spring Boot application
│ └── frontend/ # React + TypeScript application
│
├── nginx/
│ └── nginx.conf # Reverse proxy configuration
│
├── docker-compose.yml # Production container orchestration
│
├── .github/
│ └── workflows/ # CI/CD pipelines
│
├── scripts/ # Deployment & automation scripts
│
└── README.md


---

## 🚀 CI/CD Pipeline (Planned)

1. Code pushed to GitHub
2. GitHub Actions builds & tests apps
3. Docker images are created
4. Images are pushed to registry
5. Contabo VPS pulls latest images
6. Containers restarted via Docker Compose
7. Nginx routes traffic to services

---

## 🎯 Learning Objectives

- Build production-ready CI/CD pipelines
- Apply DevOps best practices
- Gain hands-on experience for Cloud & Solutions Architect roles
- Create a real-world portfolio for interviews

---

## 🔮 Future Enhancements

- HTTPS (Let’s Encrypt)
- Infrastructure as Code (Terraform)
- AWS Migration
- Kubernetes (EKS)
- Monitoring & Logging