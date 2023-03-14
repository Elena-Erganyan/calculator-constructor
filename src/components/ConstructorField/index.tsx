import { Droppable } from "@hello-pangea/dnd";
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

const ConstructorField = ({ data, title, text, image }: ConstructorFieldProps) => {
  return (
    <Droppable droppableId="constructorField">
      {(provided) => (
        <StyledConstructorField
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data.fields.constructorField?.length ? data.fields.constructorField?.map((Comp) => <Comp />) :
            <>
              <img alt="Icon" src={image} />
              <StyledConstructorTitle>{title}</StyledConstructorTitle>
              <StyledConstructorText>{text}</StyledConstructorText>
            </>}
          {provided.placeholder}
        </StyledConstructorField>
      )}
    </Droppable>
  );
};

export default ConstructorField;
