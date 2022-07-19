import Link from "next/link";

export function Navigation() {
  return (
    <nav className="font-black">
      <ul className="flex items-center gap-2 select-none">
        <li className="flex items-center justify-center rounded-lg hover:bg-black hover:bg-opacity-30 transition-all">
          <Link href="/" passHref>
            <a className="px-4 p-2">Articles</a>
          </Link>
        </li>
        <li className="flex items-center justify-center rounded-lg hover:bg-black hover:bg-opacity-30 transition-all">
          <Link href="/my-first-page" passHref>
            <a className="px-4 p-2">Books</a>
          </Link>
        </li>
        <li className="flex items-center justify-center rounded-lg hover:bg-black hover:bg-opacity-30 transition-all">
          <Link href="/my-second-page" passHref>
            <a className="px-4 p-2">Workshops</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
