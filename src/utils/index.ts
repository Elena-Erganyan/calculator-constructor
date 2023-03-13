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
