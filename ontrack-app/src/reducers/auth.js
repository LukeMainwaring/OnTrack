import { SIGNIN, ADD_ERROR } from '../actions/auth';

const initialState = { token: null, errorMessage: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    // Both sign in and sign up perform the same function
    case SIGNIN:
      return { errorMessage: '', token: action.payload };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
