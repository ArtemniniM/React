import { useEffect, useState } from "react";
import "./App.css";

// 1. Сделать кнопку, которая при клике показывает alert("Привет!").
// function App() {
//   return (
//     <>
//       <button onClick={() => alert("hi")}>click</button>
//     </>
//   );
// }

// export default App;

// 2. Кнопка, которая при двойном клике (onDoubleClick) выводит alert("Привет!").

// function App() {
//   return (
//     <>
//       <button onDoubleClick={() => alert("hi")}>click</button>
//     </>
//   );
// }

// export default App;

// 3. Поле ввода, которое при каждом изменении (onChange) пишет введённое значение в
// консоль.

// function App() {
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           console.log(e.target.value);
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 4. Кнопка, которая при клике меняет свой цвет с помощью e.target.style = "background-color:
// red".

// function App() {
//   return (
//     <>
//       <button
//         onClick={(e) => {
//           e.target.style = "background-color:red";
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 5. Создайте компонент с input. По изменению значения input отображайте количество
// символов в input в консоль используя event.target.value.

// function App() {
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           console.log(e.target.value.length);
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 6. Поле ввода, которое при нажатии клавиши (onKeyDown) выводит в консоль название
// клавиши (event.key).

// function App() {
//   return (
//     <>
//       <input
//         onKeyDown={(e) => {
//           console.log(e.key);
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 7. Поле ввода, которое при отпускании клавиши (onKeyUp) показывает alert("Клавишу
// отпустил").

// function App() {
//   return (
//     <>
//       <input
//         onKeyUp={(e) => {
//           alert(`Клавишу "${e.key}" отпустил`);
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 8. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в
// соответствии с массивом цветов ['red', 'white', 'blue’]. Используйте рандомный выбор цвета
// из массива при каждом клике.

// function App() {
//   const arr = ["red", "white", "blue"];
//   function random() {
//     return Math.floor(Math.random() * arr.length);
//   }
//   return (
//     <>
//       <button
//         onClick={(e) => {
//           e.target.style = `background-color:${arr[random()]}`;
//         }}
//       ></button>
//     </>
//   );
// }
// export default App;

// 9. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и
// выведите сумму всех чисел из массива в консоль.

// function App() {
//   const arr = [1, 2, 3, 4, 5];
//   let sum = arr.reduce((sum, el) => sum + el, 0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           console.log(sum);
//         }}
//       >click</button>
//     </>
//   );
// }
// export default App;

// 10. Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку
// выбирайте случайный элемент из массива и отображайте его в консоль.

// function App() {
//   const arr = [1, 2, 3, 4, 5];
//   function random() {
//     return Math.floor(Math.random() * arr.length);
//   }
//   return (
//     <>
//       <button
//         onClick={() => {
//           console.log(`${arr[random()]}`);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 11. Квадрат <div>, который при наведении (onMouseEnter) пишет в консоль "Навёл", а при
// уходе (onMouseLeave) — "Ушёл".

// function App() {
//   return (
//     <>
//       <div
//         onMouseEnter={() => {
//           console.log("Навёл");
//         }}
//         onMouseLeave={() => {
//           console.log("Ушёл");
//         }}
//         style={{
//           width: "200px",
//           height: "200px",
//           backgroundColor: "lightblue",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "20px",
//           cursor: "pointer",
//         }}
//       >
//         Наведи на меня
//       </div>
//     </>
//   );
// }
// export default App;

//Use State

//  1. Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
// вводимое значение в параграф текущей страницы

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       />
//       <p>{a}</p>
//     </>
//   );
// }
// export default App;

// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на палиндром. Результат отображать в консоль

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           a.split("").reverse().join("") === a ? console.log(true) : console.log(false);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на почту. Результат отображать в консоль

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) ? console.log(true) : console.log(false);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
// двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
// консоль

// import { useState } from "react";

// function App() {
//   const [inp1, setInp1] = useState("");
//   const [inp2, setInp2] = useState("");

//   const handleClick = () => {
//     if (inp1 === inp2) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   };
//   return (
//     <>
//       <input onChange={(e) => setInp1(e.target.value)} />
//       <input onChange={(e) => setInp2(e.target.value)} />
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// }
// export default App;

// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
// нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
// введенным пользователем

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [a, b] = useState("");
//   const func = () => {
//     b(name);
//   };

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <button onClick={func}>Привет</button>
//       <h2>Привет {a}</h2>
//     </>
//   );
// }
// export default App;

// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
// должен появляться или исчезать

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(false);

//   return (
//     <>
//       <p style={{ display: a ? "block" : "none" }}>name</p>
//       <button onClick={() => b(!a)}>Привет</button>
//     </>
//   );
// }
// export default App;

// 7. Создайте компонент с кнопкой и параграфом для отображения результата счетчика
// (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на
// кнопку автоматически прибавлялась +1 к стейту счетчика

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(0);

//   return (
//     <>
//       <p>{a}</p>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// }
// export default App;

// 8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для
// отображения результата счетчика (изначально счетчик равен 0). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к
// стейту счетчика, а при клике на кнопку -1, происходило вычитание значения 1

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(0);

//   return (
//     <>
//       <p>{a}</p>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           b(a - 1);
//         }}
//       >
//         -1
//       </button>
//     </>
//   );
// }
// export default App;

// 9. Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку
// "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState,
// чтобы управлять значением счетчика.
// import { useState } from "react";

// function App() {
//   const [a, b] = useState(0);

//   return (
//     <>
//       <p>{a}</p>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           b(a - 1);
//         }}
//       >
//         -1
//       </button>
//       <button
//         onClick={() => {
//           b(0);
//         }}
//       >
//         Сброс
//       </button>
//     </>
//   );
// }
// export default App;

// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто"
// при нажатии на саму кнопку.

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(false);

//   return (
//     <>
//       <h1 style={{ color: a ? "black" : "red" }}>{a ? "Открыто" : "Закрыто"}</h1>
//       <button
//         onClick={() => {
//           b(!a);
//         }}
//       >
//         Добавить цвет
//       </button>
//     </>
//   );
// }
// export default App;

// 11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По
// нажатию на кнопку "Открыть" меню должно отображаться.

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(false);

//   return (
//     <>
//       <div style={{ display: a ? "block" : "none" }}>
//         <p>hi</p>
//         <p>hi</p>
//         <p>hi</p>
//       </div>

//       <button
//         onClick={() => {
//           b(!a);
//         }}
//       >
//         Открыть
//       </button>
//     </>
//   );
// }
// export default App;

// HOMEWORK!!!!!!!!!!!!!!!!!!!!

// Переключение отображения текста. Кнопка переключает состояние отображения текста (показать/скрыть).
// По умолчанию текст скрыт
// Клик по кнопке — текст отображается
// Повторный клик — текст снова скрыт

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(false);
//   return (
//     <>
//       <div style={{ display: a ? "block" : "none" }}>
//         <p>hi</p>
//         <p>hi</p>
//         <p>hi</p>
//       </div>
//       <button
//         onClick={() => {
//           b(!a);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// Поле ввода сохраняет введённый текст и отображает его ниже в h1.
// Ввод "hello" — отображается в h1 "hello"

// import { useState } from "react";

// function App() {
//   const [a, b] = useState("");
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           b(e.target.value);
//         }}
//         value={a}
//       />
//       <h1>{a}</h1>
//     </>
//   );
// }
// export default App;

// Кнопка с иконкой "лайк" увеличивает счётчик лайков.
// Начальное значение — 0
// Один клик — 1
// Три клика — 3

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(0);
//   return (
//     <>
//       <h2>{a}</h2>
//       <button
//         onClick={() => {
//           b(a + 1);
//         }}
//       >
//         like
//       </button>
//     </>
//   );
// }
// export default App;

// После заполнения инпута и клика на кнопку отображается "Отправлено: [значение]".
// Ввод "email@example.com" → клик → отображается "Отправлено: email@example.com"
// Очистить и ввести "hello@world.com" → клик → "Отправлено: hello@world.com"

// import { useState } from "react";

// function App() {
//   const [a, b] = useState(false);
//   const [c, d] = useState("");

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           d(e.target.value);
//           b(false);
//         }}
//       />
//       <button
//         onClick={() => {
//           b(true);
//         }}
//       >
//         Отправить
//       </button>
//       <h1 style={{ display: a ? "block" : "none" }}>Отправлено:{c}</h1>
//     </>
//   );
// }
// export default App;

// 1. На странице есть кнопка и текст. При каждом нажатии на кнопку число в тексте
// увеличивается на один. useState — хранит число (количество кликов).

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState(0);
//   return (
//     <>
//       <h1>{value}</h1>
//       <Button onClick={() => setValue(value + 1)} variant="contained">
//         click
//       </Button>
//     </>
//   );
// }
// export default App;

// 2. На странице есть кнопка и текст. При нажатии на кнопку текст меняется с «Привет» на
// «Пока» и обратно. useState — хранит строку («Привет» или «Пока»).

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState("Привет");

//   return (
//     <>
//       <h1>{value}</h1>
//       <Button onClick={() => setValue((prev) => (prev === "Привет" ? "Пока" : "Привет"))} variant="contained">
//         click
//       </Button>
//     </>
//   );
// }
// export default App;

// 3. На странице есть поле для ввода текста и абзац. Всё, что вводится в поле, сразу
// отображается в абзаце. useState — хранит строку с текстом из поля.

// import { useState } from "react";
// import TextField from "@mui/material/TextField";

// function App() {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <TextField onChange={(e) => setValue(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
//       <p>{value}</p>
//     </>
//   );
// }
// export default App;

// 4. На странице есть кнопка и абзац с текстом. При нажатии на кнопку текст скрывается, при
// повторном нажатии снова появляется. useState — хранит логическое значение (true/false).

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setValue((prev) => !prev)} variant="contained">
//         click
//       </Button>
//       <p style={{ display: value ? "block" : "none" }}>apple</p>
//     </>
//   );
// }
// export default App;

// 5. На странице есть кнопка и абзац. При нажатии на кнопку цвет текста меняется (например,
//    с чёрного на красный). useState — хранит текущий цвет текста.

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState("black");

//   const handleClick = () => {
//     setValue(prev => (prev === "black" ? "red" : "black"));
//   };

//   return (
//     <>
//       <Button onClick={handleClick} variant="contained">
//         click
//       </Button>
//       <p style={{ color: value }}>apple</p>
//     </>
//   );
// }

// export default App;

// 6. На странице есть кнопка и список. При нажатии в список добавляется новый элемент с
// текстом NEW. useState — хранит массив строк.

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState(["orange", "apple", "lemon"]);

//   return (
//     <>
//       <Button onClick={() => setValue([...value, "NEW"])} variant="contained">
//         click
//       </Button>
//       <ul>
//         {value.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// 7. На странице есть список и кнопка. При нажатии удаляется последний элемент из списка.
//  useState — хранит массив элементов.

// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const [value, setValue] = useState(["orange", "apple", "lemon"]);

//   return (
//     <>
//       <Button onClick={() => setValue(value.slice(0, -1))} variant="contained">
//         click
//       </Button>
//       <ul>
//         {value.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// 8. На странице есть картинка и две кнопки («Следующая» и «Предыдущая»). Кнопки
// переключают картинки по массиву (5 шт). useState — хранит индекс текущей картинки.

// import Img1 from "./assents/1.png";
// import Img2 from "./assents/2.png";
// import Img3 from "./assents/3.png";
// import Img4 from "./assents/4.png";
// import { useState } from "react";
// import Button from "@mui/material/Button";

// function App() {
//   const arr = [Img1, Img2, Img3, Img4];
//   const [value, setValue] = useState(0);
//   return (
//     <>
//       <Button
//         onClick={() => {
//           if (value === 0) {
//             return;
//           }
//           setValue(value - 1);
//         }}
//         variant="contained"
//       >
//         Предыдущая
//       </Button>
//       <img style={{ width: 300 }} src={arr[value]} />
//       <Button
//         onClick={() => {
//           if (value === arr.length - 1) {
//             return;
//           }
//           setValue(value + 1);
//         }}
//         variant="contained"
//       >
//         Следующая
//       </Button>
//     </>
//   );
// }
// export default App;

// USEEFFECT!!!!!!!!!!!!!

// 1. Сделай компонент со счётчиком. Каждый раз, когда пользователь нажимает кнопку, значение
// счётчика должно отобрадаться в console.log внутри useEffeect

// function App() {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     console.log(val);
//   }, [val]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setVal(val + 1);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 2. Сделай компонент, который запускает таймер (setInterval) и каждую секунду увеличивает число на
// экране.

// function App() {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     const result = setInterval(() => {
//       setVal(Number(val) + 1);
//     }, 1000);
//     return () => clearInterval(result);
//   }, [val]);

//   return (
//     <>
//       <h1>{val}</h1>
//     </>
//   );
// }
// export default App;

// 3. При монтировании компонента сделай fetch на какой-нибудь API (например,
//   https://jsonplaceholder.typicode.com/posts/1) и выведи заголовок поста.

// function App() {
//   const [title, setTitle] = useState(0);

//   async function fetchData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const data = await response.json();
//       setTitle(data.title);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   useEffect(() => fetchData(), []);

//   return (
//     <>
//       <div>{title}</div>
//     </>
//   );
// }
// export default App;

// 4. При монтировании сделай fetch на https://jsonplaceholder.typicode.com/users и отобрази список имён
// пользователей (name).

// function App() {
//   const [name, setName] = useState([]);

//   async function fetchData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       setName(data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   useEffect(() => fetchData(), []);

//   return (
//     <>
//       <div>
//         {name.map((el) => (
//           <p>{el.name}</p>
//         ))}
//       </div>
//     </>
//   );
// }
// export default App;

// 5. Сделай компонент, который каждые 10 секунд загружает случайный пост
// (https://jsonplaceholder.typicode.com/posts/{случайное число}) и отображает его заголовок.

// function App() {
//   const [post, setPost] = useState([]);

//   async function fetchData() {
//     try {
//       const num = Math.floor(Math.random() * 100) + 1;
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
//       const data = await response.json();
//       setPost(data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   useEffect(() => {
//     const interval = setInterval(fetchData, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div>
//         <p>{post.title}</p>
//       </div>
//     </>
//   );
// }
// export default App;
