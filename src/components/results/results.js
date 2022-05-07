import "./results.css";
import { useState } from "react";

const Results = (props) => {
  
const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <label for="response">Response:</label> <br />
      <textarea
        className="textinput"
        id="response"
        name="response"
        rows="20"
        cols="100"
        readOnly value={
          props.fetchedData? JSON.stringify(props.fetchedData) : ''
        }
      ></textarea>
    </>
  );
};

export { Results }; // named export
