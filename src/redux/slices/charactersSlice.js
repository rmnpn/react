import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    characters:null,
    info: {},
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'charactersSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await charactersService.getAll()
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>  {
        builder
            .addCase(all.fulfilled, (state, action) => {
                state.characters = action.payload.results;
                state.info = action.payload.info;
            })
    }
})

const {reducer: characterReducer, actions} = charactersSlice;
const characterActions = {
    all
};

export {
    characterReducer,
    characterActions
}