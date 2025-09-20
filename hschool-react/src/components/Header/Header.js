import style from "./Header.module.css";

function Header() {
  return (
    <header className={style["header-login"]}>
      <div className={style["wrapper-log"]}>
        <div className={style.logo}>Hschool</div>
        <nav>
          <a href="/LoginPage" className={style.login}>
            Login →
          </a>
          <button className={style.sign}>Sign Up</button>
        </nav>
      </div>
      <div className={style["log-line"]}></div>
    </header>
  );
}
export default Header;
