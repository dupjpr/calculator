import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  filter: {
    selectOne: 'All Species',
    selectTwo: 'All Genders'
  },
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
