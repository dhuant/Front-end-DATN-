import { combineReducers } from 'redux';
import user from './user';
import estates from './estates';
import news from './news'
import newsDetail from './newsdetail'
import estateInfo from './InfoEstate';
import location from './Map/location'
import address from './address'
import comments from './comments'
import estatesListOfUser from './estatesListOfUser'
import follow from './follow'

const appReducers = combineReducers({
    user,
    estates,
    estateInfo,
    news,
    newsDetail,
    location,
    address,
    comments,
    estatesListOfUser,
    follow
});

export default appReducers;