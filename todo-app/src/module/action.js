const types = {
    CREATE : "CREATE_ITEM",
    DELETE : "DELETE_ITEM"
}

// Actions

const createAction = (item) =>{
    return {
        type: types.CREATE,
        payload : item
    }
}

const loadAction = (item) =>{
    return {
        type: types.CREATE,
        payload : item
    }
}


const deleteAction = (id) =>{
    return {
        type: types.DELETE,
        payload : id
    }
}

export default {
    types,
    createAction,
    deleteAction,
    loadAction
}