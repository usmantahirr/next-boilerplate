import { useSelector } from "react-redux"

import { RootState } from "@store/rootReducer"

const selectMetadata = () =>
  useSelector((state: RootState) => state.metadata.data)

export default selectMetadata
