import { combineReducers } from 'redux';
import users from './users';
import estates from './estates';
import estateInfo from './InfoEstate'


const appReducers = combineReducers({
    users,
    estates,
    estateInfo,
});

export default appReducers;