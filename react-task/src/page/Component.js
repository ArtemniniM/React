import { useContext } from "react";
import Box from "../context";

// 1.
//  function Component() {
//   const { name, email, role } = useContext(Box);

//   return (
//     <div>
//       <p>name: {name}</p>
//       <p>email: {email}</p>
//       <p>role: {role}</p>
//     </div>
//   );
// }
// export default Component;

// 2.
//  function Component() {
//     const { language, setLanguage, greetings } = useContext(Box);

//     return (
//       <div>
//         <p>выбран язык: {language} </p>
//         <h1>{greetings[language]}</h1>
//         <button onClick={() => setLanguage("en")}>en</button>
//         <button onClick={() => setLanguage("sp")}>sp</button>
//         <button onClick={() => setLanguage("ch")}>ch</button>
//       </div>
//     );
//   }
//   export default Component;

//3.
// function Component() {
//   const weather = useContext(Box);

//   return (
//     <div>
//       <h2>Текущая погода:</h2>
//       <p>Температура: {weather.temperature}°C</p>
//       <p>Влажность: {weather.humidity}%</p>
//       <p>Скорость ветра: {weather.windSpeed} м/с</p>
//       <p>Состояние: {weather.condition}</p>
//     </div>
//   );
// }
// export default Component;

// 4.
// function Component() {
    
//     const = useContext(Box);
  
//     return (
//       <div>

      
//       </div>
//     );
//   }
//   export default Component;
  