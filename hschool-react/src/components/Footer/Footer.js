import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style["footer-wrap"]}>
        <div className={style.top}>
          <div className={style["top-nav"]}>
            <p>Home</p>
            <p>Textbook</p>
            <p>Statistics</p>
            <p>Sprint</p>
          </div>
          <div className={style["top-nav"]}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.bottom}>
          <div className={style["bottom-nav"]}>
            <div className={style.pig}></div>
            <div className={style.gt}></div>
            <div className={style.youtube}></div>
          </div>
          <div className={style["bottom-info"]}>
            ©2021 Hschool. Project for <a href="#">Hschool</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
