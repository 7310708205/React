const signInReducer=(state="signin",action)=>{
    switch(action.type){
        case 'SIGNIN':
            return state = "signed";
        default:
            return state;
    }
}
export default signInReducer;