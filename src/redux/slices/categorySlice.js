import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import service from "../../api/service"

export const fetchGetCategories = createAsyncThunk("category/fetchGetCategories",
    async () =>{
        const {data} = await service.getAllCategories()
        console.log(data,'---category---');
        return data
    }
)


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        isError:"",
        isLoading:false
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchGetCategories.pending, (state) =>{ 
            state.isLoading = true
            })
            builder.addCase(fetchGetCategories.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.categories = action.payload
             })
            builder.addCase(fetchGetCategories.rejected, (state, action)=>{ 
                state.isLoading = false
                state.isError = action.payload
            })
    }
})

export const categoryReducer = categorySlice.reducer