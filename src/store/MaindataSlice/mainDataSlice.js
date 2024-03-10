import { createSlice } from '@reduxjs/toolkit'
import { mockJson } from '../../helpers/constant'

const initialState = {
  mainData: mockJson,
  converisonClickList: mockJson[0],
  sort: 1
}

export const mainDataSlice = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
    setConversionClickList: (state,actions) => {
      state.converisonClickList = actions.payload
    },
    setSortValue: (state,actions) => {
      state.sort = actions.payload
    },
  },
})

export const { setConversionClickList,setSortValue } = mainDataSlice.actions

export default mainDataSlice.reducer