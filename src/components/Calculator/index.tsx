import ConstructorField from "../ConstructorField";
import addIcon from "../../images/add-icon.svg";
import { useScreenWidth } from "../useScreenWidth";

const Calculator = ({data}) => {
  const screenWidth = useScreenWidth();

  return (
    <ConstructorField
      data={data}
      title="Перетащите сюда"
      text={`любой элемент из ${screenWidth > 768 ? "левой" : "нижней"} панели`}
      image={addIcon}
    />
  );
};

export default Calculator;
