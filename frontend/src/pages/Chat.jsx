
const Chat = () => {
  return (
    <main className="app-shell">
      <section className="chat-page">
        <div className="chat-panel">
          <header className="chat-header">
            <div>
              <p className="eyebrow">PDF Chat</p>
              <h2>Document conversation</h2>
            </div>
            <span className="status-pill">Ready</span>
          </header>

          <div className="messages" aria-label="Chat messages">
            <div className="message assistant">
              Your PDF workspace is ready. Ask a question about the uploaded
              document to begin.
            </div>
            <div className="message user">Summarize this PDF in simple words.</div>
            <div className="message assistant">
              I can help with summaries, key points, follow-up questions, and
              section-by-section review.
            </div>
          </div>

          <form className="composer">
            <input type="text" placeholder="Ask anything about your PDF..." />
            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Chat
