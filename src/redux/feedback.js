import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { feedback:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
          var feedback2 = action.payload;
          return { ...state, feedback: state.feedback.concat(feedback2)};
  

        default:
          return state;
      }
};