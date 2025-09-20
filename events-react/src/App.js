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

function App() {
  return (
    <>
      <div
        onMouseEnter={() => {
          console.log("Навёл");
        }}
        onMouseLeave={() => {
          console.log("Ушёл");
        }}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        Наведи на меня
      </div>
    </>
  );
}
export default App;
