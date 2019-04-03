import { combineReducers } from 'redux';
import user from './user';
import estates from './estates';
import news from './news'
import newsDetail from './newsdetail'
import estateInfo from './InfoEstate';
import location from './Map/location'

const appReducers = combineReducers({
    user,
    estates,
    estateInfo,
    news,
    newsDetail,
    location
});

export default appReducers;