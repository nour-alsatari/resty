import {Header} from "./components/header";
import Form from './components/form'; // not using {} because it's default export and can give it any name i want bcz it's anonymous 
import {Results} from './components/results/results'; // named export
import {Footer} from './components/footer/footer';
import {useState} from 'react'

// convert it to class tomorrow
function App() {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('get')
  const [requestBody, setRequestBody] = useState()


  return (
    <div className="App">
      <Header />
      <Form url={url} setUrl={setUrl} method={method} setMethod={setMethod} requestBody={requestBody} setRequestBody={setRequestBody}/>
      {/* {console.log(`after form submission my url is ${url} and my method is: ${method}`)} */}
      <Results url={url} method={method}/>
      <Footer />
    </div>
  );
}

export default App;
