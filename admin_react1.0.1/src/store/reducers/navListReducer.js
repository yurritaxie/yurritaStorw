import {createSlice} from  "@reduxjs/toolkit";

let navListReducer=createSlice(
    {
       name:'navListReducer',
       initialState:{navList:[],token:sessionStorage.getItem('token') || false},
       reducers:{
            changeNavList(previoustate,data){
                previoustate.navList=data
            },
            getUserToken(previoustate,data){
                previoustate.token=data.payload
            }
       }
    }
)
export let {changeNavList,getUserToken}=navListReducer.actions

export default navListReducer
