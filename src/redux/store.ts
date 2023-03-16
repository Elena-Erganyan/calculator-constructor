import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";
import calcConstructorReducer from "./calcConstructorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    calcConstructor: calcConstructorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
