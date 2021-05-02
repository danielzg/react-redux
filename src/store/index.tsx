import { applyMiddleware, createStore } from 'redux'
import rootReducers from './modules/rootReducers';
import {ICartState} from './modules/cart/types'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga';

export interface IState {
    cart: ICartState;
}

const sagaMiddleare = createSagaMiddleware();
const middlewares = [sagaMiddleare];

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(...middlewares)
));

sagaMiddleare.run(rootSaga)

export default store;