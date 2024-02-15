const initialState = {
    firstName: '',
    lastName: '',
    skills: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;