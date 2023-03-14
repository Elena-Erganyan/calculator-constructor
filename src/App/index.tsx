import { useState } from "react";
import { ThemeProvider } from "styled-components";
import BlocksArea from "../components/BlocksArea";
import ConstructorArea from "../components/ConstructorArea";
import GlobalStyles, { colors } from "../GlobalStyles";
import { StyledAppContainer } from "./styled";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Display from "../components/Display";
import EqualButton from "../components/EqualButton";
import Operators from "../components/Operators";
import Digits from "../components/Digits";

function App() {
  const [mode, setMode] = useState<Mode>("constructor");

  const initialData = {
    fields: {
      blocksArea: [Display, Operators, Digits, EqualButton],
      constructorField: [],
    },
  };

  const findComponent = (name: string) => {
    switch (name) {
      case "Display":
        return Display;
      case "Operators":
        return Operators;
      case "Digits":
        return Digits;
      case "EqualButton":
        return EqualButton;
      default:
        return;
    }
  };

  const [data, setData] = useState(initialData);

  const handleOnDragEnd = (result: DropResult) => {
    // console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (
      destination.droppableId === "constructorField" &&
      !data.fields.constructorField.some((item) => item.name === draggableId)
    ) {
      if (draggableId === "Display") {
        console.log("Not draggable");
      }

      const newField = data.fields[destination.droppableId].splice(
        destination.index,
        0,
        findComponent(draggableId)
      );

      setData((oldData) => ({
        ...oldData,
        fields: { ...oldData.fields, newField },
      }));
    }
  };

  return (
    <ThemeProvider theme={colors}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StyledAppContainer>
          <GlobalStyles />
          <BlocksArea mode={mode} data={data} setData={setData} />
          <ConstructorArea data={data} mode={mode} setMode={setMode} />
        </StyledAppContainer>
      </DragDropContext>
    </ThemeProvider>
  );
}

export default App;
