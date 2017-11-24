import { handleSessionExpiry } from './sessionManagement';
import { handleSessionWarning } from './sessionManagement';

export default function* rootSaga(dispatch) {
  yield [
    handleSessionWarning(),
    handleSessionExpiry()
  ];
};
