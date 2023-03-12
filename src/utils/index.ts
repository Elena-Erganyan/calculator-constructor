export const evaluate = (
  valueStr: string,
  previousValueStr: string,
  operation: Operation
) => {
  console.log({valueStr, previousValueStr, operation});

  if (valueStr === undefined) {
    operation = [operation[1]];
    return;
  }

  const value = parseFloat(valueStr.replace(",", "."));
  const previousValue = parseFloat(previousValueStr.replace(",", "."));

  if (isNaN(value) || isNaN(previousValue)) return "";

  let result;

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

  return `${result}`.replace(".", ",");
};
