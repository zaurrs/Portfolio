import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  portfolio: [],
};

const baseURL = "http://localhost:5000/api/portfolio";

export const getPortfolio = createAsyncThunk("getPortfolio", async () => {
  const { data } = await axios.get(baseURL);
  return data;
});

export const addPortfolio = createAsyncThunk("addPortfolio", async (values) => {
  const { data } = await axios.post(baseURL, values);
  return data;
});

export const deletePortfolio = createAsyncThunk(
  "deletePortfolio",
  async (id) => {
    const { data } = await axios.delete(`${baseURL}/${id}`);
    return id;
  }
);

export const updatePortfolio = createAsyncThunk(
  "updatePortfolio",
  async ({id, item}) => {
    const { data } = await axios.put(`${baseURL}/${id}`, item);
    window.location.reload()
    return data;
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPortfolio.fulfilled, (state, action) => {
      state.portfolio = action.payload;
    });
    builder.addCase(addPortfolio.fulfilled, (state, action) => {
       state.portfolio.push(action.payload)
    });
    builder.addCase(deletePortfolio.fulfilled, (state, action) => {
      state.portfolio = state.portfolio.filter(
        (item) => item._id !== action.payload
      );
    });
    builder.addCase(updatePortfolio.fulfilled, (state, action) => {
      state.portfolio = state.portfolio.map((portfolioItem) =>
        portfolioItem._id === action.payload._id
       
      );
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = portfolioSlice.actions;

export default portfolioSlice.reducer;
