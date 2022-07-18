import Link from "next/link";

export function Navigation() {
  return (
    <nav className="p-2 font-bold underline">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/my-first-page">First</Link>
        </li>
        <li>
          <Link href="/my-second-page">Second</Link>
        </li>
      </ul>
    </nav>
  );
}
