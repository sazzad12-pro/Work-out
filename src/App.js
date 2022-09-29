import "./App.css";
import Header from "./component/Header/Header";
import Product from "./component/product/Product";
import Question from "./component/question/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
      <Question></Question>
    </div>
  );
}

export default App;
