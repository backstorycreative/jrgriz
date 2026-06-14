import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsorship — JR Griz Football",
  description:
    "Sponsor Junior Grizzlies Football. Sponsorships and donations help cover equipment, uniforms, travel, training, and facility costs for Lincoln youth athletes.",
};

const covers = [
  { label: "Equipment & Uniforms", icon: "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" },
  { label: "Travel & Tournaments", icon: "M3 12h18M12 3l9 9-9 9" },
  { label: "Training & Facilities", icon: "M4 21V9l8-5 8 5v12M9 21v-6h6v6" },
  { label: "Scholarships for Families", icon: "M12 3l9 5-9 5-9-5zM21 8v6M7 11v5c2 2 8 2 10 0v-5" },
];

const tiers = [
  {
    name: "Bronze",
    price: "$250",
    desc: "Community supporter",
    feature: false,
    perks: [
      "Name listed on the team website",
      "Social media thank-you post",
      "Season-opening shout-out",
    ],
  },
  {
    name: "Silver",
    price: "$500",
    desc: "Game-day partner",
    feature: false,
    perks: [
      "Everything in Bronze",
      "Logo on the team website",
      "Banner displayed at home events",
    ],
  },
  {
    name: "Gold",
    price: "$1,000",
    desc: "Program champion",
    feature: true,
    perks: [
      "Everything in Silver",
      "Logo on team banner & sideline signage",
      "Recognition at the end-of-season banquet",
      "Featured sponsor spotlight",
    ],
  },
  {
    name: "Platinum",
    price: "$2,500+",
    desc: "Premier sponsor",
    feature: false,
    perks: [
      "Everything in Gold",
      "Logo on team apparel",
      "Presenting partner on select events",
      "Custom partnership package",
    ],
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <section className="page-hero has-photo">
        <div className="ph-photo">
          <Image
            src="/jrgriz-4.PNG"
            alt="Junior Grizzlies players on the field"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="ph-stripes" />
        <div className="wrap page-hero-in">
          <span className="eyebrow">Sponsorship</span>
          <h1>
            Help build
            <br />
            <span className="blue">the program.</span>
          </h1>
          <p className="lede">
            Junior Grizzlies Football is powered by families, coaches, and
            community partners. Your sponsorship keeps the program affordable and
            puts more young athletes on the field.
          </p>
        </div>
      </section>

      {/* What it funds */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>Where support goes.</h2>
            </div>
            <p className="sh-r">
              Every dollar goes directly to the athlete experience — not
              overhead.
            </p>
          </div>
          <div className="grid-2">
            {covers.map((c) => (
              <div className="tile coach" key={c.label} style={{ display: "flex", gap: "18px", alignItems: "center" }}>
                <div className="ti" style={{ marginBottom: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={c.icon} />
                  </svg>
                </div>
                <h3 style={{ marginBottom: 0 }}>{c.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="sec why">
        <div className="wrap">
          <div className="sec-head">
            <div className="sh-l">
              <h2>Choose your level.</h2>
            </div>
            <p className="sh-r">
              Prefer a custom package? We&apos;ll build one around your business
              and goals.
            </p>
          </div>
          <div className="tiers">
            {tiers.map((t) => (
              <div className={`tier${t.feature ? " feature" : ""}`} key={t.name}>
                <span className="tname">{t.name}</span>
                <div className="tprice">{t.price}</div>
                <div className="tdesc">{t.desc}</div>
                <ul>
                  {t.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${t.feature ? "btn-primary" : "btn-ghost"}`}
                >
                  Become a Sponsor
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booster + donate */}
      <section className="sec">
        <div className="wrap grid-2">
          <div className="tile">
            <div className="ti">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" />
                <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M15 20c0-2 1-3.5 3-4" />
              </svg>
            </div>
            <h3>Join the Booster Club</h3>
            <p>
              The Booster Club is the heartbeat of the Griz — parents and fans who
              volunteer, fundraise, and make game days happen. Membership is open
              to every family.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link href="/contact" className="btn btn-ghost">
                Join the Club
              </Link>
            </div>
          </div>
          <div className="tile">
            <div className="ti">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3 1.5 6 4.5 3-3 4-4.5 6-4.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
              </svg>
            </div>
            <h3>Make a Donation</h3>
            <p>
              One-time and recurring donations of any size help fund scholarships
              so cost is never the reason a kid can&apos;t play. Donations may be
              tax-deductible — ask us for details.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link href="/contact" className="btn btn-primary">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta-band">
          <div className="wrap ct-in">
            <div>
              <h2>
                Let&apos;s talk
                <br />
                sponsorship.
              </h2>
              <p>
                Tell us about your business and we&apos;ll send our sponsorship
                packet with everything you need to get started.
              </p>
            </div>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Become a Sponsor
              </Link>
              <a href="mailto:football@jrgriz.com" className="btn btn-ghost btn-lg">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
