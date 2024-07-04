import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CLEAR_STORAGE } from "../actions/clearStorage"

type MetadataState = {
  applicationName: string
  version: string
}

interface MetadataSlice {
  data: MetadataState
}

const initialState: MetadataSlice = {
  data: {
    applicationName: "boilerplate",
    version: "1.2",
  },
}

export const metadataSlice = createSlice({
  name: "metadata",
  initialState,
  reducers: {
    updateMetadata(state, action: PayloadAction<MetadataState>) {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CLEAR_STORAGE, () => initialState)
  },
})

export const { updateMetadata } = metadataSlice.actions
export default metadataSlice.reducer
