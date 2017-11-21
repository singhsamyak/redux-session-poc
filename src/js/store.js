// import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import rootSaga from './sagas';
import {
  authenticateUser,
  routeUser,
  validateForm
} from './middlewares';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(
    authenticateUser,
    routeUser,
    validateForm/*,
    sagaMiddleware*/
  )
);
// sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
