import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useAppSelector } from "../../redux/hooks";
import { findComponent } from "../../utils";
import { StyledBlocksArea } from "./styled";

const BlocksArea = () => {
  const blocksArea = useAppSelector(
    (state) => state.calcConstructor.blocksArea
  );

  const mode = useAppSelector((state) => state.calcConstructor.mode);

  return (
    <Droppable droppableId="blocksArea" isDropDisabled={true}>
      {(provided) => (
        <StyledBlocksArea
          mode={mode}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {blocksArea.map((item: string, i: number) => {
            const Item = findComponent(item);

            return (
              <Draggable draggableId={item} index={i} key={item}>
                {(provided, snapshot) =>
                  Item && (
                    <>
                      <Item
                        innerRef={provided.innerRef}
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          opacity: snapshot.isDragging ? 0.7 : 1,
                        }}
                      />
                      {snapshot.isDragging && <Item />}
                    </>
                  )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </StyledBlocksArea>
      )}
    </Droppable>
  );
};

export default BlocksArea;
