import "./App.css";
import Calc from "./components/Calculator/Calculator";

function App() {
  const firstNum = +prompt("Send first number");
  const operator = prompt("Send operator");
  const secondNum = +prompt("Send second number");
  return (
    <div className="App">
      <Calc firstNum={firstNum} operator={operator} secondNum={secondNum} />
    </div>
  );
}

export default App;
