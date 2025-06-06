import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="main-navigation-bar">
      <div className="main-navigation__left">
        <div id="logo">
          <svg
            role="img"
            aria-label="Logo Ableton"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 21"
          >
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
          <div id="menu">
            Menu <span id="menu-icon">▼</span>
          </div>
        </div>
        <div id="main-navigation-bar__left__links">
          <ul>
            <li>
              <a href="#home">Live</a>
            </li>
            <li>
              <a href="#push">Push</a>
            </li>
            <li>
              <a href="#move">Move</a>
            </li>
            <li>
              <a href="#note">Note</a>
            </li>
            <li>
              <a href="#links">Link</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#packs">Packs</a>
            </li>
            <li>
              <a href="#help">Help</a>
            </li>
            <li>
              <a id="more" href="#more">
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_navigation__right">
        <div id="main-navigation-bar__right__links">
          <ul>
            <li>
              <a id="try-live" href="#try-live-12-free-page">
                Try Live 12 for free
              </a>
            </li>
            <li>
              <a href="#log-in-or-register-page">Log in or register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
