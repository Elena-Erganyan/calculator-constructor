import { ThemeProvider } from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  cloneBlock,
  reorderBlock,
  selectBlocksArea,
  selectConstructorField,
} from "../redux/calcConstructorSlice";
import BlocksArea from "../components/BlocksArea";
import ConstructorArea from "../components/ConstructorArea";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import GlobalStyles, { colors } from "../GlobalStyles";
import { StyledAppContainer } from "./styled";

function App() {
  const dispatch = useAppDispatch();

  const blocksArea = useAppSelector(selectBlocksArea);

  const constructorField = useAppSelector(selectConstructorField);

  const handleOnDragEnd = (result: DropResult) => {
    console.log(blocksArea, constructorField);
    const { destination, source, draggableId } = result;

    // dropped outside the list
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (destination.droppableId === "constructorField") {
      if (draggableId === "Display") {
        destination.index = 0;
      } else {
        if (destination.index === 0) {
          destination.index = 1;
        }
      }
      if (destination.droppableId === source.droppableId) {
        if (destination.index !== source.index) {
          dispatch(
            reorderBlock({
              sourceIndex: source.index,
              destinationIndex: destination.index,
              draggableId,
            })
          );
        }
      } else {
        if (
          !constructorField.some(
            (item: string) => item.indexOf(draggableId) !== -1
          )
        ) {
          dispatch(
            cloneBlock({ destinationIndex: destination.index, draggableId })
          );
        }
      }
    }
  };

  return (
    <ThemeProvider theme={colors}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StyledAppContainer>
          <GlobalStyles />
          <BlocksArea />
          <ConstructorArea />
        </StyledAppContainer>
      </DragDropContext>
    </ThemeProvider>
  );
}

export default App;
