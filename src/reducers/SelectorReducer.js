const INITIAL_STATE = {
    select_starship: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'select_starship':
            return action.payload;
        default:
            return state;
    }
};