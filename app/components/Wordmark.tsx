import Link from "next/link";
import Image from "next/image";

export default function Wordmark() {
  return (
    <Link href="/" className="mark" aria-label="JR Griz Football home">
      <Image
        src="/jr-griz-bear-mark.svg"
        alt="JR Griz bear mark"
        width={39}
        height={44}
        className="markbear"
        priority
        unoptimized
      />
      <span className="wordtext">
        <span className="wt1">
          JR <b>GRIZ</b>
        </span>
        <span className="wt2">FOOTBALL</span>
      </span>
    </Link>
  );
}
