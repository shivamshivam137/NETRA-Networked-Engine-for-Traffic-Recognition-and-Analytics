# 📋 NETRA — Jira Agile Project Management & Scrum Framework

This document outlines the **Agile Scrum Methodology, Jira Work Breakdown Structure, Story Points Estimation, and Sprint Cycles** implemented for the NETRA Smart City Surveillance platform.

---

## 🏛️ Project Scrum Configuration

- **Project Name**: NETRA (Networked Engine for Traffic Recognition and Analytics)
- **Project Key**: `NETRA`
- **Methodology**: Scrum Framework
- **Sprint Duration**: 2-Week Sprints
- **Estimation Technique**: Planning Poker (Fibonacci Sequence: `1, 2, 3, 5, 8, 13`)
- **Total Story Points Delivered**: **106 Story Points (SP)**

---

## 🎯 Epics Overview

| Epic Key | Epic Summary | Target Sprints | Total Points |
| :--- | :--- | :--- | :--- |
| **`NETRA-EPIC-01`** | **Core GIS Surveillance & Camera Network Mapping** | Sprint 1 | **26 SP** |
| **`NETRA-EPIC-02`** | **Multi-Camera ANPR & Vehicle Trajectory Tracking** | Sprint 1 & 2 | **28 SP** |
| **`NETRA-EPIC-03`** | **Real-Time Safety & Security Incident Alerting** | Sprint 2 | **18 SP** |
| **`NETRA-EPIC-04`** | **AI Congestion Prevention & Autonomous Signal Optimizer** | Sprint 2 & 3 | **21 SP** |
| **`NETRA-EPIC-05`** | **DevOps, Jenkins CI/CD Pipeline & Cloud Hosting** | Sprint 3 | **13 SP** |

---

## 🏃 Sprint Breakdown & User Stories

### ⚡ Sprint 1: Foundation, GIS Map & ANPR Data Modeling
- **Sprint Goal**: Deploy base Leaflet GIS map with 50+ camera nodes and vehicle search engine.
- **Committed**: 34 SP | **Completed**: 34 SP | **Velocity**: 100%

| Issue Key | Type | Story Title & Description | Story Points | Status |
| :--- | :--- | :--- | :--- | :--- |
| `NETRA-101` | Story | As an operator, I want an interactive city GIS map so I can monitor camera nodes. | **8 SP** | `DONE` |
| `NETRA-102` | Story | As an analyst, I want color-coded camera status pins (Online, Congested, Offline). | **5 SP** | `DONE` |
| `NETRA-103` | Story | As an operator, I want to search vehicles by plate number with instant suggestions. | **5 SP** | `DONE` |
| `NETRA-104` | Story | As a developer, I want to configure Supabase database schemas and seed test data. | **8 SP** | `DONE` |
| `NETRA-105` | Task | Setup React 19 + Vite boilerplate with Tailwind CSS dark mode command center. | **5 SP** | `DONE` |
| `NETRA-106` | Bug | Fix Leaflet default marker asset path resolution issue under Vite bundling. | **3 SP** | `DONE` |

---

### ⚡ Sprint 2: Multi-Camera Trajectory & Real-Time Incident Alerts
- **Sprint Goal**: Reconstruct multi-camera vehicle trajectories and launch real-time violation alerts.
- **Committed**: 38 SP | **Completed**: 38 SP | **Velocity**: 100%

| Issue Key | Type | Story Title & Description | Story Points | Status |
| :--- | :--- | :--- | :--- | :--- |
| `NETRA-201` | Story | As an operator, I want to view a vehicle's chronological path across cameras. | **8 SP** | `DONE` |
| `NETRA-202` | Story | As a patrol unit, I want instant alerts for hotlisted / stolen vehicles. | **8 SP** | `DONE` |
| `NETRA-203` | Story | As a traffic officer, I want automated red-light and speeding violation alerts. | **5 SP** | `DONE` |
| `NETRA-204` | Story | As an analyst, I want hourly flow rate and speed distribution charts (Recharts). | **8 SP** | `DONE` |
| `NETRA-205` | Story | As a user, I want multi-language localization (English / Hindi toggle). | **5 SP** | `DONE` |
| `NETRA-206` | Bug | Resolve trajectory polyline rendering straight lines instead of road contours. | **4 SP** | `DONE` |

---

### ⚡ Sprint 3: AI Traffic Prevention & Jenkins CI/CD Automation
- **Sprint Goal**: Build AI dynamic signal timing simulator and establish Jenkins in Docker CI/CD pipeline.
- **Committed**: 34 SP | **Completed**: 34 SP | **Velocity**: 100%

| Issue Key | Type | Story Title & Description | Story Points | Status |
| :--- | :--- | :--- | :--- | :--- |
| `NETRA-301` | Story | As a traffic manager, I want an AI simulator to test green corridor signal tuning. | **8 SP** | `DONE` |
| `NETRA-302` | Story | As an operator, I want automated alternate route recommendations during jams. | **8 SP** | `DONE` |
| `NETRA-303` | Task | Containerize Jenkins inside Docker with persistent volume and NodeJS pipeline. | **5 SP** | `DONE` |
| `NETRA-304` | Task | Write declarative `Jenkinsfile` for automated test, build, and artifact packaging. | **5 SP** | `DONE` |
| `NETRA-305` | Story | Create smoke test suite (`test-runner.js`) for CI validation before build. | **5 SP** | `DONE` |
| `NETRA-306` | Task | Deploy web app on Vercel with zero-downtime client-side SPA routing. | **3 SP** | `DONE` |

---

## 🔗 Jira $\leftrightarrow$ GitHub $\leftrightarrow$ Jenkins Integration ("Smart Commits")

We utilize **Jira Smart Commits** to tie Git branches, pull requests, and Jenkins pipeline runs directly to Jira tickets:

### Branching Convention:
```bash
feature/NETRA-304-jenkins-pipeline
fix/NETRA-206-trajectory-polyline
```

### Commit Message Syntax:
```bash
git commit -m "NETRA-304: configure declarative Jenkinsfile for automated CI pipeline #time 3h #resolve"
```

* **`NETRA-304`**: Links the commit and Jenkins build to Jira ticket NETRA-304.
* **`#time 3h`**: Automatically logs 3 hours of work in Jira timesheet.
* **`#resolve`**: Automatically moves ticket status from `IN PROGRESS` to `DONE`.

---

## 📈 Scrum Metrics & Team Velocity

```
 Sprint 1: [████████████████████] 34 / 34 SP (100%)
 Sprint 2: [████████████████████] 38 / 38 SP (100%)
 Sprint 3: [████████████████████] 34 / 34 SP (100%)
 Average Team Velocity: 35.3 Story Points / Sprint
```
