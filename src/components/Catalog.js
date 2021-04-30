import React from 'react'
import { useSelector } from 'react-redux'

const Catalog: React.FC = () => {

    const catalogo = useSelector(state => state);

    console.log(catalogo)
    return (
        <h1>Catalog</h1>
        )
}

export default Catalog