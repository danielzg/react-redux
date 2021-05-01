import React, { useCallback } from 'react'
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';

interface ICatalogItemProps {
    product: IProduct
}


const CatalogItem: React.FC<ICatalogItemProps> = ({product}) => {

    const dispatch = useDispatch()
    
    const handleAddProductToCArt = useCallback( () => {
        dispatch(addProductToCart(product))
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
        </article>
    )
}

export default CatalogItem;