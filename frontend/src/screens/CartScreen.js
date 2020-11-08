import React, {useSelector, useDispatch, useEffect} from "react"
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen(props) {
    const cart = useSelector(state => state.cart)

    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch(dispatch);
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }
    useEffect(() => {
    if(productId) {
        dispatch(addToCart(productId, qty))
    }
    }, []);

    const checkoutHandler = () =>  {
        props.history.push("/checkout?redirect=shipping")
    }

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ? 
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map( item => 
                    <div>
                        <img src={item.image} alt="product-image"></img>
                    <div >
                            <div>
                                {item.name}
                            </div>
                            Qty:
                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div>
                            {item.price}
                        </div>
                    </div>
                    
                    )
                }
            </ul>

        </div>
        <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                </h3>
                <button onClick={checkoutHandler} className="butt   on primary" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
                <button className="button primary" style= {"background-color: green"} disabled={cartItems.length === 0}>
                    Proceed to Checkout via WhatsApp
                </button>
        </div>
    </div>
}

export default CartScreen;












































