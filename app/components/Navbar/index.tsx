export function Navbar() {
  return (
    <nav className="flex flex-row justify-between align-middle p-2 absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-transparent">
      <ul className="flex flex-row justify-around items-center gap-3 text-xl bg-transparent">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Quiz</a>
        </li>
        <li>
          <a href="/">Topics</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
      </ul>

      <section className="flex flex-row items-center gap-3">
        <span className="material-icons block" style={{ fontSize: 32 }}>
          account_circle
        </span>
        <div className="flex flex-row items-center">Hello! Admin</div>
      </section>
    </nav>
  );
}
