import { useState } from "react"
import { useParams } from "react-router-dom"

const Chat = () => {
  const { pdf_id } = useParams()
  const hasPdfId = Boolean(pdf_id)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Your PDF workspace is ready. Ask a question about the uploaded document to begin.",
    },
  ])
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const message = input.trim()

    if (!message || isSending) {
      return
    }

    if (!hasPdfId) {
      setError("Missing PDF ID. Please upload a PDF first.")

      return
    }

    const chatApi = import.meta.env.VITE_CHAT_API || "http://localhost:8000/api/chat"

    setInput("")
    setError("")
    setIsSending(true)
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", content: message },
    ])

    try {
      const response = await fetch(chatApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdf_id,
          message,
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        const detail = Array.isArray(data?.detail)
          ? data.detail.map((entry) => entry.msg).join(", ")
          : data?.detail || data?.message || "Chat request failed"

        throw new Error(detail)
      }

      const assistantMessage = data?.message || data?.answer

      if (!assistantMessage) {
        throw new Error("Backend did not return a chat message")
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "assistant", content: assistantMessage },
      ])
    } catch (requestError) {
      setError(requestError.message)
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: "I could not get an answer from the backend. Please try again.",
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="app-shell">
      <section className="chat-page">
        <div className="chat-panel">
          <header className="chat-header">
            <div>
              <p className="eyebrow">PDF Chat</p>
              <h2>Document conversation</h2>
              {!hasPdfId && <p className="chat-error">Upload a PDF before sending a message.</p>}
            </div>
            <span className="status-pill">{isSending ? "Thinking" : "Ready"}</span>
          </header>

          <div className="messages" aria-label="Chat messages">
            {messages.map((chatMessage, index) => (
              <div className={`message ${chatMessage.role}`} key={`${chatMessage.role}-${index}`}>
                {chatMessage.content}
              </div>
            ))}
            {error && <p className="chat-error">{error}</p>}
          </div>

          <form className="composer" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              placeholder="Ask anything about your PDF..."
              onChange={(event) => setInput(event.target.value)}
              disabled={isSending}
            />
            <button className="button" type="submit" disabled={isSending || !input.trim()}>
              {isSending ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Chat
