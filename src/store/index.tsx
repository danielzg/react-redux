import { createStore } from 'redux'
import rootReducers from './modules/rootReducers';
import {ICartState} from './modules/cart/types'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IState {
    cart: ICartState;
}

const store = createStore(rootReducers, composeWithDevTools());

export default store;