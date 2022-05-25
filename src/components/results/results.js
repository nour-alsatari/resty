import "./results.css";
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/monikai";

const Results = (props) => {
 
  return (
    <>
      {console.log("logging fetched:", props.fetchedData)}
      {props.loading && <p> loading...</p>}
      <label for="response">Response:</label> <br />
      <textarea
        className="textinput"
        id="response"
        name="response"
        rows="20"
        cols="100"
        readOnly
        value={
          props.fetchedData ? JSON.stringify(props.fetchedData, null, 2) : ""
        }
      ></textarea>
      
      {/* <JSONPretty
        id="json-pretty"
        theme={JSONPrettyMon}
        data={props.fetchedData}
      ></JSONPretty> */}

  
    </>
  );
};

export { Results }; // named export
