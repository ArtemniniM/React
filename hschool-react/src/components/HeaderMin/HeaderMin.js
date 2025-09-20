import style from "./HeaderMin.module.css";

function HeaderMin() {
  return (
    <header className={style["header-min"]}>
      <div className={style["wrapper-min"]}>
        <div className={style.logo}>Hschool</div>
        <a href="" className={style.login}>
          Sign Out →
        </a>
      </div>
      <div className={style["min-line"]}></div>
    </header>
  );
}
export default HeaderMin;
