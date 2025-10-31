import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    // TODO: send to your backend/email service here
    // Example placeholder:
    console.log({ name, message });

    setStatus('success');
    setName('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in touch</h1>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Your name</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="message" className="form-label">Your message</label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Describe your query..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            required
          />
        </div>

        <button type="submit" className="form-submit">Submit</button>

        {status === 'success' && (
          <p className="form-status success">Thanks! We’ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="form-status error">Please fill out both fields.</p>
        )}
      </form>
    </div>
  );
}