import { configureStore} from "@reduxjs/toolkit";
import navListReducer from './reducers/navListReducer'
import loginReducer from  './reducers/loginReducer'

//配置好的reducer会有以下这些属性
/**
 * actions: {add: ƒ}
caseReducers: {add: ƒ}
getInitialState: ƒ ()
name: "numReducer"
reducer: ƒ (state, action)
 */
//创建仓库，引入reducer配置
let store=configureStore({
    reducer:{
        navListReducer:navListReducer.reducer,
        loginReducer:loginReducer.reducer
    }
})

export default store