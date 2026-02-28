import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fac-footer mt-5">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="text-heading-md text-accent">Focused & Creative</h5>
            <p className="text-body-sm text-muted mt-3">
              Modern digital experiences built with intention, clarity, and
              creative discipline.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="text-body-lg fw-semibold">Navigation</h6>
            <ul className="list-unstyled mt-3 text-body-sm">
              <li className="mb-2">
                <Link className="fac-footer-link" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="fac-footer-link" to="/about">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link className="fac-footer-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link className="fac-footer-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-body-lg fw-semibold">Technology</h6>
            <p className="text-body-sm text-muted mt-3">
              Built with React, Vite, and Bootstrap.
            </p>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="text-center text-body-sm text-muted">
          © {new Date().getFullYear()} Focused & Creative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
