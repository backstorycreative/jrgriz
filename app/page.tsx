import Image from "next/image";
import SiteNav from "./components/SiteNav";
import Wordmark from "./components/Wordmark";

const arrow = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const programs = [
  {
    n: "01",
    title: "Tackle Football",
    copy: "Fall tackle football focused on fundamentals, competition, teamwork, and preparation for the next level.",
    cta: "Learn More",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z" />
        <path d="M9.5 14.5l5-5M10.5 11l1.2 1.2M13 8.5l1.2 1.2" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "7v7 Football",
    copy: "Offseason passing-game development focused on timing, route running, coverage, communication, and football IQ.",
    cta: "Learn More",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Winter Camps",
    copy: "Offseason training focused on fundamentals, speed, agility, position work, and competitive reps.",
    cta: "View Camps",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M4 7l16 10M20 7L4 17M12 5l3 2-3 2-3-2zM12 19l3-2-3-2-3 2z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Summer Camps",
    copy: "Preseason preparation focused on skills, conditioning, confidence, and team concepts.",
    cta: "View Camps",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: "Elite Coaching",
    copy: "Experienced coaches focused on technique, safety, and player development.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
      </svg>
    ),
  },
  {
    title: "Competitive Play",
    copy: "Real game reps against strong competition in the Metro Youth Football League.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
      </svg>
    ),
  },
  {
    title: "Skill-Specific Training",
    copy: "Position work and fundamentals tailored to where each athlete is in their growth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const steps = [
  {
    sn: "01 — WINTER",
    title: "Winter Camps",
    copy: "Build the base — fundamentals, speed, and agility.",
  },
  {
    sn: "02 — SPRING",
    title: "7v7 Football",
    copy: "Compete and sharpen the passing game.",
  },
  {
    sn: "03 — SUMMER",
    title: "Summer Camps",
    copy: "Refine skills and prepare for the fall season.",
  },
  {
    sn: "04 — FALL",
    title: "Tackle Football",
    copy: "Apply development in competitive league play.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-stripes" />
        <div className="wrap hero-in">
          <div>
            <span className="hero-tag">
              <b>2026 Season</b> · Lincoln, NE
            </span>
            <h1 className="hh">
              Year-round
              <br />
              football
              <br />
              <span className="blue">development.</span>
            </h1>
            <p className="sub">
              Junior Grizzlies Football develops young athletes through tackle
              football, 7v7, winter camps, summer camps, competitive play, and
              skill-specific training.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-lg">
                Register Now
              </a>
              <a href="#programs" className="btn btn-ghost btn-lg">
                View Programs
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="glow" />
            <div className="frame">
              <Image
                src="/jrgriz-bear-dark.png"
                alt="JR Griz bear logo"
                fill
                priority
                sizes="(max-width: 600px) 280px, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="sec" id="programs">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <span className="eyebrow">Programs</span>
              <h2>
                Four programs.
                <br />
                One pathway.
              </h2>
            </div>
            <p className="sh-r">
              Train every part of the year — tackle football, 7v7, and seasonal
              camps built to move athletes forward.
            </p>
          </div>
          <div className="cards">
            {programs.map((p) => (
              <div className="card" key={p.n}>
                <div className="ico">{p.icon}</div>
                <div className="knum">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
                <a href="#" className="more">
                  {p.cta} {arrow}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="sec why">
        <div className="wrap why-grid">
          <div>
            <span className="eyebrow">Why Junior Grizzlies</span>
            <h2>Built to prepare players for high school &amp; beyond.</h2>
            <p className="wcopy">
              Junior Grizzlies Football is dedicated to developing young
              athletes through elite coaching, competitive play, and
              skill-specific training. The program is built to prepare players
              for high school and beyond while providing a premier football
              experience supported by families, coaches, and community partners.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <div className="pi">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <span className="eyebrow">Program Pathway</span>
              <h2>
                One system,
                <br />
                every season.
              </h2>
            </div>
            <p className="sh-r">
              Winter to fall — a development system designed so each program
              builds on the last.
            </p>
          </div>
          <div className="pathway">
            {steps.map((s, i) => (
              <div className="step" key={s.sn}>
                <div className="sbar" />
                <div className="sn">{s.sn}</div>
                <h4>{s.title}</h4>
                <p>{s.copy}</p>
                {i < steps.length - 1 && <div className="arr">→</div>}
              </div>
            ))}
          </div>
          <p className="pathway-copy">
            Our programs are designed to work together. Athletes can train in the
            winter, compete through 7v7, sharpen their skills in summer camps, and
            apply their development during fall tackle football.
          </p>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="cta-wrap" id="sponsor">
        <div className="cta-band">
          <div className="wrap ct-in">
            <div>
              <span className="eyebrow" style={{ color: "#06283a" }}>
                Sponsorship
              </span>
              <h2 style={{ marginTop: "12px" }}>
                Help build
                <br />
                the program.
              </h2>
              <p>
                Sponsorships and donations help cover essential costs including
                equipment, uniforms, travel, training, and facility expenses.
              </p>
            </div>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-lg">
                Become a Sponsor
              </a>
              <a href="#" className="btn btn-ghost btn-lg">
                Join the Booster Club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <Wordmark />
              <p>Year-round football development for Lincoln athletes.</p>
            </div>
            <div className="foot-col">
              <h5>Programs</h5>
              <a href="#">Tackle Football</a>
              <a href="#">7v7 Football</a>
              <a href="#">Winter Camps</a>
              <a href="#">Summer Camps</a>
            </div>
            <div className="foot-col">
              <h5>Organization</h5>
              <a href="#">Coaching</a>
              <a href="#">Sponsorship</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="foot-col">
              <h5>Support</h5>
              <a href="#">Become a Sponsor</a>
              <a href="#">Join the Booster Club</a>
              <a href="#">Donate</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Junior Grizzlies Football · Lincoln, Nebraska</span>
            <a href="mailto:football@jrgriz.com">football@jrgriz.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
