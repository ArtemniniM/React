import styles from "./App.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState([]);
  const [selectCur, setSelectCur] = useState("");

  async function get() {
    const response = await axios.get("https://www.nbrb.by/API/ExRates/Currencies");
    setAnswer(response.data);
    setSelectCur(response.data[0].Cur_Name);
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <button>{selectCur}</button>
      <select value={selectCur} onChange={(e) => setSelectCur(e.target.value)} className={styles.select}>
        {answer.map((el) => (
          <option key={el.Cur_ID} value={el.Cur_Name}>
            {el.Cur_Name}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
