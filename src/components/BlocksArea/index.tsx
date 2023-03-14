import { Droppable, Draggable } from "@hello-pangea/dnd";
import { StyledBlocksArea } from "./styled";

interface BlocksAreaProps {
  mode: Mode;
}

const BlocksArea = ({ mode, data }: BlocksAreaProps) => {
  return (
    <Droppable droppableId="blocksArea">
      {(provided) => (
        <StyledBlocksArea
          mode={mode}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data?.fields.blocksArea.map((Item, i) => (
            <Draggable draggableId={Item.name} index={i} key={i}>
              {(provided) => (
                <Item
                  innerRef={provided.innerRef}
                  draggableProps={provided.draggableProps}
                  dragHandleProps={provided.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </StyledBlocksArea>
      )}
    </Droppable>
  );
};

export default BlocksArea;
