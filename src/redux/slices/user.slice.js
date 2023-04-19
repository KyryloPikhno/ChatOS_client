import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState = {
    users: [],
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const create = createAsyncThunk(
    'userSlice/create',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.create(user);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const update = createAsyncThunk(
    'userSlice/update',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await userService.update(user);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'userSlice/deleteById',
    async ({userId}, {rejectWithValue}) => {
        try {
            await userService.delete(userId);
            return userId;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.error = null;
                state.loading = false;
            })
            .addCase(create.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(create.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(update.fulfilled, (state, action) => {
                const find = state.users.find(user => user._id === action.payload._id);
                Object.assign(find, action.payload);
                state.error = null;
                state.loading = false;
            })
            .addCase(update.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(update.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user._id === action.payload);
                state.users.splice(index, 1);
                state.error = null;
                state.loading = false;
            })
            .addCase(deleteById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
});

const {reducer: userReducer} = userSlice;

const userActions = {
    getAll,
    create,
    update,
    deleteById,
};

export {userReducer, userActions};
