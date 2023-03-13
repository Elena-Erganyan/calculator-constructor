import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { evaluate } from "../utils";

export interface CalculatorState {
  display?: string;
  operation?: Operation[];
  overwrite: boolean;
  previousValue?: string;
  value?: string;
}

const initialState: CalculatorState = {
  display: "0",
  operation: [],
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
        state.display = state.value;
        state.overwrite = false;
        return;
      }

      if (state.value === "0" && action.payload !== ",") {
        state.overwrite = true;
        return;
      }

      if (state.value?.includes(",") && action.payload === ",") return;

      state.value += action.payload;
      state.display = state.value;
    },
    chooseOperation: (state, action: PayloadAction<Operation>) => {
      if (state.previousValue !== undefined) {
        if (state.operation?.length) {
          const result = evaluate(
            state.value,
            state.previousValue,
            state.operation
          );
          if (result !== undefined) {
            state.value = undefined;
            state.display = result;
            state.previousValue = result;
          }
        }
      } else {
        state.previousValue = state.value;
        state.value = undefined;
      }

      state.operation?.push(action.payload);
      state.overwrite = true;
    },
    clear: (state) => {
      state.operation = undefined;
      state.overwrite = true;
      state.previousValue = undefined;
      state.value = "0";
      state.display = state.value;
    },
    calculate: (state) => {
      if (
        state.value !== undefined &&
        state?.value[state.value.length - 1] === ","
      ) {
        state.value = state.value?.slice(0, -1);
      }

      if (!state.operation) {
        if (state.previousValue !== undefined) {
          state.previousValue = state.value;
        }
        state.overwrite = true;
        return;
      }
      if (state.previousValue !== undefined) {
        let result = evaluate(
          state.value,
          state.previousValue,
          state.operation
        );

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        if (/(-?Infinity|NaN)/.test(`${result}`)) {
          result = "Не определено";
        }

        state.previousValue = undefined;
        state.operation = [];
        state.value = result;
        state.display = state.value;
        state.overwrite = true;
      }
    },
  },
});

export const { addDigit, chooseOperation, clear, calculate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
