import "./results.css";

const Results = (props) => {
  function userRequest(url, method) {
    const regex = new RegExp('(ftp|https|http|localhost?)://[^ "]+$');

    // console.log(regex.test(url));

    if (regex.test(url) && method) {
      return (
        <p>
          {" "}
          the link you requested is {url} and your method is {method}{" "}
        </p>
      );
    } else {
      return <p> enter a valid url that starts with http or https</p>;
    }
  }

  return (
    <>
      {userRequest(props.url, props.method)}
      <label for="response">Response:</label> <br />
      <textarea
        className="textinput"
        id="response"
        name="response"
        rows="20"
        cols="100"
      ></textarea>
    </>
  );
};

export { Results }; // named export
