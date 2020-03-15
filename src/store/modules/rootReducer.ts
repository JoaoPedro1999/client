import { combineReducers } from 'redux';

import auth from './auth/reducer';
import solicitation from './solicitations/reducer';

export default combineReducers({ auth, solicitation });
