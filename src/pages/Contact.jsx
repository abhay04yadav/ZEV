import { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import RevealWrapper from '../components/ui/RevealWrapper';
import FooterCTA from '../components/ui/FooterCTA';
import PageBanner from '../components/ui/PageBanner';

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', topic: 'General enquiry', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = form.email.trim() === '' ? 'Please enter your email.' : 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Please tell us a little about what you need.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setSuccess(true);
    setForm({ fname: '', lname: '', email: '', topic: 'General enquiry', message: '' });
    setErrors({});
    setSubmitting(false);
  };

  const field = (name) => ({
    value: form[name],
    onChange: (e) => { setForm(f => ({ ...f, [name]: e.target.value })); setErrors(er => ({ ...er, [name]: undefined })); },
  });

  return (
    <>
      <TopBar />
      <Navbar />

      <PageBanner
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Contact' }]}
        eyebrow="Get in Touch"
        title="Let's talk about what your organization needs."
        subtitle="Reach our team by phone, email, or WhatsApp — or send us a message and we'll get back to you promptly."
      />

      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="contact-split">
            {/* LEFT */}
            <RevealWrapper className="contact-info">
              <span className="eyebrow">Contact Details</span>
              <h2>We're here to help</h2>
              <p>Whether you're a government body, a design firm, or an enterprise sourcing supplies — our team is ready to deliver tailored solutions.</p>
              <div className="contact-list">
                <a className="ci" href="tel:+971509191055">
                  <span className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                  <div><small>Phone</small><strong>+971 50 919 1055</strong></div>
                </a>
                <a className="ci" href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener">
                  <span className="cic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg></span>
                  <div><small>WhatsApp</small><strong>Message us instantly</strong></div>
                </a>
                <a className="ci" href="mailto:info@zev.ae">
                  <span className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></span>
                  <div><small>Email</small><strong>info@zev.ae</strong></div>
                </a>
                <div className="ci">
                  <span className="cic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                  <div><small>Location</small><strong>Dubai, United Arab Emirates</strong></div>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://www.facebook.com/ZEV.Dubai" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
                <a href="https://www.instagram.com/zev.duabi" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                <a href="https://www.linkedin.com/company/zev-gt/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter / X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/></svg></a>
              </div>
              <iframe
                className="map-frame"
                title="ZEV General Trading location — Dubai, UAE"
                src="https://www.google.com/maps?q=Dubai,United%20Arab%20Emirates&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </RevealWrapper>

            {/* RIGHT: form */}
            <RevealWrapper className="contact-form">
              <h3>Send us a message</h3>
              <p className="cf-sub">Fill in the form and our team will respond as soon as possible.</p>
              {success && (
                <div className="form-success show">Thanks for reaching out — your message has been received. We'll be in touch shortly.</div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="Your first name" autoComplete="given-name" {...field('fname')} />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Your last name" autoComplete="family-name" {...field('lname')} />
                  </div>
                </div>
                <div className={`field${errors.email ? ' invalid' : ''}`}>
                  <label htmlFor="email">Your Email <span style={{ color: 'var(--teal)' }}>*</span></label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" {...field('email')} />
                  {errors.email && <div className="err-msg">{errors.email}</div>}
                </div>
                <div className="field">
                  <label htmlFor="topic">I'm interested in</label>
                  <select id="topic" name="topic" {...field('topic')}>
                    <option>General enquiry</option>
                    <option>Camera &amp; Laptop</option>
                    <option>Furniture</option>
                    <option>Corporate Gifts</option>
                    <option>Hospitality Equipment</option>
                    <option>Safety</option>
                    <option>Soundproof Office Booth</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={`field${errors.message ? ' invalid' : ''}`}>
                  <label htmlFor="message">Message <span style={{ color: 'var(--teal)' }}>*</span></label>
                  <textarea id="message" name="message" placeholder="Tell us a little about what you need…" required {...field('message')} />
                  {errors.message && <div className="err-msg">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
                <p className="form-note">By submitting, you agree to be contacted by ZEV General Trading regarding your enquiry.</p>
              </form>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <FooterCTA
        title="Prefer to talk right now?"
        desc="Our team is available on WhatsApp and by phone during business hours across the UAE."
      >
        <a href="https://api.whatsapp.com/send/?phone=971509191055" target="_blank" rel="noopener" className="btn btn-wa">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
          Chat on WhatsApp
        </a>
        <a href="tel:+971509191055" className="btn btn-sand">Call +971 50 919 1055</a>
      </FooterCTA>

      <Footer />
      <FloatingButtons />
    </>
  );
}
