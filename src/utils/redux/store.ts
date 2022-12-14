import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga/rootSaga";

// const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
    // middleware: [sagaMiddleware],
})

// sagaMiddleware.run(rootSaga);
// simple 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
