import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";
import {carService} from "../../services";

interface IState {
    cars: ICar[],
    updateCar: ICar | null
}

const initialState: IState = {
    cars: [],
    updateCar: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const createCar = createAsyncThunk<ICar, {car: ICar}>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const updateCar = createAsyncThunk<ICar, {car: ICar, id: number}>(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateCar(id, car);
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.updateCar = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign({currentCar}, action.payload)
                state.updateCar = null
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carAction = {
    getAll,
    createCar,
    updateCar,
    setCarForUpdate
}

export {
    carReducer,
    carAction
}
