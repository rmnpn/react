import {combineReducers, createStore} from "redux";
import {episodesReducer} from "./reducers";
import {charactersReducer} from "./reducers/charactersReducer";


const rootReducer = combineReducers({
    // eslint-disable-next-line no-undef
    episodes: episodesReducer,
    characters: charactersReducer
});

const store = createStore(rootReducer)


export {
    store
}