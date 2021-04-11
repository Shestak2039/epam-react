import { combineReducers } from 'redux';

import filmsReducer from './films-reducer';

export default combineReducers({
    filmsState: filmsReducer
});
