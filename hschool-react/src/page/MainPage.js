import "../styles/App.css";
function App() {
  return (
    <div>
      <header className="main">
        <div className="wrapper">
          <div className="logo">Hschool</div>
          <nav>
            <a href="/LoginPage" className="login">
              Login →
            </a>
            <button className="sign">Sign Up</button>
          </nav>
        </div>
      </header>
      <main>
        <section className="first">
          <div className="first-wrap">
            <div className="left">
              <h3>E-COURSE PLATFORM</h3>
              <h1>Learning and teaching online, made easy.</h1>
              <p>Any subject, in any language, on any device, for all ages!</p>
              <button className="green-btn">About platform</button>
              <div className="counter">
                <div className="top">
                  <div className="image-frame"></div>
                  <div className="number">
                    600
                    <span>+</span>
                  </div>
                </div>
                <div className="bottom">Students</div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </section>
        <section className="second">
          <div className="sec-wrap">
            <div className="left"></div>
            <div className="right">
              <h2>Learn a language in a playful way</h2>
              <p>Make learning programming languages more fun with mini-games</p>
              <div className="links-wrap">
                <div className="sprint">
                  <div className="shoes"></div>
                  <h5>Sprint →</h5>
                </div>
                <div className="tasks">
                  <div className="speaker"></div>
                  <h5>Tasks →</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third">
          <div className="third-wrap">
            <div className="left">
              <h2>Increase your knowledge</h2>
              <p>Traditional and new effective approaches to learning languages</p>
              <button className="green-btn">Textbook →</button>
            </div>
            <div className="right"></div>
          </div>
        </section>
        <section className="fourth">
          <div className="fourth-wrap">
            <div className="left"></div>
            <div className="right">
              <h2>Watch your progress every day</h2>
              <p>
                Save statistics on your achievements <br></br> and mistakes
              </p>
              <button className="green-btn">Statistics →</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-wrap">
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
export default App;
