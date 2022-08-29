import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






const STATUS = Object.freeze({
    IDLE: "idle",

    LOADING: "loading",
    ERROR: "error",
})



const productSlice = createSlice({
    name: "product",


    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUS.LOADING
            }
            )
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            }
            )
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUS.ERROR
            }
            )

    }


})

export default productSlice.reducer;

export const fetchProduct = createAsyncThunk("fetch/product",
    async () => {

        const res = await axios.get("http://localhost:5000/products/getProduct")
          const data = res.data;
          return data




    }
)

