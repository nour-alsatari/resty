//anonymous default export, not recommended, bad practice. just using it for testing

export default function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();

    console.log(" i will submit your chosen method", props.method);
    console.log(" i will submit your chosen url", props.url);
    if (props.requestBody) {
      return console.log(" i will submit your request body", props.requestBody);
    }
  }

  let requestBody;

  if (props.method === "post" || props.method === "put") {
    requestBody = (
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
          }}
          required
        />
        <button type="submit"> Go</button> <br />
        {/* <input type="submit" value="Go" /> */}
        {requestBody}
      </form>
    </>
  );
}
