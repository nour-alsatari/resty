import './results.css'

const Results = () => {
  return (
    <div>
      <label for="response">Response:</label> <br />

      <textarea className="textinput" id="response" name="response" rows="20" cols="100">
       
      </textarea>
    </div>
  );
};

export { Results }; // named export
