import ConstructorField from "../ConstructorField";
import addIcon from "../../images/add-icon.svg";

interface CalculatorProps {
  content: React.ReactNode[];
}

const Calculator = ({ content }: CalculatorProps) => {
  return content.length > 0 ? (
    <div>
      {content.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  ) : (
    <ConstructorField
      title="Перетащите сюда"
      text="любой элемент из левой панели"
      image={addIcon}
    />
  );
};

export default Calculator;
