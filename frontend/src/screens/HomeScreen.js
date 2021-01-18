import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import {listProducts} from "../actions/productActions"

export default function HomeScreen(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList
    const dispatch = useDispatch();
    useEffect(() => { 
      dispatch(listProducts());
  
      return () => {
        
      }
    }, [])

    return  loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <div>                 
      <h3 style={{textAlign: "center"}}>Our specialities</h3>
      <ul className="products">
          {
            products.map(product => 
              <li key={product._id}>
              <div className="product">
              <Link to={"/product/" + product._id}>
                  <img className="product-image" src={product.image} alt="product-image"></img>
              </Link>
                <div className="product-name">
                  <Link to={"/product/" + product._id}>{product.name}</Link>
                </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews {product.stars})</div>
              </div>
            </li>
            )
          }
        
      </ul>
      <ul className="products">
          {
            products.map(product => 
              <li key={product._id}>
                        <div className="flex p-6 font-mono">
                          <div class="flex-none w-40 relative">
                            <img src={product.image} />
                          </div>
                          <form className="flex-auto pl-6">
                            <div className="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white">
                              <h1 className="w-full flex-none text-2xl leading-7 mb-2 font-bold">
                              {product.name}
                              </h1>
                              <div class="text-2xl leading-7 font-bold">
                                ${product.price}
                              </div>
                            </div>  
                            <div class="text-sm font-medium ml-3">
                              In stock
                            </div>
                  
                            <div className="flex items-baseline py-8">
                              <div class="space-x-3.5 flex text-center text-sm leading-none font-bold text-gray-500">
                                <label>
                                  <input className="w-6 text-black shadow-underline" name="size" type="radio" value="XS" checked></input>
                                  1kg
                                </label>
                                <label>
                                  <input className="w-6 text-black shadow-underline" name="size" type="radio" value="S" checked></input>
                                  500g
                                </label>
                                <label>
                                  <input className="w-6 text-black shadow-underline" name="size" type="radio" value="M" checked></input>
                                  250g
                                </label>
                              </div>    
                            </div>
                              <div class="flex space-x-3 text-sm font-bold uppercase mb-4">
                                <div class="flex-auto flex space-x-3">
                                  <button class="w-1/2 flex items-center justify-center bg-lime-300 text-black border border-black shadow-offset-black" type="submit">Buy now</button>
                                  <button class="w-1/2 flex items-center justify-center border border-black shadow-offset-black" type="button">Add to bag</button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-9 h-9 border border-black" type="button" aria-label="like">
                                  <svg width="20" height="20" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                  </svg>
                              </button>
                            </div>
                    
                          </form>
                      </div>
            </li>
            )
          }
        
      </ul>
    </div>
    
}
