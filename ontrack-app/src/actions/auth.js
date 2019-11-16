import { AsyncStorage } from 'react-native';
import ontrackApi from '../api/ontrack';
import { navigate } from '../navigationRef';

export const SIGNIN = 'SIGNIN';
export const ADD_ERROR = 'ADD_ERROR';

export const signin = ({ email, password }) => async dispatch => {
  try {
    const response = await ontrackApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: SIGNIN, payload: response.data.token });
    navigate('Home');
  } catch (err) {
    const errorMessage = err.response.data.error;
    dispatch({
      type: ADD_ERROR,
      payload: errorMessage || 'Something went wrong with sign in'
    });
  }
};

export const signup = ({ email, password }) => async dispatch => {
  try {
    const response = await ontrackApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: SIGNIN, payload: response.data.token });
    navigate('Home');
  } catch (err) {
    const errorMessage = err.response.data.error;
    dispatch({
      type: ADD_ERROR,
      payload: errorMessage || 'Something went wrong with sign up'
    });
  }
};
