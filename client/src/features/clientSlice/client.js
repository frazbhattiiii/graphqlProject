import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open:false,
    added:false,
    error:false,
    loading:false,
}

const clientSlice = createSlice ( {
                                    name : 'Add/Client' ,
                                    initialState ,
                                    reducers : {
                                        openDialogue : ( state , action ) => {
                                            state.open = true
                                        } ,
                                        closeDialogue : ( state , action ) => {
                                            state.open = false
                                        },
                                    } ,
                                    extraReducers : {
                                        // [ getAllItems.pending ] : ( state ) => {
                                        //     state.loading = true
                                        //     state.error = null
                                        //
                                        // } ,
                                        // [ getAllItems.fulfilled ] : ( state , { payload } ) => {
                                        //     state.loading = false
                                        //     state.change = true
                                        //     state.menuItems = payload
                                        //     state.totalItems = payload.items.length
                                        //
                                        // } ,
                                        // [ getAllItems.rejected ] : ( state , { payload } ) => {
                                        //     state.loading = false
                                        //     state.error = payload
                                        //
                                        // } ,
                                    } ,
                                } )
export const { openDialogue,closeDialogue} = clientSlice.actions;
export default clientSlice.reducer;