import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Headset } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'contact' | 'submitted'>('chat');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hi! I am the RTA Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are a helpful assistant for RTA. RTA is a no-nonsense marketplace for buying and selling commercial trucks, fleets, and heavy equipment. Contact Info: Phone: (260) 493-6182, Email: info@rubletrucks.com. Hours: Mon-Fri 8AM-5PM EST, Sat 8AM-12PM EST. Keep answers concise and helpful. If the user asks to speak to a human, or if you don't know the answer, politely tell them you can connect them with our team and ask them to click the 'Talk to a Human' button in the chat window."
        }
      });
      setChatSession(chat);
    } catch (error) {
      console.error("Failed to initialize chat:", error);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, mode, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSession) return;
    
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const response = await chatSession.sendMessage({ message: userText });
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: response.text || 'Sorry, I encountered an error.' }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later or click "Talk to a Human".' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setMode('submitted');
    setTimeout(() => {
      setMode('chat');
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">RTA Assistant</h3>
                <p className="text-xs text-slate-400">We typically reply instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-grow overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
            {mode === 'chat' && (
              <>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-red-100 text-red-600'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-800 rounded-tl-sm flex items-center gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}

            {mode === 'contact' && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Talk to a Human</h4>
                <p className="text-xs text-slate-600 mb-4">Leave your details and our team will get back to you shortly.</p>
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input type="text" placeholder="Name" required className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:border-red-600" />
                  <input type="email" placeholder="Email" required className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:border-red-600" />
                  <input type="tel" placeholder="Phone" required className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:border-red-600" />
                  <textarea placeholder="How can we help?" required rows={3} className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:border-red-600"></textarea>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setMode('chat')} className="flex-1 px-3 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition-colors">Cancel</button>
                    <button type="submit" className="flex-1 px-3 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded transition-colors">Submit</button>
                  </div>
                </form>
              </div>
            )}

            {mode === 'submitted' && (
              <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200 text-center my-auto">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Headset className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-1">Message Sent!</h4>
                <p className="text-sm">Our team will contact you soon.</p>
              </div>
            )}
          </div>

          {/* Footer / Input Area */}
          {mode === 'chat' && (
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex justify-center mb-3">
                <button 
                  onClick={() => setMode('contact')}
                  className="text-xs font-bold text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                >
                  <Headset className="w-3.5 h-3.5" /> Talk to a Human
                </button>
              </div>
              <form onSubmit={handleSend} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..." 
                  className="flex-grow px-3 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-full text-sm outline-none transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
