const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
   counter : 0 
}
// Create Reduxer
const reducer = (state = initialState , action)=> {
    let existingState = state;
    if(action.type === "ADD"){
        existingState.counter = existingState.counter + action.value;
    }
    if(action.type === "SUB"){
        existingState.counter = existingState.counter - action.value;
    }
        
     return existingState
}

// Create Store
const store = createStore(reducer) // Its Need Reducer

//console.log(store);
store.dispatch({ type : 'ADD', value : 10 })

store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch
store.dispatch({ type : 'ADD', value : 10 })
store.dispatch({ type : 'SUB', value : 15 })
store.dispatch({ type : 'ADD', value : 10 })

//Subscribe
;
