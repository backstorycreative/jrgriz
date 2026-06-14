import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — JR Griz Football",
  description:
    "Get in touch with Junior Grizzlies Football in Lincoln, Nebraska — register an athlete, ask about programs, sponsor the team, or join the coaching staff.",
};

const faqs = [
  {
    q: "What ages and grades can play?",
    a: "Our programs serve athletes in roughly grades K–8, with divisions grouped by age and grade. Reach out and we'll point you to the right division for your athlete.",
  },
  {
    q: "Do players need experience?",
    a: "No. Many athletes start with us as beginners. Our camps and fundamentals-first coaching are built to bring new players up to speed safely and confidently.",
  },
  {
    q: "What equipment is provided?",
    a: "Tackle football includes core protective equipment; we'll send a full equipment and gear list after registration. Camps and 7v7 require minimal gear.",
  },
  {
    q: "Is financial assistance available?",
    a: "Yes. We never want cost to keep a kid off the field. Ask about scholarships funded by our sponsors and donors when you contact us.",
  },
  {
    q: "How do I sponsor the team?",
    a: "Visit our Sponsorship page for tiers and details, or select 'Sponsorship' in the form and we'll send our sponsorship packet.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero has-photo">
        <div className="ph-photo">
          <Image
            src="/jrgriz-3.PNG"
            alt="Junior Grizzlies players taking the field"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="ph-stripes" />
        <div className="wrap page-hero-in">
          <span className="eyebrow">Contact</span>
          <h1>
            Let&apos;s get
            <br />
            <span className="blue">you started.</span>
          </h1>
          <p className="lede">
            Questions about programs, registration, sponsorship, or coaching?
            Send us a note and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap contact-grid">
          <div>
            <h2 style={{
              fontFamily: "var(--saira)", fontStyle: "italic", fontWeight: 900,
              textTransform: "uppercase", fontSize: "34px", lineHeight: ".95",
              margin: "12px 0 24px",
            }}>
              We&apos;d love to hear from you.
            </h2>
            <ContactForm />
          </div>

          <div className="contact-info">
            <div className="info-row">
              <div className="ci">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" /><path d="M3 6l9 7 9-7" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:football@jrgriz.com">football@jrgriz.com</a>
              </div>
            </div>
            <div className="info-row">
              <div className="ci">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Lincoln, Nebraska</p>
              </div>
            </div>
            <div className="info-row">
              <div className="ci">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
              </div>
              <div>
                <h4>Season</h4>
                <p>Year-round programs · 2026 registration open</p>
              </div>
            </div>
            <div className="info-row">
              <div className="ci">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <div>
                <h4>Get Involved</h4>
                <p>Coach, volunteer, or join the Booster Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec why">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>Common questions.</h2>
            </div>
            <p className="sh-r">
              Don&apos;t see your question? Send it along and we&apos;ll answer
              directly.
            </p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
