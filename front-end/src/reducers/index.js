import { combineReducers } from 'redux';
import user from './user';
import estates from './estates';
import estateInfo from './InfoEstate'


const appReducers = combineReducers({
    user,
    estates,
    estateInfo,
});

export default appReducers;