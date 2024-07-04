import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"

import persistConfig from "./persistConfig"
import rootReducer from "./rootReducer"

const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          ignoredPaths: ["_persist"],
        },
      }),
    devTools: process.env.NODE_ENV !== "production",
  })

  // Add a persist store to our Redux store
  const persistor = persistStore(store)

  return { store, persistor }
}

const store = makeStore().store
const persistor = makeStore().persistor

export { store, persistor, makeStore }
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["store"]["dispatch"]
export type RootState = ReturnType<AppStore["store"]["getState"]>
