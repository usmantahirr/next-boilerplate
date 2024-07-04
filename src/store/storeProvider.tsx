"use client"

import { store, persistor } from "."
import { type ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { FullPageLoader } from "@components/shared"

export default function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullPageLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
