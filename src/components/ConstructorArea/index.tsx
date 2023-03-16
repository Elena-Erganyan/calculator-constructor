import ConstructorField from "../ConstructorField";
import SwitchButton from "../SwitchButton";
import { useScreenWidth } from "../useScreenWidth";
import { StyledConstructorArea } from "./styled";
import addIcon from "../../images/add-icon.svg";

const ConstructorArea = () => {
  const screenWidth = useScreenWidth();

  return (
    <StyledConstructorArea>
      <SwitchButton />
      <ConstructorField
        title="Перетащите сюда"
        text={`любой элемент из ${
          screenWidth > 768 ? "левой" : "нижней"
        } панели`}
        image={addIcon}
      />
    </StyledConstructorArea>
  );
};

export default ConstructorArea;
