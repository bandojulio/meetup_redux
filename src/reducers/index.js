import { combineReducers } from 'redux';
import StarshipReducer from './StarshipReducer';
import SelectorReducer from './SelectorReducer';

export default combineReducers({
    starships: StarshipReducer,
    selectedStarshipName: SelectorReducer
});