import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs — JR Griz Football",
  description:
    "Four year-round programs: Tackle Football, 7v7, Winter Camps, and Summer Camps — a connected development pathway for Lincoln youth athletes.",
};

const programs = [
  {
    n: "01",
    title: "Tackle Football",
    photo: "/jrgriz-6.PNG",
    season: "Fall · Aug–Nov",
    ages: "Grades 3–8",
    level: "Competitive League",
    intro:
      "Our flagship program. Fall tackle football puts a season of development into live, competitive play in the Metro Youth Football League — where fundamentals, teamwork, and preparation for the next level come together.",
    points: [
      "Position-specific coaching on offense, defense, and special teams",
      "Certified, safety-first contact and tackling progressions",
      "Full-season league schedule with playoffs",
      "Game film and feedback for older divisions",
    ],
  },
  {
    n: "02",
    title: "7v7 Football",
    photo: "/jrgriz-2.PNG",
    season: "Spring · Mar–May",
    ages: "Grades 4–8",
    level: "Tournament Play",
    intro:
      "Offseason passing-game development that sharpens the skill positions. 7v7 strips the game down to timing, route running, coverage, and communication — building the football IQ that shows up in the fall.",
    points: [
      "Route trees, releases, and timing with the quarterback",
      "Man and zone coverage recognition for defensive backs",
      "Up-tempo, high-rep tournament weekends",
      "Decision-making and pre-snap communication",
    ],
  },
  {
    n: "03",
    title: "Winter Camps",
    photo: "/jrgriz-3.PNG",
    season: "Winter · Dec–Feb",
    ages: "Grades 3–8",
    level: "Skill Development",
    intro:
      "The base of the pathway. Indoor winter training focuses on the athletic foundation — fundamentals, speed, agility, and position work — with competitive reps that keep players sharp through the offseason.",
    points: [
      "Speed, agility, and movement mechanics",
      "Footwork and fundamentals by position",
      "Strength and conditioning appropriate to age",
      "Competitive drills and small-sided games",
    ],
  },
  {
    n: "04",
    title: "Summer Camps",
    photo: "/jrgriz-4.PNG",
    season: "Summer · Jun–Jul",
    ages: "Grades 3–8",
    level: "Preseason Prep",
    intro:
      "The on-ramp to fall. Summer camps build skills, conditioning, confidence, and team concepts so athletes arrive in August ready to compete — and ready to lead.",
    points: [
      "Install of core team concepts and terminology",
      "Conditioning to build a fall-ready base",
      "Skill stations and individual development",
      "Team-building and leadership reps",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero has-photo">
        <div className="ph-photo">
          <Image
            src="/jrgriz-2.PNG"
            alt="Junior Grizzlies quarterback throwing"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="ph-stripes" />
        <div className="wrap page-hero-in">
          <span className="eyebrow">Programs</span>
          <h1>
            Four programs.
            <br />
            <span className="blue">One pathway.</span>
          </h1>
          <p className="lede">
            Junior Grizzlies athletes can train every part of the year. Each
            program is built to stand on its own — and to feed the next, so
            development never stops between seasons.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {programs.map((p) => (
            <div className="prow" key={p.n} id={p.title.toLowerCase().replace(/\s+/g, "-")}>
              <div className="prow-media">
                <Image
                  src={p.photo}
                  alt={`${p.title} — Junior Grizzlies athletes`}
                  fill
                  sizes="(max-width: 980px) 100vw, 45vw"
                />
                <span className="knum">{p.n}</span>
              </div>
              <div>
                <span className="eyebrow">{p.season}</span>
                <h3>{p.title}</h3>
                <div className="meta">
                  <span className="tag">{p.ages}</span>
                  <span className="tag">{p.level}</span>
                </div>
                <p className="lead">{p.intro}</p>
                <ul className="checklist">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta-band">
          <div className="wrap ct-in">
            <div>
              <span className="eyebrow" style={{ color: "#06283a" }}>
                Ready to play
              </span>
              <h2 style={{ marginTop: "12px" }}>
                Register for
                <br />
                the 2026 season.
              </h2>
              <p>
                Spots fill fast. Reserve your athlete&apos;s place in any program
                and we&apos;ll follow up with schedule and equipment details.
              </p>
            </div>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Register Now
              </Link>
              <Link href="/coaching" className="btn btn-ghost btn-lg">
                Meet the Coaches
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
