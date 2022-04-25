//anonymous default export, not recommended, bad practice. just using it for testing


export default function Form() {

  return (
    <>
      <form>
        {/* <input type="radio" name="method" value= "get" required /> <span>GET</span> 
<input type="radio" name="method" value= "post" required/> <span>POST</span> 
<input type="radio" name="method" value= "put" required/> <span>PUT</span> 
<input type="radio" name="method" value= "delete" required/> <span>DELETE</span> 

<br/> */}

        <select name="methods" required>
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
          required
        />

        <button type="submit"> Go</button>
        {/* <input type="submit" value="Go" /> */}
      </form>

    </>
  );
}
