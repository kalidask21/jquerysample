import ACTIONS from './action';
import lodash from 'lodash'

const defaultState = {
    items : [{
        id : 1,
        desc : 'Good Morning !!'
    },
    {
        id : 2,
        desc : 'Have a good day !!'
    }
    ]
}

const todoReducer = (state = defaultState,action) =>{
    console.log("Action :"+ action);
     switch (action.type) {
       case ACTIONS.types.CREATE : {
         let item = action.payload;
         let newItem = {
             id : state.items.length + 1,
             desc : item
            }
            let newState = lodash.cloneDeep(state);
            newState.items.push(newItem);
            return newState

         }
         
         default :
            return state;
     }

};

export default todoReducer;