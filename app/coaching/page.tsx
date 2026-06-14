import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coaching — JR Griz Football",
  description:
    "Experienced, safety-first coaching focused on technique, development, and preparing Junior Grizzlies athletes for high school and beyond.",
};

const principles = [
  {
    title: "Technique First",
    copy: "Every rep is coached. We teach proper fundamentals: blocking, tackling, footwork, and ball skills, so habits built today hold up at the next level.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
      </svg>
    ),
  },
  {
    title: "Safety as Standard",
    copy: "Coaches are trained in modern, safety-first contact progressions and concussion awareness. Health and well-being come before any outcome on the scoreboard.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      </svg>
    ),
  },
  {
    title: "Develop the Whole Athlete",
    copy: "Speed, strength, and football IQ matter, but so do confidence, accountability, and leadership. We coach the person as much as the player.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Compete the Right Way",
    copy: "We play to win and we play with class. Athletes learn to compete hard, respect opponents and officials, and represent the Griz the right way.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
      </svg>
    ),
  },
  {
    title: "Every Position, Every Player",
    copy: "Position-specific coaching means linemen, skill players, and defenders all get focused, expert instruction, not just the ball-carriers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Built for the Next Level",
    copy: "Our terminology, concepts, and expectations are designed to make the jump to high school football feel familiar, not foreign.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
      </svg>
    ),
  },
];

const staff = [
  { mono: "HC", name: "Head Coach", role: "Program Director", note: "Leads program vision, curriculum, and game-day strategy across all divisions." },
  { mono: "OC", name: "Offensive Coordinator", role: "Offense & 7v7", note: "Builds the passing game and skill development through the spring 7v7 season." },
  { mono: "DC", name: "Defensive Coordinator", role: "Defense & Fundamentals", note: "Installs defensive concepts and leads tackling and pursuit fundamentals." },
  { mono: "SC", name: "Skills & Conditioning", role: "Camps & Development", note: "Runs speed, agility, and position work through winter and summer camps." },
];

export default function CoachingPage() {
  return (
    <>
      <section className="page-hero has-photo">
        <div className="ph-photo">
          <Image
            src="/jrgriz-1.PNG"
            alt="Junior Grizzlies team huddle with coach"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="ph-stripes" />
        <div className="wrap page-hero-in">
          <span className="eyebrow">Coaching</span>
          <h1>
            Coached like it
            <br />
            <span className="blue">matters.</span>
          </h1>
          <p className="lede">
            Junior Grizzlies coaches bring real experience and a development-first
            approach. The goal isn&apos;t just to win on Saturday. It&apos;s to
            build athletes who are ready for high school football and the lessons
            that come with it.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>How we coach.</h2>
            </div>
            <p className="sh-r">
              Six principles guide everything from a Tuesday practice to a
              playoff Saturday.
            </p>
          </div>
          <div className="grid-3">
            {principles.map((p) => (
              <div className="tile" key={p.title}>
                <div className="ti">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec why">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>Meet the staff.</h2>
            </div>
            <p className="sh-r">
              Coach bios and photos are on the way. Want to join the staff?{" "}
              <Link href="/contact" style={{ color: "var(--blue)" }}>
                Get in touch.
              </Link>
            </p>
          </div>
          <div className="grid-2">
            {staff.map((c) => (
              <div className="tile coach" key={c.name}>
                <div className="avatar">
                  <span className="mono">{c.mono}</span>
                </div>
                <div className="role">{c.role}</div>
                <h3>{c.name}</h3>
                <p>{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta-band">
          <div className="wrap ct-in">
            <div>
              <h2>
                Coach with
                <br />
                the Griz.
              </h2>
              <p>
                We&apos;re always looking for experienced, character-first coaches
                and volunteers who want to develop young athletes the right way.
              </p>
            </div>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
              <Link href="/programs" className="btn btn-ghost btn-lg">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
