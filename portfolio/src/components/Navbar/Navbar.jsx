function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white">
      <h1 className="text-2xl font-bold">
        Alisha
      </h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;