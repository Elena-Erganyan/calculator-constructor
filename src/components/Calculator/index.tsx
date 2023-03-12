import ConstructorField from "../ConstructorField";
import addIcon from "../../images/add-icon.svg";
import { useScreenWidth } from "../useScreenWidth";

interface CalculatorProps {
  content: React.ReactNode[];
}

const Calculator = ({ content }: CalculatorProps) => {
  const screenWidth = useScreenWidth();

  return content.length > 0 ? (
    <div>
      {content.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  ) : (
    <ConstructorField
      title="Перетащите сюда"
      text={`любой элемент из ${screenWidth > 768 ? "левой" : "нижней"} панели`}
      image={addIcon}
    />
  );
};

export default Calculator;
