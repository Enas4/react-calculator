import PropTypes from "prop-types";

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

Calc.propTypes = {
  firstNum: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
  secondNum: PropTypes.number.isRequired,
};
export default Calc;
