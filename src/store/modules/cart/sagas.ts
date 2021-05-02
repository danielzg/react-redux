import { AxiosResponse } from 'axios';
import { all, call, select, takeLatest, put } from 'redux-saga/effects'
import { IState } from '../..';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import api from '../../../services/api'
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>
interface IStockResponse {
    id: number,
    quantity: number
}

function* checkProductStock(action: CheckProductStockRequest){
    const { product } = action.payload;

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.itens.find(iten => iten.product.id === product.id)?.quantity ?? 0;
    });

    const availableSstockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

    if(availableSstockResponse.data.quantity > currentQuantity){
        yield put(addProductToCartSuccess(product))
    }else{
        yield put(addProductToCartFailure(product.id))
    }
}

export default all([
    takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);