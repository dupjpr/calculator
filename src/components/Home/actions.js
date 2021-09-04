import {
  LOADING,
  GET_PROFILE,
  ERROR,
  INPUT_FILTER
} from '../../utilities/constants';
import { _http } from "../../utilities/httpRequest";

const randomNum = Math.floor(Math.random() * 30);

const demoUrl = `https://rickandmortyapi.com/api/character/?page=${randomNum}`;

const actions = {
  loading: (boolean = false) => ({
    type: LOADING,
    payload: boolean
  }),
  getData: (data) => ({
    type: GET_PROFILE,
    payload: data
  }),
  error: (data) => ({
    type: ERROR,
    payload: data
  }),
  input: (data) => ({
    type: INPUT_FILTER,
    payload: data
  })
}

const { loading, getData, error, input } = actions;

const homeActions = (inputInfo) => {
  return dispatch => {
    dispatch(input(inputInfo));
    dispatch(loading(true));
    _http.GET(demoUrl)
      .then((res) => {
        dispatch(getData(res.results))
        dispatch(loading(false));
      })
      .catch((e) => dispatch(error(e)));
  }
}

export { homeActions };
