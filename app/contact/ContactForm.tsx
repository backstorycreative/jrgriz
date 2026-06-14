"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const program = String(data.get("program") || "");
    const message = String(data.get("message") || "");

    // No backend yet — open the visitor's email client pre-filled.
    const subject = encodeURIComponent(`JR Griz inquiry — ${program || "General"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProgram: ${program}\n\n${message}`
    );
    window.location.href = `mailto:football@jrgriz.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <h3>Thanks — you&apos;re almost there.</h3>
        <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6 }}>
          Your email app should have opened with your message ready to send. If it
          didn&apos;t, email us directly at{" "}
          <a href="mailto:football@jrgriz.com" style={{ color: "var(--blue)" }}>
            football@jrgriz.com
          </a>
          .
        </p>
        <div style={{ marginTop: "18px" }}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setSent(false)}
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required placeholder="Athlete or parent name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="(402) 555-0123" />
      </div>
      <div className="field">
        <label htmlFor="program">I&apos;m interested in</label>
        <select id="program" name="program" defaultValue="">
          <option value="" disabled>
            Select a program…
          </option>
          <option>Tackle Football</option>
          <option>7v7 Football</option>
          <option>Winter Camps</option>
          <option>Summer Camps</option>
          <option>Sponsorship</option>
          <option>Coaching / Volunteering</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="Tell us a bit about your athlete or your question…" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        Send Message
      </button>
      <p className="form-note">
        This form opens your email app to send the message. We typically reply
        within a couple of days.
      </p>
    </form>
  );
}
