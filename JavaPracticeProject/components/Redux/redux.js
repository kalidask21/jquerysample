import { createStore} from "redux";

const reducer = (state,action) =>{
    if(action.type == 'ADD'){
        state = state + action.payload;
    }
    else if(action.type == 'SUB'){
        state = state + action.payload;
    }else{
        state = state + 0;
    }

    return state;
}

const store = createStore(combineReducers,1)

store.subscribe(() =>{
    console.log('Store is '+ this.getstore());
})


store.dispatch({
    type : 'ADD',
    payload : 1
})

store.dispatch({
    type : 'ADD',
    payload : 10
})
store.dispatch({
    type : 'ADD',
    payload : 10
})