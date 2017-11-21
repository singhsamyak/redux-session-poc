// import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import rootSaga from './sagas';
import { validateForm } from './middlewares';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(validateForm/*, sagaMiddleware*/)
);
// sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
