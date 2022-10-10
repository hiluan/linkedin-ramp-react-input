import { useState } from "react";
import GetDateTime from "./GetDateTime";
import GetArray from "./GetArray";
import HandleDateTime from "./HandleDateTime";
import "../styles.scss";

const HandleInput = () => {
  const falsy = ["false", "undefined", "null", "NaN", "0"];
  const [val, setVal] = useState("");
  const [isFalsy, setIsFalsy] = useState(false);
  const [currentArr, setCurrentArr] = useState([]);

  const getInput = (e) => {
    const targetValue = e.target.value;
    setVal(targetValue);

    // If the "input" prop is falsy
    falsy.includes(targetValue) ? setIsFalsy(true) : setIsFalsy(false);

    // // If the "input" prop is an array
    setCurrentArr(GetArray(targetValue));
  };

  const dateTime = isFalsy ? GetDateTime(true) : GetDateTime(false);

  return (
    <div>
      <input
        placeholder="Type something here"
        value={val}
        id="input"
        onChange={getInput}
      />

      {isFalsy && <HandleDateTime dateTime={dateTime} />}

      {currentArr.length > 0 && (
        <div id="isArray">
          <ul>
            {currentArr.map((arr, i) => (
              <li key={i}>{arr}</li>
            ))}
          </ul>
        </div>
      )}

      {!isFalsy && currentArr.length === 0 && (
        <div id="isText">
          <a href="/">{val}</a>
        </div>
      )}
    </div>
  );
};

export default HandleInput;
