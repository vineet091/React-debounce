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
