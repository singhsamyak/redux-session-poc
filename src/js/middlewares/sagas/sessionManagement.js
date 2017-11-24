import {
  DISMISS_SESSION_WARNING,
  EXPIRE_SESSION,
  LOGIN_SUCCESS,
  WARN_SESSION
} from '../../actions/types';
import { delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

/**
 * Total session time for POC purposes is 8 seconds.
 * User is warned in 4 seconds.
 * Session expires 4 seconds after user dismisses warning.
 */
export function* handleSessionWarning() {
  yield take(LOGIN_SUCCESS);
  yield call(delay, 4000);
  yield put({ type: WARN_SESSION });
}

export function* handleSessionExpiry() {
  yield take(DISMISS_SESSION_WARNING);
  yield call(delay, 4000);
  yield put({ type: EXPIRE_SESSION });
}
