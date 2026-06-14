import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="ph-stripes" />
      <div className="wrap page-hero-in">
        <span className="eyebrow">Error 404</span>
        <h1>
          Off the
          <br />
          <span className="blue">field.</span>
        </h1>
        <p className="lede">
          We couldn&apos;t find that page. It may have moved, or the link was
          mistyped. Let&apos;s get you back in the game.
        </p>
        <div className="nf-actions">
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link href="/programs" className="btn btn-ghost btn-lg">
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
