import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecordState, Record } from './list-record.types'

const initialState: RecordState = {
  'records': [],
  'filterRecord': [],
}

const recordSlice = createSlice({
  'name': 'record',
  initialState,
  'reducers': {
    'addRecord': (state, action: PayloadAction<Record>) => {
      state.records.push(action.payload)
    },
    'updateRecord': (
      state,
      action:
      PayloadAction<{ id: string, status: string }>,
    ) => {
      const { id, status } = action.payload
      const taskToUpdate =
          state.records.find((record) => record.id === id)
      if (taskToUpdate) {
        taskToUpdate.status = status
      }
    },
    'filterRecord': (
      state,
      action: PayloadAction<{ status: string }>,
    ) => {
      const { status } = action.payload
      state.filterRecord = status ===
      'All' ? state.records : state.records.filter((record) => {
          return record.status === status
        })
    },
  },
})

export const {
  addRecord,
  updateRecord,
  filterRecord,
} = recordSlice.actions
export default recordSlice.reducer
