import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import RegistredPage from "./page/RegistredPage";
import LoginPage from "./page/LoginPage";
import Notfound from "./page/Notfound";
import Courses from "./page/CoursesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/RegistredPage" element={<RegistredPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Notfound" element={<Notfound />} />
      <Route path="/Courses" element={<Courses />} />
    </Routes>
  );
}
export default App;
