import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import RegistredPage from "./page/RegistredPage";
import LoginPage from "./page/LoginPage";
import Notfound from "./page/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/RegistredPage" element={<RegistredPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Notfound" element={<Notfound />} />
    </Routes>
  );
}
export default App;
