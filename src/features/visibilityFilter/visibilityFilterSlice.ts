import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

const initialState = VisibilityFilter.SHOW_ALL;

const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
