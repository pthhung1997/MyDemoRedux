const defaultUser = {
    isLogged: false,
    access_token: '',
    username: ''
};
const userDetailReducer = (state = defaultUser, action) => {
    if (action.type === 'TOGGLE_IS_LOGIN') return state.map(e => {
        return {...e, isLogged: !e.isLogged};
    });
    return state;
}
export default userDetailReducer;