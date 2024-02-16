import { useEffect, useState } from "react";
const Navbar = ({ active }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <div>
      <nav
        className={`navbar navbar-dark navbar-expand-lg navbar-background  ${
          scroll ? "fixed-top" : ""
        }`}
      >
        <div className="container">
          <div className="navbar-brand">Jefli Jonathan</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${active == "home" ? "active" : ""}`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${active == "about" ? "active" : ""}`}
                  href="/about"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${active == "product" ? "active" : ""}`}
                  href="/products"
                >
                  My Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
