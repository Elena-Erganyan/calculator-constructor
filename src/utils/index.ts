import Digits from "../components/Digits";
import Display from "../components/Display";
import EqualButton from "../components/EqualButton";
import Operators from "../components/Operators";

export const evaluate = (
  valueStr: string | undefined,
  previousValueStr: string,
  operation: Operation[]
) => {
  if (valueStr === undefined) {
    operation = [operation[1]];
    return;
  }

  const value = parseFloat(valueStr.replace(",", "."));
  const previousValue = parseFloat(previousValueStr.replace(",", "."));

  if (isNaN(value) || isNaN(previousValue)) return "";

  let result = 0;

  switch (operation.pop()) {
    case "/":
      result = previousValue / value;
      break;
    case "x":
      result = previousValue * value;
      break;
    case "-":
      result = previousValue - value;
      break;
    case "+":
      result = previousValue + value;
      break;
  }

  if (/(-?Infinity|NaN)/.test(`${result}`)) {
    return "Не определено";
  }

  return `${result}`.replace(".", ",");
};

export const findComponent = (name: string) => {
  switch (name) {
    case "Display":
      return Display;
    case "Operators":
      return Operators;
    case "Digits":
      return Digits;
    case "EqualButton":
      return EqualButton;
  }
};
