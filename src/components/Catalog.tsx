import React, { useCallback, useEffect, useState } from 'react';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

const Catalog: React.FC = () => {

    const dispatch = useDispatch()
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    const handleAddProductToCArt = useCallback( (product: IProduct) => {
        dispatch(addProductToCart(product))
    }, [dispatch]);

    useEffect( () => {
        api.get('products')
                .then(response => {
                    setCatalog(response.data)
                })
    }, []);

    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong>{' - '}
                    <span>{product.price}</span>{" "}
                <button 
                onClick={() => handleAddProductToCArt(product)}
                type="button">
                    Comprar
                </button>
                </article>
            ))}
        </main>
        );
}

export default Catalog