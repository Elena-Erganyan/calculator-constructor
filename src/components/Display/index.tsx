import { Draggable } from "@hello-pangea/dnd";
import { useAppSelector } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledDisplay } from "./styled";

const Display = () => {
  const display = useAppSelector((state) => state.calculator.display);

  return (
    <Draggable draggableId="display" index={0}>
      {(provided) => (
        <StyledBlockWrapper
          ref={provided.innerRef}
          style={{ height: "6rem" }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledDisplay>{display}</StyledDisplay>
        </StyledBlockWrapper>
      )}
    </Draggable>
  );
};

export default Display;
