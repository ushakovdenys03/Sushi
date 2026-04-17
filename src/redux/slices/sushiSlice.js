import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchSushi = createAsyncThunk(
    'sushi/fetchSushisStatus',
    async (params) => {
        const {category,
          sortType,
          search,
          currentPage,} = params;
        const { data } = await axios.get(
        `https://69cc09f70b417a19e07bbb23.mockapi.io/items?page=${currentPage}&limit=5&${category}&sortBy=${sortType}&order=asc&${search}`,
      );
        return data;
    }
);

const initialState = {
  items: [],
  status: 'loading',
}

const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchSushi.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  }
});

export default sushiSlice.reducer