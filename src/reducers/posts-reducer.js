import { FETCH_POSTS, FETCH_POST } from '../actions/index'
import _ from 'lodash';
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      /*
      const post = action.payload.data;
      const newState = {...state, };
      newState[post.id] = id;
      return newState;
      */
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}
