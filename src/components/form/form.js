import { useState } from "react";
import './form.css'
//anonymous default export, not recommended, bad practice. just using it for testing

export default function Form(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(isSubmitted, " should be true after submission");

    const regex = new RegExp('(ftp|https|http|localhost?)://[^ "]+$');

    if (regex.test(props.url) && props.method) {
      console.log(" i will submit your chosen method", props.method);
      console.log(" i will submit your chosen url", props.url);
      if (props.requestBody) {
      console.log(" i will submit your request body",props.requestBody);
      }

      props.fetchAll(props.method, props.url, props.requestBody
        ).then(res => console.log('post req',res))
        
      setIsSubmitted(true);

    } else {
      return console.log("enter a valid url");
    }
  }

  let textarea;

  if (props.method === "post" || props.method === "put") {
    textarea = (
      <>
        <textarea
          className="request-body"
          id="request-body"
          name="request-body"
          placeholder="Enter your request body object in JSON format"
          value={props.requestBody}
          onChange={(e) => props.setRequestBody(e.target.value)}
        />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input type="radio" name="method" value= "get" required /> <span>GET</span> 
<input type="radio" name="method" value= "post" required/> <span>POST</span> 
<input type="radio" name="method" value= "put" required/> <span>PUT</span> 
<input type="radio" name="method" value= "delete" required/> <span>DELETE</span> 

<br/> */}
        <select
          name="methods"
          value={props.method}
          onChange={(e) => {
            // e or this.value
            props.setMethod(e.target.value);
          }}
          required
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <input
          type="text"
          id="url"
          name="urlarea"
          placeholder="http://api.url.here"
          value={props.url} // x = 1
          onChange={(e) => {
            props.setUrl(e.target.value);
            setIsSubmitted(false);
          }}
          required
        />
        <button type="submit"> Go</button> <br />
        {/* <input type="submit" value="Go" /> */}
        {textarea}
      </form>

      {isSubmitted === true ? (
        <p>
          the link you requested is {props.url} and your method is{" "}
          {props.method}{" "}
        </p>
      ) : (
        <p> please enter a url that starts with http or https </p>
      )}
    </>
  );
}
