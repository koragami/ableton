import "./Hero.css";

export default function Hero() {
  return (
    <>
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
        <div id="hero-container"></div>
      </section>
    </>
  );
}
