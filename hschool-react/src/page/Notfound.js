import "../styles/Notfound.css";

function Notfound() {
  return (
    <div>
      <header className="header-notfound">
        <div className="wrapper-notfound">
          <div className="logo">Hschool</div>
          <nav>
            <a href="LoginPage" className="login">
              Login →
            </a>
            <button className="sign">Sign Up</button>
          </nav>
        </div>
        <div className="notfound-line"></div>
      </header>
      <main>
        <section className="notfound">
          <div className="left-notfound">
            <h5>Error 404</h5>
            <h1>Hey Buddy</h1>
            <p>We can’t seem to find the page you are looking for.</p>

            <button className="notfound-btn">Go home</button>
          </div>
          <div className="right-notfound"></div>
        </section>
      </main>
      <footer className="footer-notfound">
        <div className="footer-notfound-wrap">
          <div className="top">
            <div className="top-nav">
              <p>Home</p>
              <p>Textbook</p>
              <p>Statistics</p>
              <p>Sprint</p>
            </div>
            <div className="top-nav">
              <p>Alex</p>
              <p>Gabriel</p>
              <p>Marcus</p>
            </div>
          </div>
          <div className="notfound-line"></div>
          <div className="bottom">
            <div className="bottom-nav">
              <div className="pig"></div>
              <div className="gt"></div>
              <div className="youtube"></div>
            </div>
            <div className="bottom-info">
              ©2021 Hschool. Project for <a href="#">Hschool</a>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Notfound;
