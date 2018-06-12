import {combineReducers} from 'redux';

import userDetailReducer from './User';

const reducer = combineReducers({
    userDetail: userDetailReducer
});

export default reducer;