import style from "../styles/Courses.module.css";
import Header from "../components/HeaderMin/HeaderMin";
import Footer from "../components/Footer/Footer";
import hat from "../assets/hat.svg";

function Courses() {
  return (
    <>
      <Header />
      <main>
        <section className={style.courses}>
          <div className={style["courses-wrap"]}>
            <div className={style.block}>
              <img src={hat} />
              <h2>Courses</h2>
            </div>
          </div>
        </section>
        <section className={style.javascript}>
          <div className={style["javascript-wrap"]}>
            <div className={style.left}></div>
            <div className={style.right}>
              <div className={style.block}>
                <h2>Javascript</h2>
                <div className={style.line}></div>
                <p>
                  JavaScript is a practical course where students learn the basics of JavaScript. It covers variables,
                  operators, conditionals, loops, functions, and data manipulation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.typescript}>
          <div className={style["typescript-wrap"]}>
            <div className={style.left}></div>
            <div className={style.right}>
              <div className={style.block}>
                <h2>TypeScript</h2>
                <div className={style.line}></div>
                <p>
                  TypeScript is a course that provides an introduction to TypeScript. Students will learn about
                  TypeScript's key features, such as type annotations, interfaces, classes, and modules
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.python}>
          <div className={style["python-wrap"]}>
            <div className={style.left}></div>
            <div className={style.right}>
              <div className={style.block}>
                <h2>Python</h2>
                <div className={style.line}></div>
                <p>
                  Students will learn about variables, data types, conditionals, loops, functions, and file handling.
                  Through hands-on exercises and projects, students will gain proficiency in writing Python code and
                  solving real-world problems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Courses;
