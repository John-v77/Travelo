import React, {useState, useEffect} from 'react';

function ShopingCart(props) {

    const showItems =()=>{
        let itemsToBuy = props.ShopingCart
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

    return (
        // <div className='shoppingcartcss'>
        //     Shopping cart </div>
        <div>
            {showItems()}
        </div>
    );
}

export default ShopingCart;