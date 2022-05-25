import { Header } from "./components/header/header";
import Form from "./components/form/form"; // not using {} because it's default export and can give it any name i want bcz it's anonymous
// const Form = require("./components/form/form").default // is the same as import
import { Results } from "./components/results/results"; // named export
import { Footer } from "./components/footer/footer";
import {History} from "./components/history/History"
import { useEffect, useRef, useState, useReducer } from "react";
import historyReducer, { addAction, removeAction } from "./Reducer";

const initialState = {
  historyList: [],
  count: 0,
};

function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("get");
  const [requestBody, setrequestBody] = useState("");
  const [fetchedData, setfetchedData] = useState("");
  // const [headers, setHeaders] = useState("")
  const [loading, setLoading] = useState(false);
  const [state, dispacth] = useReducer(historyReducer, initialState); //1- not defined yet and i need to define them

  const entriesRef = useRef(false);

  useEffect(() => {
    if (entriesRef.current) {
      console.log("method after update", method);
      console.log("url after update", url);
      console.log(
        "requestBody after update in case of post and put",
        requestBody
      );
    } else {
      entriesRef.current = true;
    }
  }, [method, url, requestBody]); //componentDidUpdate, when u update method and url do this (1)

  useEffect(() => {
    if (!loading) return; //if loading is false do nothing
    // console.log(loading);
    const fetchData = async (method, url, data) => {
      let fetched = await fetch(url, {
        method: method,
        headers: data ? { "Content-Type": "application/json" } : {},
        if(data) {
          return { body: JSON.stringify({ data }) };
        },
      });

      const res = await fetched.json();
      // const headers = fetched.headers;
      

      // setHeaders(headers);
      setfetchedData(res);

      setLoading(false);
    };
    fetchData(method, url, requestBody);
    dispacth(addAction(url));

  }, [loading, method, url, requestBody]);

  function handleChange(e) {
    // console.log(e.target.methods);
    // console.log(e.target.type);
    console.log("inside the parent i will set");
    if (e.target.type === "text") {
      setUrl(e.target.value);
    } else if (e.target.type === "select-one") {
      setMethod(e.target.value);
    } else if (e.target.type === "textarea") {
      setrequestBody(e.target.value);
    }
    //set states inside the function
  }
  //changevalue to set states


  return (
    <div className="App">
      <Header />
      <Form
        handleChange={handleChange}
        method={method}
        url={url}
        setLoading={setLoading}
      />
      <Results fetchedData={fetchedData} loading={loading} />
      <History historyList={state.historyList} setLoading={setLoading}/>
      <Footer />
    </div>
  );
}

export default App;
