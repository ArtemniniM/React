import style from "../styles/App.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className={style.first}>
          <div className={style["first-wrap"]}>
            <div className={style.left}>
              <h3>E-COURSE PLATFORM</h3>
              <h1>Learning and teaching online, made easy.</h1>
              <p>Any subject, in any language, on any device, for all ages!</p>
              <button className={style["green-btn"]}>About platform</button>
              <div className={style.counter}>
                <div className={style.top}>
                  <div className={style["image-frame"]}></div>
                  <div className={style.number}>
                    600
                    <span>+</span>
                  </div>
                </div>
                <div className={style.bottom}>Students</div>
              </div>
            </div>
            <div className={style.right}></div>
          </div>
        </section>
        <section className={style.second}>
          <div className={style["sec-wrap"]}>
            <div className={style.left}></div>
            <div className={style.right}>
              <h2>Learn a language in a playful way</h2>
              <p>Make learning programming languages more fun with mini-games</p>
              <div className={style["links-wrap"]}>
                <div className={style.sprint}>
                  <div className={style.shoes}></div>
                  <h5>Sprint →</h5>
                </div>
                <div className={style.tasks}>
                  <div className={style.speaker}></div>
                  <h5>Tasks →</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.third}>
          <div className={style["third-wrap"]}>
            <div className={style.left}>
              <h2>Increase your knowledge</h2>
              <p>Traditional and new effective approaches to learning languages</p>
              <button className={style["green-btn"]}>Textbook →</button>
            </div>
            <div className={style.right}></div>
          </div>
        </section>
        <section className={style.fourth}>
          <div className={style["fourth-wrap"]}>
            <div className={style.left}></div>
            <div className={style.right}>
              <h2>Watch your progress every day</h2>
              <p>
                Save statistics on your achievements <br></br> and mistakes
              </p>
              <button className={style["green-btn"]}>Statistics →</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
