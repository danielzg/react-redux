export interface IProduct {
    id: number,
    title: string,
    price: number
}

export interface ICardItem {
    product: IProduct,
    quantity: number
}

export interface ICartState {
    itens: ICardItem[],
    failedStockCheck: number[]
}

export enum ActionTypes {
    addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
    addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}