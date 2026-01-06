'use client'
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function handleSend() {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");
    }
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed z-50 bottom-6 right-6 bg-[#3f17cc] p-4 rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-none transition-all border-4 border-white hover:scale-110"
        aria-label="Abrir chat"
        style={{ boxShadow: "0 4px 24px 0 rgba(63,23,204,0.25)" }}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-[#3f17cc] text-white px-4 py-3 font-semibold flex items-center justify-between">
            <span>Atendimento</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat" className="ml-2">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto bg-gray-50" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.from === "user"
                    ? "text-right"
                    : "text-left"
                }
              >
                <span
                  className={
                    msg.from === "user"
                      ? "inline-block bg-[#3f17cc] text-white rounded-lg px-3 py-1 mb-1 max-w-[80%]"
                      : "inline-block bg-gray-200 text-gray-800 rounded-lg px-3 py-1 mb-1 max-w-[80%]"
                  }
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center border-t border-gray-200 bg-white px-2 py-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              autoFocus
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-[#3f17cc] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2a128a] transition-all"
              aria-label="Enviar mensagem"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
