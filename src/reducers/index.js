import { combineReducers } from 'redux'
import { authorizedUser } from './authorized-user.reducer';
import { users } from './users.reducer';

const app = combineReducers({
  authorizedUser,
  users,
});

export default app;
