import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import ZevImage from '../components/ui/ZevImage';
import RevealWrapper from '../components/ui/RevealWrapper';
import FooterCTA from '../components/ui/FooterCTA';

const REPLIES = {
  rfp: "Absolutely. Share the tender document and a few past winning proposals, and I can draft a structured, compliant first response — executive summary, scope, methodology and pricing tables — matched to the evaluation criteria. Your team then reviews and refines instead of starting from a blank page. Typical first drafts: minutes, not days.",
  summary: "Yes — upload the report (even 40+ pages, Arabic or English) and I'll return a one-page summary, the key decisions and risks, and a list of action items with owners. You can then ask follow-up questions like \"what changed since last quarter?\" and get instant, sourced answers.",
  translate: "نعم، بكل تأكيد. I work fluently in Arabic and English — translating documents, official communications and campaigns while keeping tone and terminology on-brand. I can also draft natively in both languages, so nothing reads like a machine translation.",
  automate: "Great use case. Tell me the steps a person does today — for example: receive invoice → check PO → enter into the system → route for approval. I can automate that chain, flag only the exceptions for a human, and log everything for audit. Most teams reclaim hours every week.",
};
const FALLBACK = "Good question. Here's how ZEV AI would approach it: we'd map your current process, identify exactly where AI saves time, and build a focused, secure solution that plugs into your existing tools — with full bilingual support. For a tailored walkthrough with your own examples, tap \"Chat on WhatsApp\" above and our UAE team will help.";

function AiChat() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm the ZEV AI Assistant 👋  Ask me anything, or try one of the suggestions below to see how we'd help your team." },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  function respond(text) {
    setTyping(true);
    const wait = reduceMotion ? 200 : 650 + Math.random() * 350;
    setTimeout(() => {
      setTyping(false);
      if (reduceMotion) {
        setMessages(m => [...m, { role: 'bot', text }]);
        setBusy(false);
      } else {
        let i = 0;
        setMessages(m => [...m, { role: 'bot', text: '' }]);
        const id = setInterval(() => {
          i += 2;
          setMessages(m => {
            const next = [...m];
            next[next.length - 1] = { role: 'bot', text: text.slice(0, i) };
            return next;
          });
          if (i >= text.length) {
            clearInterval(id);
            setMessages(m => { const n = [...m]; n[n.length - 1] = { role: 'bot', text }; return n; });
            setBusy(false);
          }
        }, 14);
      }
    }, wait);
  }

  function handle(userText, key) {
    if (busy || !userText.trim()) return;
    setBusy(true);
    setMessages(m => [...m, { role: 'user', text: userText }]);
    setInput('');
    respond((key && REPLIES[key]) ? REPLIES[key] : FALLBACK);
  }

  return (
    <div className="ai-chat">
      <div className="ai-chat-head">
        <div className="av">Z</div>
        <div className="who">
          <strong>ZEV AI Assistant</strong>
          <span>Online · replies instantly</span>
        </div>
        <div className="pwr">Interactive<br />demo</div>
      </div>
      <div className="ai-chat-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <div key={i} className={`ai-msg ${m.role}`}>{m.text}</div>
        ))}
        {typing && (
          <div className="ai-typing">
            <span /><span /><span />
          </div>
        )}
      </div>
      <div className="ai-chat-foot">
        <div className="ai-chips">
          {[
            { q: 'rfp', label: 'Draft an RFP response' },
            { q: 'summary', label: 'Summarise a long report' },
            { q: 'translate', label: 'Arabic ⇄ English' },
            { q: 'automate', label: 'Automate a workflow' },
          ].map(c => (
            <button
              key={c.q}
              className="ai-chip"
              type="button"
              onClick={() => handle(c.label, c.q)}
              disabled={busy}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="ai-input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handle(input, null); }}
            placeholder="Type a message…"
            aria-label="Type a message to the ZEV AI Assistant"
            autoComplete="off"
            disabled={busy}
          />
          <button
            className="ai-send"
            type="button"
            aria-label="Send message"
            disabled={busy}
            onClick={() => handle(input, null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AiSolutions() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="ai-hero">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="grid-lines" />
        <div className="wrap">
          <RevealWrapper className="ai-hero-copy">
            <div className="ai-crumbs">
              <Link to="/">Home</Link><span className="sep">/</span><span className="cur">AI Solutions</span>
            </div>
            <span className="ai-eyebrow"><span className="line" />ZEV AI · New Division</span>
            <h1>Practical <span className="hl">artificial intelligence</span> for UAE organizations.</h1>
            <p className="lead">We help ministries, federal agencies and enterprises put AI to work — custom assistants, document intelligence and bilingual automation, built securely around the way your teams already operate.</p>
            <div className="ai-hero-cta">
              <a href="https://api.whatsapp.com/send/?phone=971509191055&text=Hi%20ZEV%20AI%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20solutions." target="_blank" rel="noopener" className="btn btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
                Chat on WhatsApp
              </a>
              <a href="#capabilities" className="btn btn-outline-l">
                Explore Capabilities
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </a>
            </div>
            <div className="ai-trust">
              <div className="t"><strong>20+</strong><span>Years serving the UAE</span></div>
              <div className="t"><strong>AR · EN</strong><span>Fully bilingual</span></div>
              <div className="t"><strong>Secure</strong><span>Built around your data</span></div>
            </div>
          </RevealWrapper>
          <RevealWrapper className="ai-hero-demo">
            <AiChat />
          </RevealWrapper>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section" id="capabilities">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">What We Build</span>
            <h2>AI capabilities, tailored to your operation</h2>
            <p>From a single smart assistant to a fully automated back-office workflow — we start with your real problems, not the hype.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-cap-grid">
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg></div>
              <h3>Custom AI Assistants</h3>
              <p>Chatbots and staff copilots that answer questions, draft documents and guide users — in Arabic and English, trained on your own knowledge.</p>
            </div>
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg></div>
              <h3>Document &amp; Data Intelligence</h3>
              <p>Read, summarise, classify and extract from contracts, tenders and reports — turning stacks of PDFs into structured, searchable answers.</p>
            </div>
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Process Automation</h3>
              <p>Automate repetitive work — approvals, data entry, invoice handling and reporting — so your team spends time on decisions, not paperwork.</p>
            </div>
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14M5 8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg></div>
              <h3>Bilingual Content &amp; Translation</h3>
              <p>On-brand Arabic ⇄ English copywriting and translation at scale — communications, reports and campaigns that read naturally in both languages.</p>
            </div>
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></div>
              <h3>Insight &amp; Analytics</h3>
              <p>Turn raw data into clear dashboards and plain-language insight, so leadership can see what's happening and act on it quickly.</p>
            </div>
            <div className="ai-cap">
              <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
              <h3>Secure Integration &amp; Deployment</h3>
              <p>We connect AI to the systems you already use, with privacy, access control and compliance considered from day one.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">Who We Serve</span>
            <h2>Built for the organizations we already partner with</h2>
            <p>The same trusted relationships ZEV has built across the Emirates for 20+ years — now extended into AI.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-ind-grid">
            <div className="ai-ind">
              <ZevImage id="1497366754035-f200968a6e72" w={700} alt="Government meeting room" />
              <div className="ov" />
              <div className="lbl"><strong>Government &amp; Federal</strong><span>Citizen services, document processing &amp; bilingual comms.</span></div>
            </div>
            <div className="ai-ind">
              <ZevImage id="1524758631624-e2822e304c36" w={700} alt="Corporate workspace" />
              <div className="ov" />
              <div className="lbl"><strong>Enterprise &amp; Corporate</strong><span>Staff copilots, knowledge bases &amp; back-office automation.</span></div>
            </div>
            <div className="ai-ind">
              <ZevImage id="1514933651103-005eec06c04b" w={700} alt="Hospitality venue" />
              <div className="ov" />
              <div className="lbl"><strong>Hospitality &amp; Retail</strong><span>Guest assistants, bookings &amp; multilingual support.</span></div>
            </div>
            <div className="ai-ind">
              <ZevImage id="1504307651254-35680f356dfd" w={700} alt="Operations and logistics" />
              <div className="ov" />
              <div className="lbl"><strong>Trading &amp; Operations</strong><span>Procurement, inventory insight &amp; supplier workflows.</span></div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="sec-head">
            <span className="eyebrow">How We Work</span>
            <h2>From idea to live system in four steps</h2>
            <p>A practical, low-risk path that keeps you in control at every stage.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-steps">
            <div className="ai-step">
              <div className="n">1</div>
              <h4>Discover</h4>
              <p>We sit with your team to understand the real bottlenecks and where AI will genuinely help.</p>
            </div>
            <div className="ai-step">
              <div className="n">2</div>
              <h4>Design</h4>
              <p>We propose a focused solution, scope and success measures — clear, in plain language.</p>
            </div>
            <div className="ai-step">
              <div className="n">3</div>
              <h4>Build &amp; Integrate</h4>
              <p>We develop, test and securely connect the solution to your existing tools and data.</p>
            </div>
            <div className="ai-step">
              <div className="n">4</div>
              <h4>Train &amp; Support</h4>
              <p>We train your people and stay on as a local partner to refine and grow the system.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CONTACT BAND */}
      <section className="ai-contact">
        <div className="wrap">
          <RevealWrapper>
            <span className="eyebrow">Let's Talk AI</span>
            <h2>Tell us what's slowing your team down.</h2>
            <p>Send us a message on WhatsApp or email and we'll show you, with your own examples, exactly where AI can save time. Bilingual support, UAE-based team, no obligation.</p>
          </RevealWrapper>
          <RevealWrapper className="ai-contact-cards">
            <a className="contact-card" href="https://api.whatsapp.com/send/?phone=971509191055&text=Hi%20ZEV%20AI%2C%20I%27d%20like%20to%20discuss%20an%20AI%20project." target="_blank" rel="noopener">
              <span className="cic wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
              </span>
              <span className="ct"><small>WhatsApp · AI enquiries</small><strong>+971 50 919 1055</strong></span>
              <span className="arr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </a>
            <a className="contact-card" href="https://api.whatsapp.com/send/?phone=971568831806&text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20ZEV%20AI%20partnership." target="_blank" rel="noopener">
              <span className="cic wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
              </span>
              <span className="ct"><small>WhatsApp · Direct line</small><strong>+971 56 883 1806</strong></span>
              <span className="arr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </a>
            <a className="contact-card" href="mailto:info@zev.ae?subject=ZEV%20AI%20Enquiry">
              <span className="cic em">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              </span>
              <span className="ct"><small>Email us</small><strong>info@zev.ae</strong></span>
              <span className="arr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </a>
          </RevealWrapper>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  );
}
