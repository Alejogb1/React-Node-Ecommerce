import React, {useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {detailsProduct} from "../actions/productActions"

export default function ProductScreen(props) {
    const [qty, setQty] = useState(1)
    const productDetails = useSelector( state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            
        }
    }, [])


    return <div className="cont-product">
        <div className="backto-results">
            <Link to="/"> Back to results</Link>
        </div>
        {loading ? <div>Loading...</div>: 
        error? <div>{error}</div>: (
            <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: ${product.price}
                    </li> 
                    <li>
                        Status: {product.countInStock > 0? "In Stock": ""}
                    </li>
                    <li>    
                        Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x => 
                                <option value={x+1}>{x+1}</option>
                            )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock>0 && <button className="button primary">Add to cart</button>
      
                        }                   
                    </li>
                </ul>
            </div>
        </div>
        ) }
       
    </div>
}
