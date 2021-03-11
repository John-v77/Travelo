import React, {useState, useEffect, useContext} from 'react';
import {CartContext} from './CartContext';
import './ShoppingCart.css'
// import {shoppingCart} from './storeFrontDesk';   
function ShopingCart(props) {


    const showItems =()=>{


        // props.ShopingCart
        let itemsToBuy = props.shoppingCart
        return itemsToBuy.map(eachE => {
            return(
                <div className='ShopingCart'>
                    <div className='Shopped-item-img'>
                        {eachE.image_url}
                    </div>
                    <div>   {eachE.item}  </div>
                    <div>   {eachE.price} </div>                 
                    <div>   {eachE.qty} </div>
                    <div>   Total:{eachE.price*eachE.qty}</div>
                </div>
            )
        })
    }

    return (showItems())
       

}

export default ShopingCart;