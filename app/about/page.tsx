import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — JR Griz Football",
  description:
    "Junior Grizzlies Football is a year-round youth football development program in Lincoln, Nebraska, built to prepare players for high school and beyond.",
};

const values = [
  {
    title: "Development Over Everything",
    copy: "Wins are a byproduct. Our north star is the long-term growth of every athlete, on the field, in the classroom, and in life.",
  },
  {
    title: "Premier Experience",
    copy: "From coaching to facilities to game days, we hold a high standard so players feel what a first-class football program is like.",
  },
  {
    title: "Family & Community",
    copy: "The Griz are powered by parents, volunteers, and local partners. We win together and we show up for each other.",
  },
  {
    title: "Accountability & Respect",
    copy: "Players learn to be on time, work hard, and respect teammates, opponents, and officials, habits that carry far beyond football.",
  },
];

const stats = [
  { num: "4", lbl: "Programs, year-round" },
  { num: "K–8", lbl: "Grades served" },
  { num: "12mo", lbl: "Development calendar" },
  { num: "1", lbl: "Goal: ready for the next level" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero has-photo">
        <div className="ph-photo">
          <Image
            src="/jrgriz-5.PNG"
            alt="Junior Grizzlies athlete on the field"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="ph-stripes" />
        <div className="wrap page-hero-in">
          <span className="eyebrow">About</span>
          <h1>
            More than
            <br />
            <span className="blue">a season.</span>
          </h1>
          <p className="lede">
            Junior Grizzlies Football is a year-round youth football development
            program in Lincoln, Nebraska, built to prepare players for high
            school and beyond while delivering a premier football experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="sec">
        <div className="wrap why-grid">
          <div>
            <h2 style={{
              fontFamily: "var(--saira)", fontStyle: "italic", fontWeight: 900,
              textTransform: "uppercase", fontSize: "44px", lineHeight: ".95",
              margin: "14px 0 18px",
            }}>
              Develop the athlete. Build the person.
            </h2>
            <p className="lead">
              We&apos;re dedicated to developing young athletes through elite
              coaching, competitive play, and skill-specific training. Every
              program is designed to build the fundamentals, confidence, and
              football IQ players need to succeed at the high school level.
            </p>
            <p className="lead">
              Just as importantly, we believe football teaches lessons that last:
              discipline, accountability, teamwork, and resilience. That&apos;s the
              standard we hold, win or lose.
            </p>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec why">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>Our values.</h2>
            </div>
            <p className="sh-r">
              The principles behind every practice, camp, and game day.
            </p>
          </div>
          <div className="grid-2">
            {values.map((v) => (
              <div className="tile" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* League / community */}
      <section className="sec">
        <div className="wrap grid-2">
          <div className="tile">
            <div className="ti">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
              </svg>
            </div>
            <h3>Competitive League Play</h3>
            <p>
              Our tackle teams compete in the Metro Youth Football League, giving
              athletes real game reps against strong competition across the
              region, the kind of experience that accelerates development.
            </p>
          </div>
          <div className="tile">
            <div className="ti">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />
              </svg>
            </div>
            <h3>Rooted in Lincoln</h3>
            <p>
              We&apos;re proud to be a Lincoln, Nebraska program. Families,
              schools, and local businesses make the Griz possible, and
              we&apos;re committed to giving back to the community that supports
              us.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta-band">
          <div className="wrap ct-in">
            <div>
              <h2>
                Become part
                <br />
                of the program.
              </h2>
              <p>
                Whether you want to play, coach, sponsor, or volunteer, there&apos;s
                a place for you with Junior Grizzlies Football.
              </p>
            </div>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Register Now
              </Link>
              <Link href="/programs" className="btn btn-ghost btn-lg">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
