import { createStore } from 'redux'
import rootReducers from './modules/rootReducers';
import {ICartState} from './modules/cart/types'

export interface IState {
    cart: ICartState;
}

const store = createStore(rootReducers);

export default store;