import React from "react";

const ArchitecturePage: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background-primary px-6 py-20 text-text-primary transition-colors duration-200">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-status-success/10 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
            Infrastructure
          </span>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            System Architecture
          </h1>

          <p className="text-base leading-7 text-text-secondary sm:text-lg">
            React + TypeScript on Vercel, .NET API with PostgreSQL in Docker on a
            VPS, connected by a GitHub-driven CI/CD pipeline.
          </p>
        </header>

        {/* ── Architecture Diagram ── */}
        <section className="mb-24">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
              Application Flow
            </h2>
            <p className="mt-2 text-sm text-text-tertiary">
              How data moves from the client to the database and back.
            </p>
          </div>

          {/* SVG Diagram */}
          <div className="mx-auto max-w-5xl">
            <svg
              viewBox="0 0 960 340"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Animated dot along path */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Connection line gradient */}
                <linearGradient id="lineGrad1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-status-success)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-status-success)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* ── Connection Lines ── */}
              {/* Frontend → Backend */}
              <line
                x1="270" y1="170" x2="370" y2="170"
                stroke="url(#lineGrad1)"
                strokeWidth="2"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
              </line>

              {/* Backend → Database */}
              <line
                x1="590" y1="170" x2="690" y2="170"
                stroke="url(#lineGrad2)"
                strokeWidth="2"
                strokeDasharray="6 4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
              </line>

              {/* Traveling dots - Frontend to Backend */}
              <circle r="4" fill="var(--color-accent)" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M270,170 L370,170" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="var(--color-accent)" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M270,170 L370,170" begin="1s" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Traveling dots - Backend to Database */}
              <circle r="4" fill="#8b5cf6" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M590,170 L690,170" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="#8b5cf6" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M590,170 L690,170" begin="1s" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* ── FRONTEND NODE ── */}
              <g>
                <rect
                  x="50" y="90" width="220" height="160" rx="16"
                  fill="var(--color-surface)"
                  stroke="var(--color-border)"
                  strokeWidth="1.5"
                />
                {/* Accent top bar */}
                <rect x="50" y="90" width="220" height="4" rx="2" fill="var(--color-accent)" />

                {/* React icon */}
                <circle cx="160" cy="140" r="18" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" />
                <circle cx="160" cy="140" r="12" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="160" cy="140" r="4" fill="var(--color-accent)" />

                <text x="160" y="182" textAnchor="middle" fill="var(--color-text-primary)" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
                  React + TypeScript
                </text>
                <text x="160" y="202" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="11" fontFamily="Inter, sans-serif">
                  Frontend
                </text>

                {/* Badge */}
                <rect x="110" y="218" width="100" height="22" rx="11" fill="var(--color-accent-muted)" />
                <text x="160" y="233" textAnchor="middle" fill="var(--color-accent)" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">
                  Vercel
                </text>
              </g>

              {/* ── BACKEND NODE ── */}
              <g>
                <rect
                  x="370" y="90" width="220" height="160" rx="16"
                  fill="var(--color-surface)"
                  stroke="var(--color-border)"
                  strokeWidth="1.5"
                />
                <rect x="370" y="90" width="220" height="4" rx="2" fill="var(--color-status-success)" />

                {/* .NET icon - gear shape */}
                <circle cx="480" cy="140" r="18" fill="none" stroke="var(--color-status-success)" strokeWidth="1.5" opacity="0.3" />
                <circle cx="480" cy="140" r="12" fill="none" stroke="var(--color-status-success)" strokeWidth="1.5" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 480 140" to="360 480 140" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="480" cy="140" r="4" fill="var(--color-status-success)" />

                <text x="480" y="182" textAnchor="middle" fill="var(--color-text-primary)" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
                  .NET Web API
                </text>
                <text x="480" y="202" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="11" fontFamily="Inter, sans-serif">
                  Backend
                </text>

                <rect x="420" y="218" width="120" height="22" rx="11" fill="rgba(16,185,129,0.1)" />
                <text x="480" y="233" textAnchor="middle" fill="var(--color-status-success)" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">
                  Docker · VPS
                </text>
              </g>

              {/* ── DATABASE NODE ── */}
              <g>
                <rect
                  x="690" y="90" width="220" height="160" rx="16"
                  fill="var(--color-surface)"
                  stroke="var(--color-border)"
                  strokeWidth="1.5"
                />
                <rect x="690" y="90" width="220" height="4" rx="2" fill="#8b5cf6" />

                {/* DB icon - cylinder shape */}
                <ellipse cx="800" cy="130" rx="16" ry="6" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
                <line x1="784" y1="130" x2="784" y2="150" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.3" />
                <line x1="816" y1="130" x2="816" y2="150" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.3" />
                <ellipse cx="800" cy="150" rx="16" ry="6" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
                <circle cx="800" cy="140" r="3" fill="#8b5cf6" />

                <text x="800" y="182" textAnchor="middle" fill="var(--color-text-primary)" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
                  PostgreSQL
                </text>
                <text x="800" y="202" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="11" fontFamily="Inter, sans-serif">
                  Database
                </text>

                <rect x="740" y="218" width="120" height="22" rx="11" fill="rgba(139,92,246,0.1)" />
                <text x="800" y="233" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">
                  Docker · VPS
                </text>
              </g>

              {/* ── Labels on arrows ── */}
              <text x="320" y="158" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
                HTTPS
              </text>
              <text x="640" y="158" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="JetBrains Mono, monospace">
                TCP
              </text>
            </svg>
          </div>

          {/* Mobile-friendly description cards under diagram */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                color: "accent",
                title: "Frontend",
                desc: "Handles the UI, routing, and client-side interactions. Deployed on Vercel for fast global delivery.",
              },
              {
                color: "success",
                title: "Backend",
                desc: "Exposes RESTful API endpoints, handles business logic, and connects the frontend to the database.",
              },
              {
                color: "purple",
                title: "Database",
                desc: "Stores persistent application data. Runs alongside the backend in Docker for portability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      item.color === "accent"
                        ? "bg-accent"
                        : item.color === "success"
                        ? "bg-status-success"
                        : "bg-[#8b5cf6]"
                    }`}
                  />
                  <h3 className="text-sm font-semibold text-text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CI/CD Pipeline ── */}
        <section className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
              Deployment Pipeline
            </h2>
            <p className="mt-2 text-sm text-text-tertiary">
              Automated delivery from code push to production.
            </p>
          </div>

          {/* Pipeline SVG Diagram */}
          <div className="mx-auto max-w-5xl">
            <svg
              viewBox="0 0 960 200"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-text-tertiary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-text-tertiary)" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Connection lines with animated dots */}
              {/* Step 1 → 2 */}
              <line x1="220" y1="100" x2="280" y2="100" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" />
              </line>
              <circle r="3" fill="var(--color-accent)" filter="url(#glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M220,100 L280,100" />
                <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Step 2 → 3 */}
              <line x1="460" y1="100" x2="520" y2="100" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" />
              </line>
              <circle r="3" fill="var(--color-status-warning)" filter="url(#glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M460,100 L520,100" />
                <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Step 3 → 4 (splits into two) */}
              {/* Branch to Vercel */}
              <path d="M700,100 Q740,100 760,60" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" />
              </path>
              <circle r="3" fill="var(--color-accent)" filter="url(#glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M700,100 Q740,100 760,60" />
                <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Branch to Docker */}
              <path d="M700,100 Q740,100 760,140" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" />
              </path>
              <circle r="3" fill="var(--color-status-success)" filter="url(#glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M700,100 Q740,100 760,140" />
                <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* ── Step 1: Git Push ── */}
              <g>
                <rect x="40" y="50" width="180" height="100" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Git branch icon */}
                <circle cx="100" cy="82" r="4" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" />
                <circle cx="140" cy="82" r="4" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" />
                <line x1="104" y1="82" x2="136" y2="82" stroke="var(--color-text-tertiary)" strokeWidth="1.5" />
                <circle cx="120" cy="72" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
                <line x1="120" y1="76" x2="120" y2="82" stroke="var(--color-accent)" strokeWidth="1.5" />
                <text x="120" y="115" textAnchor="middle" fill="var(--color-text-primary)" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                  Git Push
                </text>
                <text x="120" y="132" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="Inter, sans-serif">
                  GitHub Repository
                </text>
              </g>

              {/* ── Step 2: Webhook ── */}
              <g>
                <rect x="280" y="50" width="180" height="100" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Webhook / lightning icon */}
                <path d="M365,70 L355,85 L365,85 L355,100" fill="none" stroke="var(--color-status-warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="370" y="115" textAnchor="middle" fill="var(--color-text-primary)" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                  Webhook
                </text>
                <text x="370" y="132" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="Inter, sans-serif">
                  Triggers Pipeline
                </text>
              </g>

              {/* ── Step 3: Build & Pull ── */}
              <g>
                <rect x="520" y="50" width="180" height="100" rx="12" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Gear / process icon */}
                <circle cx="610" cy="82" r="10" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 610 82" to="360 610 82" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="610" cy="82" r="3" fill="var(--color-text-tertiary)" />
                <text x="610" y="115" textAnchor="middle" fill="var(--color-text-primary)" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                  Build & Deploy
                </text>
                <text x="610" y="132" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="Inter, sans-serif">
                  VPS Script Executes
                </text>
              </g>

              {/* ── Step 4a: Vercel (top branch) ── */}
              <g>
                <rect x="760" y="20" width="160" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="808" cy="44" r="3" fill="var(--color-accent)" />
                <text x="820" y="48" fill="var(--color-accent)" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                  Vercel
                </text>
                <text x="840" y="68" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="Inter, sans-serif">
                  Frontend auto-deploy
                </text>
              </g>

              {/* ── Step 4b: Docker (bottom branch) ── */}
              <g>
                <rect x="760" y="115" width="160" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-status-success)" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="808" cy="139" r="3" fill="var(--color-status-success)" />
                <text x="820" y="143" fill="var(--color-status-success)" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                  Docker
                </text>
                <text x="840" y="163" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" fontFamily="Inter, sans-serif">
                  Container restart
                </text>
              </g>
            </svg>
          </div>

          {/* Pipeline detail cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Git Push",
                desc: "Code is pushed to the GitHub repository, the single source of truth for all deployments.",
                accent: "var(--color-text-tertiary)",
              },
              {
                step: "02",
                title: "Webhook Fires",
                desc: "GitHub sends a webhook to the VPS, notifying it of changes to trigger the deployment script.",
                accent: "var(--color-status-warning)",
              },
              {
                step: "03",
                title: "Vercel Builds",
                desc: "The frontend is automatically built and deployed globally through Vercel's CI pipeline.",
                accent: "var(--color-accent)",
              },
              {
                step: "04",
                title: "Docker Restarts",
                desc: "The VPS pulls the latest backend code and restarts the Docker containers with zero downtime.",
                accent: "var(--color-status-success)",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated"
              >
                <span
                  className="mb-3 inline-block font-mono text-xs font-semibold"
                  style={{ color: item.accent }}
                >
                  STEP {item.step}
                </span>
                <h3 className="mb-2 text-sm font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Info banner */}
          <div className="mt-8 rounded-xl border border-accent/20 bg-accent-muted px-5 py-4 text-center text-sm text-text-secondary">
            Frontend deploys are handled automatically by Vercel. Backend and
            database updates go through the VPS script that pulls changes and
            restarts Docker containers.
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
              Tech Stack
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "React", detail: "UI Library", category: "Frontend" },
              { name: "TypeScript", detail: "Type Safety", category: "Frontend" },
              { name: "Tailwind CSS", detail: "Styling", category: "Frontend" },
              { name: ".NET", detail: "Web API", category: "Backend" },
              { name: "Entity Framework", detail: "ORM", category: "Backend" },
              { name: "PostgreSQL", detail: "Relational DB", category: "Database" },
              { name: "Docker", detail: "Containerization", category: "DevOps" },
              { name: "Vercel", detail: "Frontend Hosting", category: "DevOps" },
              { name: "GitHub Webhooks", detail: "CI/CD Trigger", category: "DevOps" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 transition-colors duration-150 hover:border-border-strong"
              >
                <div>
                  <span className="text-sm font-medium text-text-primary">
                    {tech.name}
                  </span>
                  <span className="ml-2 text-xs text-text-tertiary">
                    {tech.detail}
                  </span>
                </div>
                <span className="rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-tertiary">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ArchitecturePage;
