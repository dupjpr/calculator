import {
  LOADING,
  GET_PROFILE,
  ERROR,
  INPUT_FILTER
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case INPUT_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload }
      }
    default:
      return state
  }
}

export default rootReducer;
