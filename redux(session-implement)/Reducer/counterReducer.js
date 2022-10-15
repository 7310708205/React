let val=prompt(parseInt("enter number"));
//let val1 = 12
const counterReducer=(state=parseInt(val), action)=>{
    switch(action.type) {
        case "INCREMENT":
            return state + parseInt(val);
            // return state + val1;
        case "DECREMENT":
            return state-val;
            //return state - val1;
        default:
            return state;
    }
}

export default counterReducer;