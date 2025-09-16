import "../styles/Registred.css";
function RegistredPage() {
  return (
    <div>
      <header className="header-reg">
        <div className="wrapper-reg">
          <div className="logo">Hschool</div>
          <nav>
            <a href="/LoginPage" className="login">
              Login →
            </a>
            <button className="sign">Sign Up</button>
          </nav>
        </div>
        <div className="reg-line"></div>
      </header>
      <main>
        <section className="sign-up">
          <div className="left-reg">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Телефон" />
            <input type="date" placeholder="Дата рождения" />
            <button className="sign">Sign Up</button>
          </div>
          <div className="right-reg"></div>
        </section>
      </main>
      <footer className="footer-reg">
        <div className="footer-reg-wrap">
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
          <div className="line"></div>
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
export default RegistredPage;
