import "./App.css";

//  1. На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в
// теге <li>.

// function App() {
//   const arr = [1, 2, 3, 4, 5];
//   const res1 = arr.filter((el) => el % 2 === 0);
//   const res2 = res1.map((el) => <li>{el}</li>);
//   return <div>{res2}</div>;
// }

// export default App;

// 2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина
// которых больше 5 символов. Вывести в виде списка.

// function App() {
//   const arr = ["priv", "hello", "nihawqeo"];
//   const res1 = arr.filter((el) => el.length > 5);
//   return (
//     <div>
//       <ul>
//         {res1.map((el) => (
//           <li>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;

// 3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>.

// function App() {
//   const arr = [10, 20, 30, 40, 50];
//   const res = arr.reduce((el, sum) => sum + el, 0);
//   return (
//     <div>
//       <h3>{res}</h3>
//     </div>
//   );
// }
// export default App;

// 4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на
// странице.

// function App() {
//   const arr = ["apple", "banana", "orange"];
//   const res = arr.map((el) => el.toUpperCase());
//   return (
//     <div>
//       <ul>
//         {res.map((el) => {
//           return <li>{el}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// export default App;

// 5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде
// (если true) и (если false).

// function App() {
//   const arr = [true, false, true];

//   return <ul>{arr.map((el) => (el ? <li>✅</li> : <li>❌</li>))}</ul>;
// }
// export default App;

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// function App() {
//   const arr = ["2023-01-01", "2020-09-08", "2025-03-25"];

//   const filteredDates = arr.filter((date) => new Date(date).getFullYear() > 2020);

//   return (
//     <ul>
//       {filteredDates.map((el) => (
//         <li>{el}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// 7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом
// number.

// function App() {
//   const arr = ["orange", 5, "sun", 10];
//   const res = arr.filter((el) => (typeof el === "string" ? "text" : "number")).map((el) => <li>{typeof el}</li>);
//   return <ul>{res}</ul>;
// }
// export default App;

// 8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет,
// [имя]!" в теге <p>.

// function App() {
//   const arr = ["artem", "masha", "oleg"];

//   return (
//     <ul>
//       {arr.map((el) => (
//         <li>Привет,{el}!</li>
//       ))}
//     </ul>
//   );
// }
// export default App;

// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и
// отобразить на странице

// function App() {
//   const arr = [10, 20, 30];
//   return (
//     <ul>
//       {arr.map((el) => (
//         <li>{el * el}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;

// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на
// странице в виде h1

// function App() {
//   const arr = [10, 20, 30];
//   return (
//     <ul>
//       {arr.map((el) => (
//         <h1>{Math.sqrt(el)}</h1>
//       ))}
//     </ul>
//   );
// }
// export default App;

// 11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице
// только те строки, которые содержат знак @

// function App() {
//   const arr = ["or@nge", "yellow", "t@ble"];
//   const filt = arr.filter((el) => el.includes("@"));
//   return (
//     <ul>
//       {filt.map((el) => (
//         <li>{}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;

// 12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива,
// а также картинку. Каждая итерация будет возвращать
// <div>
//  <p>el</p>
//  <img/>
// </div>

// import img from "./assents/pig.png";

// function App() {
//   const arr = ["or@nge", "yellow", "t@ble"];

//   return (
//     <div>
//       {arr.map((el) => (
//         <div>
//           <p>{el}</p>
//           <img src={img} />
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;

// 13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить
// саму строку в параграфе

// function App() {
//   const arr = ["a", 10, "b", 13];
//   const res = arr.map((el) => {
//     if (typeof el === "string") {
//       return <p>{el}</p>;
//     }
//     return el % 2 == 0 ? <p>chet</p> : <p>nechet</p>;
//   });
//   return <div>{res}</div>;
// }
// export default App;

// 14. На входе массив из объектов. каждый объект содержит title с названием фильма и
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

// function App() {
//   const arr = [
//     { title: "Interstellar", description: "about..." },
//     { title: "Iron man", description: "about..." },
//   ];
//   const res = arr.map((el) => (
//     <div>
//       <h1>{el.title}</h1>
//       <p>{el.description}</p>
//     </div>
//   ));
//   return <div>{res}</div>;
// }
// export default App;
