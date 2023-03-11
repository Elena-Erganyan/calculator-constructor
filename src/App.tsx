import { useState } from "react";
import { ThemeProvider } from "styled-components";
import BlocksArea from "./components/BlocksArea";
import ConstructorArea from "./components/ConstructorArea";
import GlobalStyles, { colors } from "./GlobalStyles";
import { StyledAppContainer } from "./styled";

function App() {
  const [mode, setMode] = useState<Mode>("constructor");
  const [content, setContent] = useState<string[]>([]);

  return (
    <ThemeProvider theme={colors}>
      <StyledAppContainer>
        <GlobalStyles />
        <BlocksArea mode={mode} />
        <ConstructorArea
          content={content}
          mode={mode}
          setContent={setContent}
          setMode={setMode}
        />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
