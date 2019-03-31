import { combineReducers } from 'redux';
import user from './user';
import estates from './estates';
import estateInfo from './InfoEstate';
import location from './Map/location'


const appReducers = combineReducers({
    user,
    estates,
    estateInfo,
    location
});

export default appReducers;