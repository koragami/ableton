import "./Hero.css";

export default function Hero() {
  return (
    <div className="page">
      <div className="above-hero">
        <div id="about-jobs-apprenticeships">
          <ul>
            <li>
              <a id="orange-text" href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#apprenticeships">Apprenticeships</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="hero-section">
        <div className="hero-container">
          <div id="background-image">
            <img
              src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=jpg"
              alt="This picture contains a person working for ableton"
            />
            <h1 id="header">Ableton</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
