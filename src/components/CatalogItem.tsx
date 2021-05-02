import React, { useCallback } from 'react'
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';

interface ICatalogItemProps {
    product: IProduct
}


const CatalogItem: React.FC<ICatalogItemProps> = ({product}) => {

    const dispatch = useDispatch()
    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id)
    })
    
    const handleAddProductToCArt = useCallback( () => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product]);
    
    return (
        <article >
                <strong>{product.title}</strong>{' - '}
                <span>{product.price}</span>{" "}
            <button 
            onClick={handleAddProductToCArt}
            type="button">
                Comprar
            </button>
            {hasFailedStockCheck && <span style={{color: 'red'}}>Em falta no Estoque</span>}
        </article>
    )
}

export default CatalogItem;