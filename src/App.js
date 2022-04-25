import {Header} from "./components/header";
import Form from './components/form'; // not using {} because it's default export and can give it any name i want bcz it's anonymous 
import {Results} from './components/results/results'; // named export
import {Footer} from './components/footer/footer';

// convert it to class tomorrow
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
