export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';

export const signin = () => dispatch => {
  dispatch({ type: SIGNIN, payload: '' });
};

export const signup = () => dispatch => {
  dispatch({ type: SIGNUP, payload: '' });
};
