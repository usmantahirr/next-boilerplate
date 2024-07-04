import { combineReducers } from "@reduxjs/toolkit"

import { metadataReducer } from "./slices"

const rootReducer = combineReducers({
  metadata: metadataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
