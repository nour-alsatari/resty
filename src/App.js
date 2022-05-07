import { Header } from "./components/header/header";
import Form from "./components/form/form"; // not using {} because it's default export and can give it any name i want bcz it's anonymous
import { Results } from "./components/results/results"; // named export
import { Footer } from "./components/footer/footer";
import { useEffect, useState } from "react";
// import axios from "https://unpkg.com/axios/dist/axios.min.js";

// console.log(axios);

// convert it to class tomorrow
function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("get");
  const [requestBody, setRequestBody] = useState("");
  const [fetchedData, setFetchedData] = useState('')

  // async function fetching() {
  //  let fetched = await fetch('https://reqres.in/api/users?page=1')
  // .then(response => response.json())
  // .then(data => console.log(data));
  // console.log(fetched);
  // }


  async function fetchAll (method, url, data){
    let fetched = await fetch (url, {
      method: method,
      headers: data? {'Content-Type' : 'application/json'} : {},
      if (data) {
       return {body: JSON.stringify({data})}
        
      }

    })
   let temp = await fetched.json();
     setFetchedData(temp) 

    }
  
    // fetchAll(method, url, requestBody
    //   ).then(res => console.log('post req',res))
    


  return (
    <div className="App">
      <Header />
      <Form
        url={url}
        setUrl={setUrl}
        method={method}
        setMethod={setMethod}
        requestBody={requestBody}
        setRequestBody={setRequestBody}
        fetchAll={fetchAll}
      />
      {/* {console.log(`after form submission my url is ${url} and my method is: ${method}`)} */}
      {/* {sendReq()} */}
      <Results url={url} method={method} fetchedData={fetchedData} />
      <Footer />
    </div>
  );
}

export default App;
