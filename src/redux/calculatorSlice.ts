import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { evaluate } from "../utils";

export interface CalculatorState {
  operation?: Operation;
  overwrite: boolean;
  previousValue?: string;
  value: string;
}

const initialState: CalculatorState = {
  operation: undefined,
  overwrite: true,
  previousValue: undefined,
  value: "0",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.overwrite) {
        state.value = (action.payload === "," ? "0" : "") + action.payload;
        state.overwrite = false;
        return;
      }

      if (state.value === "0" && action.payload === "0") return;

      if (state.value.includes(",") && action.payload === ",") return;

      state.value += action.payload;
    },
    chooseOperation: (state, action: PayloadAction<Operation>) => {
      if (state.previousValue !== undefined) {
        if (state.operation) {
          const result = evaluate(
            state.value,
            state.previousValue,
            state.operation
          );
          state.value = result;
          state.previousValue = result;
        }
      } else {
        state.previousValue = state.value;
      }
      state.operation = action.payload;
      state.overwrite = true;
    },
    clear: (state) => {
      state.operation = undefined;
      state.overwrite = true;
      state.previousValue = undefined;
      state.value = "0";
    },
    calculate: (state) => {
      const lastChar = state.value.length - 1;
      if (state.value[lastChar] === ",") {
        state.value = state.value.slice(0, -1);
      }

      if (!state.operation) {
        if (state.previousValue !== undefined) {
          state.previousValue = state.value;
        }
        state.overwrite = true;
        return;
      }

      let result = evaluate(state.value, state.previousValue, state.operation);

      if (/(-?Infinity|NaN)/.test(result)) {
        result = "Не определено";
      }

      state.previousValue = undefined;
      state.operation = undefined;
      state.value = result;
      state.overwrite = true;
    },
  },
});

export const { addDigit, chooseOperation, clear, calculate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
