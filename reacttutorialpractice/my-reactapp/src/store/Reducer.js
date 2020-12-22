import words from '../model/WordDO'


const initialstate = {
    words : [
        new words({ word : 'Annoying Word', example : 'example'}) 
    ]
}
const reducer = (state = initialstate,action) =>{

    
    if(action.type === 'ADD_WORD'){
        console.log(action.type);
        const addWords = {
            words  :  [...state.words,...action.value]
        }
        console.log(addWords);
        return addWords;
    }
    return state;
}

export default reducer;