import { combineReducers } from 'redux';
import user from './user';
import estates from './estates';
import estateInfo from './InfoEstate'
import news from './news'
import newsDetail from './newsdetail'

const appReducers = combineReducers({
    user,
    estates,
    estateInfo,
    news,
    newsDetail
});

export default appReducers;