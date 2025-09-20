import style from "../styles/Notfound.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Notfound() {
  return (
    <div>
      <Header />
      <main>
        <section className={style.notfound}>
          <div className={style["left-notfound"]}>
            <h5>Error 404</h5>
            <h1>Hey Buddy</h1>
            <p>We can’t seem to find the page you are looking for.</p>

            <button className={style["notfound-btn"]}>Go home</button>
          </div>
          <div className={style["right-notfound"]}></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Notfound;
