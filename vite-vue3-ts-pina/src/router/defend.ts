import router from "./index";

router.beforeEach((to, from, next) => {
    if(to.name === "login"){
        next()
    } else {
        if(sessionStorage.getItem('token')){
            next()
        } else {
            next({name: "login"})
        }
    }
})