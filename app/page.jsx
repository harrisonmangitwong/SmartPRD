'use client';

import { useMemo, useState } from 'react';

const questionTabs = [
  { id: 'needs-answer', label: 'Needs response' },
  { id: 'awaiting-review', label: 'Awaiting review' },
  { id: 'answered', label: 'Answered' },
  { id: 'all', label: 'All' }
];

const statusLabels = {
  'needs-answer': 'Needs response',
  'awaiting-review': 'Review scheduled',
  answered: 'Answered'
};

const questions = [
  {
    id: 1,
    author: 'William C',
    role: 'PM',
    avatar: 'WC',
    timestamp: 'Nov 7, 9:18AM',
    message: 'Designs call out a “final” analytics template—can we confirm we have the approved version uploaded?',
    status: 'needs-answer',
    detail: 'Waiting on design to drop the signed-off dashboard template before sharing digest.',
    nextStep: 'Design to upload latest template for PM review.',
    stakeholders: ['Maya (Design)', 'Luis (Eng)']
  },
  {
    id: 2,
    author: 'Maya P',
    role: 'Design',
    avatar: 'MP',
    timestamp: 'Nov 6, 4:02PM',
    message: 'If revenue leadership needs more context, should we include the churn mitigation appendix?',
    status: 'awaiting-review',
    detail: 'SmartPRD suggested appendix based on uploaded PRD; pending PM confirmation during review.',
    nextStep: 'Discuss in Thursday review if appendix stays in digest.',
    stakeholders: ['William (PM)', 'Jules (PMM)']
  },
  {
    id: 3,
    author: 'Luis R',
    role: 'Engineering Lead',
    avatar: 'LR',
    timestamp: 'Nov 6, 10:37AM',
    message: 'API error states aren’t represented in the digest timeline—okay to assume backend covers it?',
    status: 'answered',
    detail: 'Resolved via SmartPRD reply with link to PRD Risks section and owners.',
    nextStep: 'Follow-up captured in engineering backlog.',
    stakeholders: ['Ops (Review)', 'QA']
  }
];

const summaryUpdates = [
  'Workspace synced with new “Revenue Dashboard Refresh” PRD upload.',
  'Stakeholder digests now highlight unanswered board items at the top.',
  'Review scheduled for Thu, Nov 9 with design, engineering, and PMM.',
  'SmartPRD auto-tagged questions that require a live discussion.'
];

const quickActions = [
  {
    title: 'Upload latest PRD source',
    description: 'Drag in the approved doc or sync from Drive so SmartPRD can tailor context.',
    cta: 'Upload file'
  },
  {
    title: 'Send tailored stakeholder digest',
    description: 'Push an async recap focused on actions for design, eng, and leadership.',
    cta: 'Share digest'
  },
  {
    title: 'Schedule live review',
    description: 'If questions stay open, book time directly with all stakeholders.',
    cta: 'Open calendar'
  }
];

const workflowSteps = [
  {
    title: '1. Create a SmartPRD project',
    summary: 'Stand up a dedicated hub for every initiative the PM owns.',
    items: [
      'Name the project and capture what you need teammates to deliver.',
      'Invite stakeholders so SmartPRD tailors updates for each role.',
      'Upload the current PRD baseline or connect to a doc source.'
    ]
  },
  {
    title: '2. Navigate across active work',
    summary: 'Jump between initiatives without losing context.',
    items: [
      'See all owned projects plus status at a glance.',
      'Spot which workstreams are waiting on answers before the next meeting.',
      'Keep SmartPRD synced with the latest docs and decisions.'
    ]
  },
  {
    title: '3. Run dynamic reviews',
    summary: 'Let SmartPRD handle async prep so meetings are intentional.',
    items: [
      'Share tailored digests that answer “what do I need to know?”.',
      'Track every question and response in the shared board.',
      'Schedule time only when live alignment is still required.'
    ]
  },
  {
    title: '4. Stay anchored in project context',
    summary: 'Every artifact and answer lives next to the PRD.',
    items: [
      'Reference the uploaded PRD beside SmartPRD callouts.',
      'Highlight outstanding questions and owners in one view.',
      'Log final decisions so follow-ups are easy to share later.'
    ]
  }
];

const stakeholderHighlights = [
  {
    title: 'What changed',
    content: 'Revenue KPIs moved to the overview so leadership can scan outcomes first.'
  },
  {
    title: 'Where to help',
    content: 'Design review pending for analytics template and empty state walkthrough.'
  },
  {
    title: 'Unanswered items',
    content: 'Two needs-response questions remain—jump in before the live review.'
  }
];

const metrics = [
  { label: 'Questions resolved async this week', value: '6 of 8' },
  { label: 'Stakeholder digests sent', value: '3 teams' },
  { label: 'Next live review', value: 'Thu • Nov 9 • 2:00PM' }
];

const prdSections = [
  {
    title: 'Workspace foundations',
    items: [
      'Create SmartPRD projects for each initiative and invite stakeholders immediately.',
      'Upload or link the canonical PRD so SmartPRD can surface context in every view.',
      'Keep project overview, success metrics, and owners front-and-center.'
    ]
  },
  {
    title: 'Review & alignment flow',
    items: [
      'Send role-aware digests so stakeholders arrive with answers in hand.',
      'Use the dynamic question board to capture every follow-up and response.',
      'Schedule a live review only if critical items stay unresolved.'
    ]
  },
  {
    title: 'Stakeholder experience',
    items: [
      'Deliver high-level summaries tailored to what each role needs.',
      'Highlight unanswered questions and provide a clear place to respond.',
      'Offer quick access to upload feedback or request additional context.'
    ]
  },
  {
    title: 'Success signals',
    items: [
      'Fewer recurring alignment meetings needed each sprint.',
      'Stakeholders resolve open items inside SmartPRD before reviews.',
      'Final PRD versions stay in sync across teams and tools.'
    ]
  }
];

const prdFiles = [
  { name: 'Revenue Dashboard Refresh — PRD v3', status: 'Current version', updated: 'Synced Nov 7' },
  { name: 'Async stakeholder digest — Nov 6', status: 'Shared via Slack', updated: 'Sent Nov 6' },
  { name: 'Churn mitigation appendix', status: 'Awaiting review', updated: 'Draft from PMM' }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('needs-answer');

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
            <span>Cross-functional</span>
            <strong>Revenue Dashboard Refresh</strong>
          </div>
          <div className="project-item">
            <span>Discovery</span>
            <strong>Lifecycle Notifications</strong>
          </div>
          <div className="project-item">
            <span>Archived</span>
            <strong>Onboarding Streamline</strong>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-title">Actions</div>
          <div className="project-item">
            <strong>Answer board items</strong>
            <span>Reply to remaining questions</span>
          </div>
          <div className="project-item">
            <strong>Share stakeholder digest</strong>
            <span>Send tailored update to teams</span>
          </div>
          <div className="project-item">
            <strong>Schedule review</strong>
            <span>Book time if blockers remain</span>
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
              <div className="card-title">Revenue Dashboard Refresh</div>
              <div className="card-subtitle">Live SmartPRD workspace • Updated Nov 7, 9:18AM</div>
            </div>
            <span className="badge" role="status">
              <span aria-hidden="true">⚡</span> Synced from Drive 12m ago
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
                <p className="card-subtitle">
                  SmartPRD reduces unnecessary meetings by tailoring project context for every stakeholder.
                </p>
              </div>
              <span className="tag">Share overview</span>
            </div>

            <article className="document-content">
              <h3>Product overview</h3>
              <p>
                SmartPRD pulls the right details from your PRD, meeting notes, and prompts so PMs can keep teams aligned
                without extra status meetings. Each project lives in a dedicated workspace with context, questions, and
                actions in one place.
              </p>

              <h3>PM workflow</h3>
              <ul>
                <li>Create a SmartPRD project, invite every stakeholder, and upload the canonical PRD.</li>
                <li>Navigate across initiatives to see which ones still need answers before the next checkpoint.</li>
                <li>Let SmartPRD surface open questions, upcoming reviews, and role-based tasks.</li>
              </ul>

              <h3>Stakeholder experience</h3>
              <ul>
                <li>Receive a high-level digest focused on what unblocks their work.</li>
                <li>Jump into the question board to answer or log follow-ups async.</li>
                <li>Know if a meeting is required by checking unresolved items and scheduled reviews.</li>
              </ul>

              <h3>Key outcomes</h3>
              <ul>
                <li>Fewer ad-hoc alignment meetings; more decisions documented in SmartPRD.</li>
                <li>PRD uploads and final versions stay current, so there is one trusted source.</li>
                <li>Stakeholders understand next steps because context, questions, and decisions stay linked.</li>
              </ul>
            </article>
          </section>

          <aside className="card quick-actions-card" aria-labelledby="quick-actions-heading">
            <div className="card-header">
              <div>
                <h2 id="quick-actions-heading" className="card-title">Quick actions</h2>
                <p className="card-subtitle">Keep this workspace ready before the next review.</p>
              </div>
            </div>

            <div className="quick-actions-list">
              {quickActions.map((action) => (
                <div key={action.title} className="quick-action">
                  <div>
                    <strong>{action.title}</strong>
                    <p>{action.description}</p>
                  </div>
                  <button type="button">{action.cta}</button>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="content-columns">
          <section className="card" aria-labelledby="workflow-heading">
            <div className="card-header">
              <div>
                <h2 id="workflow-heading" className="card-title">PM workflow</h2>
                <p className="card-subtitle">Follow this flow to keep SmartPRD working for you.</p>
              </div>
            </div>

            <div className="workflow-steps">
              {workflowSteps.map((step) => (
                <article key={step.title} className="workflow-step">
                  <div className="step-title">{step.title}</div>
                  <p>{step.summary}</p>
                  <ul>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className="card digest-card" aria-labelledby="digest-heading">
            <div className="card-header">
              <div>
                <h2 id="digest-heading" className="card-title">Stakeholder digest</h2>
                <p className="card-subtitle">What collaborators see when they check SmartPRD.</p>
              </div>
              <span className="tag">Preview digest</span>
            </div>

            <div className="summary-list digest-list">
              {stakeholderHighlights.map((highlight) => (
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

            <button type="button" className="outline-button">Share latest digest</button>
          </aside>
        </div>

        <div className="content-columns">
          <section className="card" aria-labelledby="questions-heading">
            <div className="card-header">
              <div>
                <h2 id="questions-heading" className="card-title">Questions</h2>
                <p className="card-subtitle">SmartPRD captures every follow-up so you can respond before meetings.</p>
              </div>
              <span className="tag">Board view</span>
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
                    <span className={`status ${question.status}`}>{statusLabels[question.status]}</span>
                    <strong>{question.author}</strong>
                    <span>{question.role}</span>
                    <span>{question.timestamp}</span>
                  </div>
                  <p>{question.message}</p>
                  <p className="card-subtitle">{question.detail}</p>
                  <div className="card-subtitle">Next step: {question.nextStep}</div>
                  <div className="card-subtitle">Stakeholders: {question.stakeholders.join(', ')}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="card prd-card" aria-labelledby="prd-heading">
            <div className="card-header">
              <div>
                <h2 id="prd-heading" className="card-title">SmartPRD — project context</h2>
                <p className="card-subtitle">Everything tied to the core PRD stays in one place.</p>
              </div>
              <span className="tag">Download</span>
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

            <div className="prd-files">
              <h3>Workspace documents</h3>
              <ul>
                {prdFiles.map((file) => (
                  <li key={file.name}>
                    <div>
                      <strong>{file.name}</strong>
                      <span>{file.status}</span>
                    </div>
                    <span>{file.updated}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="upload-area" role="region" aria-label="Upload the latest project PRD">
              <p>Drop the final PRD or choose a file to keep SmartPRD current.</p>
              <button type="button">Upload PRD</button>
            </div>
          </section>
        </div>

        <section className="card ask-card" aria-labelledby="ask-heading">
          <div className="card-header">
            <div>
              <h2 id="ask-heading" className="card-title">Log context or request support</h2>
              <p className="card-subtitle">Capture new questions so SmartPRD routes them before the next sync.</p>
            </div>
          </div>

          <form>
            <textarea placeholder="Ask SmartPRD or your PM for updates..." aria-label="Ask SmartPRD a question" />
            <div className="actions">
              <label>
                <input type="checkbox" /> Notify stakeholders in Slack
              </label>
              <button type="button">Add to board</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
