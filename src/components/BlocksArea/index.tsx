import { Droppable } from "@hello-pangea/dnd";
import Digits from "../Digits";
import Display from "../Display";
import EqualButton from "../EqualButton";
import Operators from "../Operators";
import { StyledBlocksArea } from "./styled";

interface BlocksAreaProps {
  mode: Mode;
}

const BlocksArea = ({ mode }: BlocksAreaProps) => {
  return (
    <Droppable droppableId="blocksArea">
      {(provided) => (
        <StyledBlocksArea
          mode={mode}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Display />
          <Operators />
          <Digits />
          <EqualButton />
          {provided.placeholder}
        </StyledBlocksArea>
      )}
    </Droppable>
  );
};

export default BlocksArea;
