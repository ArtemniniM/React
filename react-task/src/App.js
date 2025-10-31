import { useEffect, useState, useRef, useReducer } from "react";
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

// AXIOS!!!!!!!!!!!!!!!!!!!!!

// 1. При первичном рендеринге загрузите данные пользователя с https://jsonplaceholder.typicode.com/users/1 .
// Отобразите информацию о пользователе в виде карточки. Внутри useState хранится объект пользователя с
// сервера. Обработайте возможные ошибки при обращении к серверу.

// import axios from "axios";

// function App() {
//   const [user, setUser] = useState({});

//   async function userData() {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
//     setUser(response.data);
//   }

//   useEffect(() => {
//     userData();
//   }, []);

//   return (
//     <>
//       <ul>
//         {Object.entries(user).map(([key, value]) => (
//           <li key={key}>
//             <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// 2. При первичном рендеринге загрузите список постов с https://jsonplaceholder.typicode.com/posts .
// // Отобразите первые 10 постов в виде списка. Внутри useState хранится массив постов с сервера.

// import axios from "axios";

// function App() {
//   const [post, setPost] = useState([]);

//   async function postData() {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     setPost(response.data);
//   }

//   useEffect(() => {
//     postData();
//   }, []);

//   return (
//     <>
//       {post
//         .filter((el, index) => index < 10)
//         .map((el) => (
//           <p>{el.title}</p>
//         ))}
//     </>
//   );
// }
// export default App;

// 3. На странице должны отображаться инпут и div c ответом сервера. При первичном рендеринге отправить
// запрос на https://jsonplaceholder.typicode.com/albums?title_like=${query}. При вводе данных в инпут повторно
// отправляйте запрос. Внутри useState хранится массив найденных альбомов. Отобразите результаты поиска
// в виде сетки карточек. (В текущей задаче useEffect вызывает асинхронную функцию не только при
// первичном рендеринге, но и при изменении состояния значения инпута)

// import axios from "axios";

// function App() {
//   const [albums, setAlbums] = useState([]);
//   const [query, setQuery] = useState("");

//   async function post() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?title_like=${query}`);
//     setAlbums(response.data);
//   }

//   useEffect(() => {
//     post();
//   }, [query]);

//   return (
//     <>
//       <input type="text" onChange={(e) => setQuery(e.target.value)} />
//       <div>
//         {albums.map((el) => (
//           <p>{el.title}</p>
//         ))}
//       </div>
//     </>
//   );
// }
// export default App;

// 4. При первичном рендеринге отправить GET запрос по адресу https://api.ipify.org/?format=json . Результат
// сервера отобразить в заголовок

// import axios from "axios";

// function App() {
//   const [ip, setIp] = useState("");

//   async function post() {
//     const response = await axios.get("https://api.ipify.org/?format=json");
//     setIp(response.data.ip);
//   }

//   useEffect(() => {
//     post();
//   }, []);

//   return (
//     <>
//       <p>{ip}</p>
//     </>
//   );
// }
// export default App;

// USESTATE!!!!!!!!!!!!!!!!!

// 1. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть". При
// нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст скрывается.

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       {show ? <p>Текст отображается</p> : null}
//       <button onClick={() => setShow(true)}>Показать</button>
//       <button onClick={() => setShow(false)}>Скрыть</button>
//     </>
//   );
// }
// export default App;

// 2. Создайте компонент выбора цвета, который включает 4шт. – button (в качестве textContent:
//     red, green, blue, yellow), 1шт. – h1 и позволяет пользователю выбирать цвет. По клику на
//     соответствующую кнопку цвет заголовка должен меняться.

// function App() {
//   const [color, setColor] = useState("");
//   const colors = ["red", "green", "blue", "yellow"];
//   return (
//     <>
//       <h1 style={{ color }}>Цвет текста: {color || "не выбран"}</h1>
//       {colors.map((c) => (
//         <button key={c} onClick={() => setColor(c)}>
//           {c}
//         </button>
//       ))}
//     </>
//   );
// }
// export default App;

// 3. Создайте компонент по клику на кнопку проверить значение введенного поля для ввода
// регулярным выражением на почту. В console.log отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае.

// function App() {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <button
//         onClick={() => {
//           console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
//         }}
//       >
//         click
//       </button>
//       <input onChange={(e) => setValue(e.target.value)} value={value} type="post" />
//     </>
//   );
// }
// export default App;

// 4. Отобразите список элементов массива, кнопку и поле для ввода. По клику на кнопку брать
// значение инпута и добавлять в конец списка массива.

// function App() {
//   const [value, setValue] = useState("");
//   const [array, setArray] = useState([]);
//   return (
//     <>
//       <button onClick={() => setArray((prevArray) => [...prevArray, value])}>click</button>
//       <input onChange={(e) => setValue(e.target.value)} value={value} type="text" />
//       <ul>
//         {array.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// useEffect!!!!!!!!!!!!!!!!!!

// 1. Создайте компонент счетчика, который увеличивает значение счетчика на 1 каждую секунду
// с использованием useEffect.

// function Effect() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setValue((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <h2>{value}</h2>
//     </>
//   );
// }

// export default Effect;

// 2. Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и
// отображает полученные данные в заголовок.

// import axios from "axios";

// function Effect() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     async function promise() {
//       const response = await axios.get("https://api.ipify.org/?format=json");
//       setValue(response.data.ip);
//     }
//     promise();
//   }, []);

//   return (
//     <>
//       <h2>{value}</h2>
//     </>
//   );
// }

// export default Effect;

// 3. Создайте компонент, который отображает текущее время и обновляет его каждую секунду

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return <h2>{time.toLocaleTimeString()}</h2>;
// }

// export default Clock;

// 4. Создайте компонент, который при первичном рендеринге отправляет запрос к API
// http://numbersapi.com/:id с рандомно сгенерированным числом и отображает результат в
// консоль.

// function Effect() {
//   const id = Math.round(Math.random() * 100);

//   useEffect(() => {
//     async function fetchFact() {
//       try {
//         const response = await fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${id}`);
//         const text = await response.text();
//         console.log(`Факт о числе ${id}:`, text);
//       } catch (error) {
//         console.error("Ошибка при запросе:", error);
//       }
//     }

//     fetchFact();
//   }, []);

//   return <h2>Факт загружен в консоль</h2>;
// }

// export default Effect;

// USEREF!!!!!!!!!!!!!!!!

// 1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный

// function App() {
//   const refColor = useRef();
//   return (
//     <>
//       <p ref={refColor}>dg kjfm</p>
//       <button onClick={() => (refColor.current.style = "color:red")}>click</button>
//     </>
//   );
// }
// export default App;

// 2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет текста

// function App() {
//   const refColor = useRef();
//   return (
//     <>
//       <h1 ref={refColor}>fsjkd</h1>
//       <button onClick={() => (refColor.current.style = `color: #${Math.round(Math.random() * 999)}`)}>click</button>
//     </>
//   );
// }
// export default App;

// 3. Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта
// текста в элементе на странице.

// function App() {
//   const refFont = useRef();
//   return (
//     <>
//       <h1 style={{ fontSize: "40px" }} ref={refFont}>
//         fsjkd
//       </h1>
//       <button onClick={() => (refFont.current.style = `font-size: ${parseInt(refFont.current.style.fontSize) + 10}px`)}>
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 4. Создайте компонент, который при фокусе на текстовом поле добавляет background
// (onFocus, onBlur)

// function App() {
//   const refBack = useRef();
//   return (
//     <>
//       <input
//         ref={refBack}
//         onFocus={() => {
//           refBack.current.style = "background-color:red";
//         }}
//         onBlur={() => {
//           refBack.current.style = "background-color:white";
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 5. Реализуйте компонент, который отслеживает количество кликов на кнопку с помощью
// useRef и выводит это число в консоль при каждом клике.

// function App() {
//   const counter = useRef();
//   return (
//     <>
//       <h1 ref={counter}>0</h1>
//       <button
//         onClick={() => {
//           counter.current.textContent = +counter.current.textContent + 1;
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// 6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на элемент
// интерфейса (например, кнопку), компонент отображает подсказку с текстом. (onMouseEnter
// срабатывает, когда курсор мыши входит в область элемента. onMouseLeave срабатывает,
// когда курсор мыши покидает область элемента.)

// function Tooltips() {
//   const tool = useRef();
//   return (
//     <>
//       <h2 style={{ display: "none" }} ref={tool}>
//         подсказкa
//       </h2>
//       <button
//         onMouseEnter={() => (tool.current.style = "display:block")}
//         onMouseLeave={() => (tool.current.style = "display:none")}
//       >
//         mouse
//       </button>
//     </>
//   );
// }
// export default Tooltips;

import Box from "./context/index";
import Component from "./page/Component";

// 1. Используйте useContext, чтобы сохранять данные о текущем пользователе. Отобразите эту
// информацию в компоненте, используя контекст.

// function App() {
//   const currentUser = {
//     name: "Артём",
//     email: "mail@example.com",
//     role: "Full-stack developer",
//   };
//   return (
//     <Box.Provider value={currentUser}>
//       <Component />
//     </Box.Provider>
//   );
// }
// export default App;

// 2. Создайте приложение, где пользователь сможет выбирать язык интерфейса (например,
//     английский или испанский). Используйте useContext для сохранения текущего выбранного
//     языка и перевода текста в выбранный язык в компонентах.

// function App() {
//   const [language, setLanguage] = useState("en");
//   const greetings = {
//     en: "hello",
//     sp: "hola",
//     ch: "nihao",
//   };
//   const objLang = {
//     language: language,
//     setLanguage: setLanguage,
//     greetings: greetings,
//   };
//   return (
//     <Box.Provider value={objLang}>
//       <Component />
//     </Box.Provider>
//   );
// }
// export default App;

// 3. Разработайте приложение для отображения текущей погоды. Используйте useContext,
// чтобы хранить информацию о погоде (температура, влажность, скорость ветра и т. д.). В
// компоненте отобразите эту информацию о погоде.

// function App() {
//   const [weather, setWeather] = useState({
//     temperature: 18,
//     humidity: 65,
//     windSpeed: 5.2,
//     condition: "Облачно",
//   });
//   return (
//     <Box.Provider value={weather}>
//       <Component />
//     </Box.Provider>
//   );
// }
// export default App;

// 4. Разработайте простое приложение для переключения между светлой и темной темами.
// Используйте useContext, чтобы хранить информацию о текущей теме (светлая или темная).
// В компоненте отобразите интерфейс, который позволяет пользователю переключаться
// между темами.

// function App() {
//   const [color, setColor] = useState(false);

//   const obj = {
//     color: color,
//     setColor: setColor,
//   };
//   return (
//     <Box.Provider value={obj}>
//       <Component />
//     </Box.Provider>
//   );
// }
// export default App;

// !!!!!!!!!useReducer

// 1. Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать
// значение при нажатии на соответствующие кнопки.

// const reducer = (state, param) => {
//   switch (param) {
//     case "увеличивать":
//       return state + 1;
//     case "уменьшать":
//       return state - 1;
//     case "сбрасывать":
//       return 0;
//   }
// };

// function Counter() {
//   const [count, setCount] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount("увеличивать")}>увеличивать</button>
//       <button onClick={() => setCount("уменьшать")}>уменьшать</button>
//       <button onClick={() => setCount("сбрасывать")}>сбрасывать</button>
//     </div>
//   );
// }

// export default Counter;

// 2. Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off». По клику
// на кнопку текст меняется на противоположный

// function reducer(state, param) {
//   switch (param) {
//     case "on":
//       return (state = true);
//     case "off":
//       return (state = false);
//   }
// }

// function App() {
//   const [state, setState] = useReducer(reducer, true);
//   return (
//     <>
//       {state ? <h1>apple</h1> : null}
//       <button onClick={() => setState(state ? "off" : "on")}>click</button>
//     </>
//   );
// }
// export default App;

// 3. Создайте компонент отслеживающий вводимое значение в input. Результат отображать в
// h1

// function reducer(value, param) {
//   switch (param.action) {
//     case "add":
//       return param.input;
//   }
// }

// function App() {
//   const [val, setVal] = useReducer(reducer, "");
//   return (
//     <>
//       <h1>{val}</h1>
//       <input
//         onChange={(e) => {
//           setVal({ action: "add", input: e.target.value });
//         }}
//       />
//     </>
//   );
// }
// export default App;

// 4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на кнопку ваша
// задача изменить цвет заголовка на цвет, соответствующий нажатой кнопке.

// function reducer(state, param) {
//   switch (param) {
//     case "red":
//       return "red";
//     case "blue":
//       return "blue";
//     case "purple":
//       return "purple";
//     case "pink":
//       return "pink";
//   }
// }

// function App() {
//   const [color, setColor] = useReducer(reducer, "black");

//   return (
//     <>
//       <h1 style={{ color: color }}>TEXT</h1>
//       <button onClick={() => setColor("red")}>red</button>
//       <button onClick={() => setColor("blue")}>blue</button>
//       <button onClick={() => setColor("purple")}>purple</button>
//       <button onClick={() => setColor("pink")}>pink</button>
//     </>
//   );
// }
// export default App;

// 5. Создайте компонент отслеживающий вводимое значение 2 input. Посчитать сумму 2 input.
// По клику на кнопку отображать результат в консоль

// function reducer1(elem, param) {
//   switch (param.action) {
//     case "add":
//       return param.value;
//   }
// }

// function reducer2(elem, param) {
//   switch (param.action) {
//     case "add":
//       return param.value;
//   }
// }

// function App() {
//   const [count1, setCount1] = useReducer(reducer1, "");
//   const [count2, setCount2] = useReducer(reducer2, "");

//   return (
//     <>
//       <input onChange={(e) => setCount1({ action: "add", value: +e.target.value })} />

//       <input onChange={(e) => setCount2({ action: "add", value: +e.target.value })} />

//       <button
//         onClick={() => {
//           console.log(count1 + count2);
//         }}
//       >
//         click
//       </button>
//     </>
//   );
// }
// export default App;

// Повторение:

// 1. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /

// function SimpleCalculator() {
//   const [a, setA] = useState("");
//   const [b, setB] = useState("");
//   const [op, setOp] = useState("+");
//   const [result, setResult] = useState("");

//   const calculate = () => {
//     const x = parseFloat(a);
//     const y = parseFloat(b);
//     let r = 0;

//     if (op === "+") r = x + y;
//     else if (op === "-") r = x - y;
//     else if (op === "*") r = x * y;
//     else if (op === "/") r = y !== 0 ? x / y : NaN;

//     setResult(isNaN(r) ? "Error" : r.toString());
//   };

//   return (
//     <div>
//       <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Число 1" />
//       <select value={op} onChange={(e) => setOp(e.target.value)}>
//         <option value="+">+</option>
//         <option value="-">−</option>
//         <option value="*">×</option>
//         <option value="/">÷</option>
//       </select>
//       <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Число 2" />
//       <button onClick={calculate}>=</button>
//       <div>Результат: {result}</div>
//     </div>
//   );
// }
// export default SimpleCalculator;

// 2. Изменение размера шрифта с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на эти кнопки
// значение font-size изменяется соответствующим образом на +/– 1px.

// function FontSize() {
//   const [size, setSize] = useState("12px");
//   return (
//     <>
//       <h2 style={{ fontSize: size }}>Text</h2>
//       <button
//         onClick={() => {
//           setSize(parseInt(size) + 1 + "px");
//         }}
//       >
//         Увеличить
//       </button>
//       <button
//         onClick={() => {
//           setSize(parseInt(size) - 1 + "px");
//         }}
//       >
//         Уменьшить
//       </button>
//     </>
//   );
// }
// export default FontSize;

// 3. Сделайте счётчик от 1 до 5. Блокируйте кнопку, если предел достигнут. Пределы: 10, -10

// function Counter() {
//   const [count, setCount] = useState(1);

//   const increment = () => {
//     if (count < 10) setCount(count + 1);
//   };

//   const decrement = () => {
//     if (count > -10) setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Счётчик: {count}</h2>
//       <button onClick={decrement} disabled={count <= -10}>
//         −
//       </button>
//       <button onClick={increment} disabled={count >= 10}>
//         +
//       </button>
//     </div>
//   );
// }
// export default Counter;
