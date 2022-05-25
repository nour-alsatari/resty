import { useEffect, useReducer, useState } from "react";
import historyReducer, { addAction, removeAction } from "../../Reducer";
import "./history.css";

const initialState = {
  historyList: [],
  count: 0,
};
const History = (props) => {
  const [state, dispacth] = useReducer(historyReducer, initialState); //1- not defined yet and i need to define them
  const [isStorage, setisStorage] = useState(false);
  const [localslist, setlocalslist] = useState(JSON.parse(localStorage.getItem("request")))
  console.log(
    "state reducer sent as props inside history comp",
    props.historyList
  );


  useEffect(() => {
    console.log("localstorageeee in history", localStorage);
    if (localStorage.length === 0) return;
    setisStorage(true);
console.log(localslist)  
}, []);

//or use useref and keep the mutable value in the .current property
  return (
    <>
      <div className="history-container">
        <p> History requests</p>
        <ul> 
        {isStorage &&
          localslist.map((url, index) => {
            return (
              <>
                <li key={index}> {url}</li>
                <br />
              </>
            );
          })}
          </ul>

          <ul> 
        {
          props.historyList.map((url, index) => {
            return (
              <>
                <li key={index}> {url}</li>
                <br />
              </>
            );
          })}
          </ul>

       
      </div>
    </>
  );
};

export { History }; // named export
