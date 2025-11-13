'use client';

import { useMemo, useState } from 'react';

const questionTabs = [
  { id: 'unresolved', label: 'Unresolved' },
  { id: 'resolved', label: 'Resolved' },
  { id: 'all', label: 'All' }
];

const questions = [
  {
    id: 1,
    author: 'Sarah C',
    role: 'UXR',
    avatar: 'SC',
    timestamp: 'Nov 4, 1:44PM',
    message:
      'Should summaries auto-post in the project Slack channel or only DM PMs?',
    status: 'unresolved',
    detail: 'Need to confirm collaboration expectations before rollout.',
    followers: ['Kay M', 'David C']
  },
  {
    id: 2,
    author: 'Kay M',
    role: 'PMM',
    avatar: 'KM',
    timestamp: 'Nov 4, 12:15PM',
    message:
      'Can we highlight must-have vs nice-to-have accessibility improvements?',
    status: 'follow-up',
    detail: 'SmartPRD flagged missing priority labels.',
    followers: ['Sarah C']
  },
  {
    id: 3,
    author: 'David C',
    role: 'Engineering Lead',
    avatar: 'DC',
    timestamp: 'Nov 3, 6:03PM',
    message: 'Are the AI hallucination guardrails a v1 requirement or future work?',
    status: 'resolved',
    detail: 'Resolved in stand-up: v1 ships with preview gate only.',
    followers: ['Jensen L']
  }
];

const summaryUpdates = [
  'Added Slack auto-post toggle.',
  'Clarified AI hallucination preview gate ownership.',
  'Documented accessibility contrast & focus states.',
  'Streamlined focus outline styles for accessibility compliance.'
];

const smartHighlights = [
  {
    title: 'Slack Auto-Post',
    content:
      'Allow PMs to route meeting summaries directly to project Slack channels with optional DM notifications for stakeholders.'
  },
  {
    title: 'Accessibility Improvements',
    content:
      'Contrast ratios, keyboard focus traps, and clear session recap formatting ensure inclusive experiences across roles.'
  },
  {
    title: 'Design Space',
    content:
      'Interface prioritizes a calm, collaborative IA with emphasis on cross-functional clarity and fast comprehension.'
  }
];

const prdSections = [
  {
    title: '1. Product Overview',
    items: [
      'AI-powered platform streamlining PRD creation, review, and stakeholder alignment.',
      'Automates meeting notes into focused, role-tailored PRD briefs.'
    ]
  },
  {
    title: '2. Problem Statement',
    items: [
      'PMs lose hours wrangling meeting artifacts into centralized documentation.',
      'Teams lack visibility into open questions and decisions tracked across tools.'
    ]
  },
  {
    title: '3. Goals & Non-Goals',
    items: [
      'Reduce meeting time by 50% with automated summaries.',
      'Enable PMs to orchestrate multiple projects with centralized Q&A.',
      'Non-goals: replace Jira/Asana or deliver predictive forecasting.'
    ]
  },
  {
    title: '4. Target Users',
    items: [
      'Primary: PMs, Engineers, Designers, Data Scientists.',
      'Each receives role-specific PRD views via SmartPRD tailoring.'
    ]
  },
  {
    title: '5. Key Features',
    items: [
      'Multi-project dashboard with AI prioritization.',
      'Role-based PRD tailoring & auto-summaries to Slack.',
      'AI Q&A assistant with context search & version history.',
      'Integrations: Slack, Google Calendar, Jira/Confluence roadmap.'
    ]
  },
  {
    title: '6. Accessibility & Design',
    items: [
      'Adopts SmartPRD Design System (calm, collaborative IA).',
      'Readable typography, focus states, and keyboard navigation compliance.'
    ]
  },
  {
    title: '7. Success Metrics',
    items: [
      '50% PRD meeting time reduction.',
      '45% stakeholder satisfaction uplift.',
      '90% review tasks completed within 48h.',
      '40% time-to-feedback decrease.',
      '<5% AI hallucination rate.'
    ]
  },
  {
    title: '8. Technical Requirements',
    items: [
      'Frontend: Next.js; Backend: FastAPI; Database: PostgreSQL.',
      'Auth: OAuth; Storage: AWS S3; AI Engine: GPT-5.',
      'Integrations: Slack, Google Calendar.'
    ]
  },
  {
    title: '9. Risks & Mitigations',
    items: [
      'AI hallucination — mitigate with human-in-loop preview gate.',
      'Adoption risk — embed change management & champion enablement.',
      'Data leakage — secure endpoints and audit trails.'
    ]
  },
  {
    title: '10. Future Enhancements',
    items: [
      'Jira/Confluence deep integrations.',
      'Customizable stakeholder prompts & templates.',
      'Enterprise-grade fine-tuned AI models.'
    ]
  }
];

const metrics = [
  { label: 'Review cycles completed <48h', value: '90% goal' },
  { label: 'Slack adoption in pilot teams', value: '8/10 active' },
  { label: 'AI hallucination rate', value: '<5% with preview gate' }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('unresolved');

  const filteredQuestions = useMemo(() => {
    if (activeTab === 'all') return questions;
    return questions.filter((question) => question.status === activeTab);
  }, [activeTab]);

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="SmartPRD navigation">
        <div className="brand" aria-label="SmartPRD">
          <span role="img" aria-hidden="true">📄</span>
          SmartPRD
        </div>

        <div className="nav-section">
          <div className="nav-title">Your Projects</div>
          <div className="project-item active">
            <span>AI Meeting Assistant</span>
            <strong>AI Meeting Summary Assistant</strong>
          </div>
          <div className="project-item">
            <span>UX/UX Research</span>
            <strong>Basketball Stars</strong>
          </div>
          <div className="project-item">
            <span>Archived</span>
            <strong>Bell Project</strong>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-title">Actions</div>
          <div className="project-item">
            <strong>Schedule Meeting</strong>
            <span>Create an alignment session</span>
          </div>
          <div className="project-item">
            <strong>Mark as Resolved</strong>
            <span>Archive completed work</span>
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar" aria-hidden="true">WC</div>
          <div className="user-info">
            <strong>William C</strong>
            <span>Product Manager</span>
          </div>
        </div>
      </aside>

      <main className="content-area">
        <header className="card">
          <div className="card-header">
            <div>
              <div className="card-title">AI Meeting Summary Assistant</div>
              <div className="card-subtitle">Live PRD workspace • Updated Nov 4, 1:44PM</div>
            </div>
            <span className="badge" role="status">
              <span aria-hidden="true">⚡</span> Synced 1h ago
            </span>
          </div>
          <div className="summary-list">
            {summaryUpdates.map((item) => (
              <div key={item} className="summary-item">
                <div className="bullet" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="content-columns">
          <section className="card document-card" aria-labelledby="document-heading">
            <div className="card-header">
              <div>
                <h2 id="document-heading" className="card-title">Product Requirements</h2>
                <p className="card-subtitle">SmartPRD distilled the latest meeting notes into actionable updates.</p>
              </div>
              <span className="tag">Share to Slack</span>
            </div>

            <article className="document-content">
              <h3>Problem</h3>
              <p>
                Manual PRD updates create silos, duplicated documentation, and missed follow-ups. PMs need
                faster ways to transform meeting insights into role-aware PRD snippets.
              </p>

              <h3>Proposed Solution</h3>
              <p>
                SmartPRD captures live meeting notes, summarizes decisions, highlights follow-up tasks, and
                surfaces unanswered questions for PM review.
              </p>

              <h3>Key Callouts</h3>
              <ul>
                <li>Slack auto-post toggle requested by PMs for quick alignment.</li>
                <li>Accessibility audit flagged focus states and contrast requirements.</li>
                <li>Design system guidance: maintain calm, collaborative IA.</li>
                <li>Guardrails: AI hallucination preview gate before publishing.</li>
              </ul>

              <h3>Team Notes</h3>
              <p>
                Kay (PMM) will own Slack launch comms. Jensen (Design) is updating SmartPRD UI kit with new
                focus styles. Engineering to scope human-in-loop review for hallucination mitigation.
              </p>
            </article>
          </section>

          <aside className="card" aria-labelledby="summary-heading">
            <div className="card-header">
              <div>
                <h2 id="summary-heading" className="card-title">SmartPRD Summary</h2>
                <p className="card-subtitle">Context relevant to Product Manager</p>
              </div>
              <span className="tag">See full PRD</span>
            </div>

            <div className="summary-list">
              {smartHighlights.map((highlight) => (
                <div key={highlight.title} className="summary-item">
                  <div className="bullet" aria-hidden="true" />
                  <div>
                    <strong>{highlight.title}</strong>
                    <p>{highlight.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="metrics-grid" role="list" aria-label="Key metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-item" role="listitem">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="content-columns">
          <section className="card" aria-labelledby="questions-heading">
            <div className="card-header">
              <div>
                <h2 id="questions-heading" className="card-title">Questions</h2>
                <p className="card-subtitle">SmartPRD routes unresolved questions to the right owners.</p>
              </div>
              <span className="tag">Show unresolved</span>
            </div>

            <div className="questions-tabs" role="tablist" aria-label="Question filters">
              {questionTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="questions-list">
              {filteredQuestions.map((question) => (
                <article key={question.id} className="question-item">
                  <div className="question-meta">
                    <span className={`status ${question.status}`}>
                      {question.status === 'unresolved' && 'Unresolved'}
                      {question.status === 'resolved' && 'Resolved'}
                      {question.status === 'follow-up' && 'Follow-up'}
                    </span>
                    <strong>{question.author}</strong>
                    <span>{question.role}</span>
                    <span>{question.timestamp}</span>
                  </div>
                  <p>{question.message}</p>
                  <p className="card-subtitle">{question.detail}</p>
                  <div className="card-subtitle">Following: {question.followers.join(', ')}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="card prd-card" aria-labelledby="prd-heading">
            <div className="card-header">
              <div>
                <h2 id="prd-heading" className="card-title">SmartPRD — Product Requirements</h2>
                <p className="card-subtitle">Centralized blueprint across discovery, build, and launch.</p>
              </div>
              <span className="tag">Download PDF</span>
            </div>

            <div className="prd-section">
              {prdSections.map((section) => (
                <section key={section.title}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>

        <section className="card ask-card" aria-labelledby="ask-heading">
          <div className="card-header">
            <div>
              <h2 id="ask-heading" className="card-title">Ask SmartPRD or Your PM for clarification</h2>
              <p className="card-subtitle">Keep everyone aligned by logging your questions in the shared workspace.</p>
            </div>
          </div>

          <form>
            <textarea placeholder="Ask a question about the PRD..." aria-label="Ask SmartPRD a question" />
            <div className="actions">
              <label>
                <input type="checkbox" /> Notify stakeholders in Slack
              </label>
              <button type="button">Ask Question</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
