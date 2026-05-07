import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="app-shell">
      <section className="home-page" aria-label="AI PDF workspace">
        <header className="home-nav">
          <div className="brand-mark" aria-hidden="true">AI</div>
          <div>
            <p className="eyebrow">AI PDF Workspace</p>
            <strong>Document assistant</strong>
          </div>
        </header>

        <div className="home-grid">
          <section className="intro-panel" aria-labelledby="home-title">
            <div className="intro-copy">
              <p className="eyebrow">Read faster</p>
              <h1 id="home-title">Chat with your PDF in a focused workspace.</h1>
              <p className="lead">
                Upload a document, ask direct questions, and review answers
                without losing the thread of your reading.
              </p>
            </div>

            <div className="action-row">
              <button className="button" onClick={() => navigate("/get-pdf")}>
                Upload PDF
              </button>
              <button className="button secondary" onClick={() => navigate("/chat")}>
                Open Chat
              </button>
            </div>

            <div className="stats-grid" aria-label="Workspace highlights">
              <div className="stat">
                <strong>01</strong>
                <span>Upload a PDF</span>
              </div>
              <div className="stat">
                <strong>02</strong>
                <span>Ask questions</span>
              </div>
              <div className="stat">
                <strong>03</strong>
                <span>Review answers</span>
              </div>
            </div>
          </section>

          <aside className="preview-panel" aria-label="Workspace preview">
            <div className="preview-topbar">
              <span>Research-notes.pdf</span>
              <span className="status-pill">Ready</span>
            </div>
            <div className="document-card">
              <div className="doc-line" />
              <div className="doc-line mid" />
              <div className="doc-line short" />
              <div className="answer-strip">
                Summarize the main points and highlight the action items.
              </div>
              <div className="doc-line mid" />
              <div className="doc-line" />
              <div className="doc-line short" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Home
