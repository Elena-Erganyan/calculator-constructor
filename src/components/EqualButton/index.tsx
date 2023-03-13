import { Draggable } from "@hello-pangea/dnd";
import { calculate } from "../../redux/calculatorSlice";
import { useAppDispatch } from "../../redux/hooks";
import { StyledBlockWrapper } from "../commonStyledComps";
import { StyledEqualButton } from "./styled";

const EqualButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Draggable draggableId="equalButton" index={3}>
      {(provided) => (
        <StyledBlockWrapper
          ref={provided.innerRef}
          style={{ height: "7.2rem" }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledEqualButton onClick={() => dispatch(calculate())}>
            =
          </StyledEqualButton>
        </StyledBlockWrapper>
      )}
    </Draggable>
  );
};

export default EqualButton;
