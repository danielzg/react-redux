import { Reducer } from "redux";
import { ActionTypes, ICartState } from "./types";
import produce from 'immer';

const INITIAL_STATE: ICartState = {
    itens: [],
    failedStockCheck: []
}

const cart:Reducer<ICartState> = (state = INITIAL_STATE, action) => {

    return produce(state, draft => {
        switch(action.type){

            case ActionTypes.addProductToCartSuccess:  {

                const { product } = action.payload;

                const productInCartIndex = draft.itens.findIndex(item => 
                        item.product.id === product.id
                    );

                    if(productInCartIndex >= 0){
                        draft.itens[productInCartIndex].quantity++;
                    }else{   
                        draft.itens.push({
                            product,
                            quantity: 1
                        })
                    }
                break;
            }
            case ActionTypes.addProductToCartFailure: {
                draft.failedStockCheck.push(action.payload.productID)
                break;
            }
            default :{
                return state
            }
                
        }        
    });
}

export default cart;