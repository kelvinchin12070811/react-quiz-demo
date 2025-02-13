import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex flex-row justify-between align-middle p-2 absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-transparent">
      <ul className="flex flex-row justify-around items-center gap-3 text-xl bg-transparent">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#quiz">Quiz</Link>
        </li>
        <li>
          <Link href="/">Topics</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>

      <section className="flex flex-row items-center gap-3 cursor-pointer">
        <span className="material-icons block" style={{ fontSize: 32 }}>
          account_circle
        </span>
        <div className="flex flex-row items-center">Hello! Admin</div>
      </section>
    </nav>
  );
}
