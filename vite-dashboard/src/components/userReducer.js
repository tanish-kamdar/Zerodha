const initialState={
    user : null,
    accessToken : null,
    isAuthenticated : false
}

function userReducer(state,action){
    switch(action.type){
        case 'LOGIN': return {
            ...state,
            user: action.payload.user,
            accessToken : action.payload.accessToken,
            isAuthenticated : true
        };
        case 'LOGOUT' : return {
            ...state,
            user: null,
            accessToken : null,
            isAuthenticated : false
        };
        default : state;
    }
}

export {
    initialState,
    userReducer
}