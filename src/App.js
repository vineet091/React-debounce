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

export default function App() {
  const [value, setValue] = useState("");
  const [dataList, setDataList] = useState([]);
  React.useEffect(() => {
    this.debounceOnChange = debounce(fetchData, 500);
  }, []);

  const fetchData = (value) => {
    console.log("fetchData");
    fetch(`https://api.github.com/users/${value}/repos`).then(
      async (response) => {
        var data = await response.json();
        console.log("response", data);
        setDataList(data);
      }
    );
  };

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
      <ul className="data-list">
        {dataList.map((data, index) => {
          return <li>{data.name}s</li>;
        })}
      </ul>
    </div>
  );
}

//2nd method

// import "./styles.css";
// import { useEffect, useState, useRef } from "react";
// const useDebounce = (value, time) => {
//   const timer = useRef(null);
//   const [newValue, setValue] = useState(value);
//   useEffect(() => {
//     timer.current = setTimeout(() => {
//       setValue(value);
//     }, time);
//     return () => {
//       clearTimeout(timer.current);
//     };
//   }, [value]);

//   return newValue;
// };

// export default function App() {
//   const [value, setValue] = useState("a");
//   // this value changes frequently,
//   const debouncedValue = useDebounce(value, 3000);

//   // now it is debounced
//   const onChange = (text) => {
//     setValue(text);
//     // debouncedValue(text);
//   };
//   return (
//     <div className="App">
//       <h1>{debouncedValue}</h1>
//       <input value={value} onChange={(evt) => onChange(evt.target.value)} />
//     </div>
//   );
// }
