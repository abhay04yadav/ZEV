export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fname, lname, email, topic, message } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Log the submission — swap in an email service (Resend, SendGrid, etc.) here
  console.log('Contact form submission:', { fname, lname, email, topic, message });

  return res.status(200).json({ ok: true });
}
