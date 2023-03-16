import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useTheme } from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { findComponent } from "../../utils";
import {
  StyledConstructorField,
  StyledConstructorTitle,
  StyledConstructorText,
} from "./styled";

interface ConstructorFieldProps {
  title: string;
  text: string;
  image: string;
}

const ConstructorField = ({ title, text, image }: ConstructorFieldProps) => {
  const theme = useTheme();

  const constructorField = useAppSelector(
    (state) => state.calcConstructor.constructorField
  );

  return (
    <Droppable droppableId="constructorField">
      {(provided, snapshot) => (
        <StyledConstructorField
          isEmpty={constructorField.length === 0}
          ref={provided.innerRef}
          style={{
            backgroundColor:
              snapshot.isDraggingOver && !constructorField.length
                ? theme.sky
                : theme.white,
          }}
          {...provided.droppableProps}
        >
          {constructorField.length > 0 ? (
            constructorField.map((item: string, i: number) => {
              const Item = findComponent(item);
              return (
                <Draggable draggableId={item} index={i} key={item}>
                  {(provided) => (
                    <Item
                      innerRef={provided.innerRef}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              );
            })
          ) : (
            <>
              <img alt="Icon" src={image} />
              <StyledConstructorTitle>{title}</StyledConstructorTitle>
              <StyledConstructorText>{text}</StyledConstructorText>
            </>
          )}
          {provided.placeholder}
        </StyledConstructorField>
      )}
    </Droppable>
  );
};

export default ConstructorField;
