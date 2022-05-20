import { useState } from "react";
import './form.css'
//anonymous default export, not recommended, bad practice. just using it for testing

export default function Form(props) {

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(isSubmitted, " should be true after submission");

//     const regex = new RegExp('(ftp|https|http|localhost?)://[^ "]+$');

//     if (regex.test(props.url) && props.method) {
//       console.log(" i will submit your chosen method", props.method);
//       console.log(" i will submit your chosen url", props.url);
//       if (props.requestBody) {
//       console.log(" i will submit your request body",props.requestBody);
//       }
// // props.request (props.method, props.url, props.requestBody)
//       props.fetchAll(props.method, props.url, props.requestBody
//         ).then(res => console.log('post req',res))
        
//       setIsSubmitted(true);
//       // setTimeout(() => props.setToggle(true), 500);
      

//     } else {
//       return console.log("enter a valid url");
//     }
//   }

const [isSubmitted, setisSubmitted] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(e.target.methods.value); works only with onSubmit event for forms

  console.log("onsubmit method is", props.method);
  console.log("onsubmit url is", props.url);

  console.log("from inside the child: i will submit");
  setTimeout(() => {
    props.setLoading(true);
  }, 2000);
  setisSubmitted(true)
  // props.setLoading(true);
};

let textarea; // JS enviroment

if (props.method === "post" || props.method === "put") {
  textarea = // to convert from JS enviroment to JSX use (). this is assigning jsx to a js variable
    (
      <>
        <textarea
          className="request-body"
          id="request-body"
          name="request-body"
          placeholder="Enter your request body object in JSON format"
          value={props.requestBody}
          onChange={props.handleChange}
          // i need to move onchange from child to parent
        />
      </>
    );
}

// useEffect ( ()=> {
//   let 

// }, isSubmitted)

return (
  <>
    <form onSubmit={handleSubmit}>
      <select
        name="methods"
        //   value={props.method}
        onChange={props.handleChange}
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
        //   value={props.url} // x = 1
        onChange={props.handleChange}
        required
      />
      <button type="submit"> Go</button> <br />
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
