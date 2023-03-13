import ConstructorField from "../ConstructorField";
import addIcon from "../../images/add-icon.svg";
import { useScreenWidth } from "../useScreenWidth";

const Calculator = () => {
  const screenWidth = useScreenWidth();

  return (
    <ConstructorField
      title="Перетащите сюда"
      text={`любой элемент из ${screenWidth > 768 ? "левой" : "нижней"} панели`}
      image={addIcon}
    />
  );
};

export default Calculator;
