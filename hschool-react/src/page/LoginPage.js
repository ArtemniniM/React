import "../styles/Login.css";

function LoginPage() {
  return (
    <div>
      <header className="header-login">
        <div className="wrapper-log">
          <div className="logo">Hschool</div>
          <nav>
            <a href="/LoginPage" className="login">
              Login →
            </a>
            <button className="sign">Sign Up</button>
          </nav>
        </div>
        <div className="log-line"></div>
      </header>
      <main>
        <section className="log-in">
          <div className="left-log">
            <h1>Sign Up</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Пароль" />
            <button className="log-btn">Login</button>
          </div>
          <div className="right-log"></div>
        </section>
      </main>
      <footer className="footer-log">
        <div className="footer-log-wrap">
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
          <div className="log-line"></div>
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
export default LoginPage;
