import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConstructorState {
  blocksArea: string[];
  constructorField: string[];
  mode: Mode;
}

const initialState: ConstructorState = {
  blocksArea: ["Display", "Operators", "Digits", "EqualButton"],
  constructorField: [],
  mode: "constructor",
};

export const calcConstructorSlice = createSlice({
  name: "calcConstructor",
  initialState,
  reducers: {
    reorderBlock: (
      state,
      action: PayloadAction<{
        sourceIndex: number;
        destinationIndex: number;
        draggableId: string;
      }>
    ) => {
      state.constructorField.splice(action.payload.sourceIndex, 1);
      state.constructorField.splice(
        action.payload.destinationIndex,
        0,
        action.payload.draggableId
      );
    },
    cloneBlock: (
      state,
      action: PayloadAction<{ destinationIndex: number; draggableId: string }>
    ) => {
      state.constructorField.splice(
        action.payload.destinationIndex,
        0,
        action.payload.draggableId
      );
    },
    toggleMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
  },
});

export const { cloneBlock, reorderBlock, toggleMode } =
  calcConstructorSlice.actions;

export default calcConstructorSlice.reducer;
