const initialState = {
    historyList: [],
    count : 0
}

// get hold of a value to display in jsx history compoennt
// and a way to call reducer function with the appropriate action



export default function historyReducer(state=initialState, action) { // state here is the current state. if current state is provided it will overwrite the initialState
    // return newstate
    const {type,payload} = action;

    switch(type) {
        case 'ADD_HISTORY':
            const count = state.count + 1;
            console.log('before adding',state.historyList); // not added yet
            const history = [...state.historyList,payload];
            console.log("after adding", history); // added to array
            localStorage.setItem('request', JSON.stringify([...state.historyList,payload]))
            return {historyList: history, count:count};

    
        case 'REMOVE_HISTORY':
            const decCount = state.count - 1;
            const listWithoutDeletedHistory = state.historyList.filter((req)=> req !== payload);
            return {count:decCount, historyList: listWithoutDeletedHistory};
        default:
            return state;
    }    

}

export const addAction = (req) =>{
    console.log("inside the addAction, name>>  ",req);
    return {
        type: 'ADD_HISTORY',
        payload: req
    }
}

export const removeAction = (req) =>{
    console.log("inside the removeAction, name>>  ",req);
    return {
        type: 'REMOVE_HISTOR',
        payload: req
    }
}

// export default {addAction,removeAction,peopelReducer}