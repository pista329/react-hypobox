/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ADD_PERIOD,
  REMOVE_PERIOD,
  PERIOD_FORM_CHANGED,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function addPeriod(data) {
  return {
    type: ADD_PERIOD,
    payload: {
      data,
    },
  };
}

export function removePeriod(id) {
  return {
    type: REMOVE_PERIOD,
    payload: {
      id,
    },
  };
}

export function periodFormChanged(id, data) {
  return {
    type: PERIOD_FORM_CHANGED,
    payload: {
      id,
      data,
    },
  };
}
