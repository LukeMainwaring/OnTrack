import { AsyncStorage } from 'react-native';
import ontrackApi from '../api/ontrack';
import { navigate } from '../navigationRef';

export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

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

export const signup = ({
  firstName,
  lastName,
  email,
  password
}) => async dispatch => {
  try {
    const response = await ontrackApi.post('/signup', {
      firstName,
      lastName,
      email,
      password
    });
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

export const signout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGNOUT });
  navigate('loginFlow');
};

export const tryLocalSignin = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGNIN, payload: token });
    navigate('Home');
  } else {
    navigate('Signin');
  }
};

export const clearErrorMessage = () => dispatch => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};
