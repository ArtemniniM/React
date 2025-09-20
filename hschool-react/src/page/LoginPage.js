import style from "../styles/Login.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <Header />
      <main>
        <section className={style["log-in"]}>
          <div className={style["left-log"]}>
            <h1>Sign Up</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Пароль" />
            <button className={style["log-btn"]}>Login</button>
          </div>
          <div className={style["right-log"]}></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default LoginPage;
