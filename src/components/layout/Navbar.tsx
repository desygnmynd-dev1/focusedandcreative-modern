import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand text-heading-lg text-accent" to="/">
          Focused & Creative
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#facNavbar"
          aria-controls="facNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="facNavbar">
          <ul className="navbar-nav gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link text-body-md" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-body-md" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-body-md" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-body-md" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}