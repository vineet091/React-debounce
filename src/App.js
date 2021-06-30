import "./styles.css";
import React, { useState } from "react";

const debounce = (func, wait) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};
const fetchData = (value) => {
  console.log("fetchData");
  fetch(`https//www.examples.com/list/${value}`).then((response) => {
    console.log(response);
  });
};

export default function App() {
  const [value, setValue] = useState("");
  React.useEffect(() => {
    this.debounceOnChange = debounce(fetchData, 400);
  }, []);

  const onChange = (value) => {
    setValue(value);
    console.log(value);
    this.debounceOnChange(value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
