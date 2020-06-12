const initialState = {
    name: 'visitant',
    counter: 0
}

const UserReducer = (state = initialState, action) => {

    switch(action.type){

        case ("SET_NAME"):
            return {...state, name: action.payload.name};     
        case ("INCREMENT"):
            return {...state, counter: (state.counter + 1)};
        
    }

    return state;


}

export default UserReducer;