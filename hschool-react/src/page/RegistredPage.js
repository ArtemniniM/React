import style from "../styles/Registred.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RegistredPage() {
  return (
    <div>
      <Header />
      <main>
        <section className={style["sign-up"]}>
          <div className={style["left-reg"]}>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Телефон" />
            <input type="date" placeholder="Дата рождения" />
            <button className={style.sign}>Sign Up</button>
          </div>
          <div className={style["right-reg"]}></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default RegistredPage;
