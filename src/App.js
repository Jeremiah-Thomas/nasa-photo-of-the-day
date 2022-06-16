import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import DateEntry from "./components/DateEntry";
import "./App.css";

const API_KEY = "GzZIdinbKmJk4YPnDMgiuo8FK9I9PhkywdBpKuwP";

function App() {
  const today = new Date();
  const [queryDate, setQueryDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`
  );

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${queryDate}`
      )
      .then((res) => {
        const result = res.data;
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [queryDate]);
  return (
    <div className="App">
      <DateEntry setDate={setQueryDate} />
      <Card data={data} />
    </div>
  );
}

export default App;
