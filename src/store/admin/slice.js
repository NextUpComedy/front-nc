import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './reducers';

const initialState = {
  waitingList: [],
  approvedList: [],
  rejectedList: [],
  bannedList: [],
  dataRange: [
    '2020-01-01',
    '2023-12-31',
  ],
  isLoading: false,
  reports: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setDataRange: (state, action) => {
      state.dataRange = action.payload;
    },
  },
  extraReducers: (builder) => extraReducers(builder),
});

export default adminSlice.reducer;
export const { setDataRange } = adminSlice.actions;
