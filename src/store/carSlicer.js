import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'booking',
    initialState:{
        booking: null,
    },
    reducers:{
        addCarToCart: (state, action) => {
            state.carCart = action.payload.id
        }
        
    },
    
})

export default carSlice