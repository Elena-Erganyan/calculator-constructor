import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

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

// selectors
export const selectBlocksArea = (state: RootState) =>
  state.calcConstructor.blocksArea;

export const selectConstructorField = (state: RootState) =>
  state.calcConstructor.constructorField;

export const selectMode = (state: RootState) => state.calcConstructor.mode;
