const Calc = ({ firstNum, operator, secondNum }) => {
  let sentence = "Result of your sum is :";
  if (operator === "+") {
    return <h1>{`${sentence} ${firstNum + secondNum}`}</h1>;
  } else if (operator === "-") {
    return <h1>{`${sentence} ${firstNum - secondNum}`}</h1>;
  } else if (operator === "*") {
    return <h1>{`${sentence} ${firstNum * secondNum}`}</h1>;
  } else if (operator === "/") {
    return <h1>{`${sentence} ${(firstNum / secondNum).toFixed(2)}`}</h1>;
  }
};
export default Calc;
