import { all, fork, takeLatest } from 'redux-saga/effects';

import { signIn, signOut, init } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  return yield all([
    init(),
    // fork(getPermissions),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}
