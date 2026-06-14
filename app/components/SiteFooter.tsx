import Link from "next/link";
import Wordmark from "./Wordmark";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Wordmark />
            <p>Year-round football development for Lincoln athletes.</p>
          </div>
          <div className="foot-col">
            <h5>Programs</h5>
            <Link href="/programs">Tackle Football</Link>
            <Link href="/programs">7v7 Football</Link>
            <Link href="/programs">Winter Camps</Link>
            <Link href="/programs">Summer Camps</Link>
          </div>
          <div className="foot-col">
            <h5>Organization</h5>
            <Link href="/coaching">Coaching</Link>
            <Link href="/sponsorship">Sponsorship</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Support</h5>
            <Link href="/sponsorship">Become a Sponsor</Link>
            <Link href="/sponsorship">Join the Booster Club</Link>
            <Link href="/sponsorship">Donate</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Junior Grizzlies Football · Lincoln, Nebraska</span>
          <a href="mailto:football@jrgriz.com">football@jrgriz.com</a>
        </div>
      </div>
    </footer>
  );
}
