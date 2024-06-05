// third-party
import { combineReducers } from 'redux';

// project import
import menuSlice from './reducers/menu/menu.slice';
import authSlice from './reducers/auth/auth.slice';
import userSlice from './reducers/user/user.slice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    user:userSlice,
    auth:authSlice,
    menu:menuSlice,
 });

export default reducers;
