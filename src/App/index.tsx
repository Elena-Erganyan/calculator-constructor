import { useState } from "react";
import { ThemeProvider } from "styled-components";
import BlocksArea from "../components/BlocksArea";
import ConstructorArea from "../components/ConstructorArea";
import GlobalStyles, { colors } from "../GlobalStyles";
import { StyledAppContainer } from "./styled";
import { DragDropContext } from "@hello-pangea/dnd";

function App() {
  const [mode, setMode] = useState<Mode>("constructor");

  return (
    <ThemeProvider theme={colors}>
      <DragDropContext onDragEnd={(evt) => console.log(evt)}>
        <StyledAppContainer>
          <GlobalStyles />
          <BlocksArea mode={mode} />
          <ConstructorArea mode={mode} setMode={setMode} />
        </StyledAppContainer>
      </DragDropContext>
    </ThemeProvider>
  );
}

export default App;
