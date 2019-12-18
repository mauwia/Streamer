let INITIAL_STATE={
    isSignedIn:null,
    userID:null
}
export default  (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGNIN':
            return{...state,isSignedIn:true,userID:action.payload}
        case 'SIGNOUT':
            return{...state,isSignedIn:false,userID:null}
        default:
            return state
    }
}