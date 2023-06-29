import {createSlice} from  "@reduxjs/toolkit";

let loginReducer=createSlice(
    {
       name:'loginReducer',
       initialState:{userInfo:{}},
       reducers:{
        getUserInfo(previoustate,data){
                previoustate.userInfo=data
            },
       
       }
    }
)

export let {getUserInfo}=loginReducer.actions

export default loginReducer