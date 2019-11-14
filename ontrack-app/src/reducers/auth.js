import { SIGNIN, SIGNUP } from '../actions/auth';

const initialState = { token: null, errorMessage: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      console.log('signing in');
      return state;
    case SIGNUP:
      console.log('signing up');
      return state;
    default:
      return state;
  }
};
