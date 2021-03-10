import React, {useState, useEffect} from 'react';
import './ShoppingCart.css'
// import {shoppingCart} from './storeFrontDesk';
function ShopingCart(props) {

    // const showItems =()=>{


    //     // props.ShopingCart
    //     // let itemsToBuy = shoppingCart
    //     return itemsToBuy.map(eachE => {
    //         return(
    //             <div className='ShopingCart'>
    //                 <div className='Shopped-item-img'>
    //                     {eachE.image_url}
    //                 </div>
    //                 <div>   {eachE.item}  </div>
    //                 <div>   {eachE.price} </div>                 
    //                 <div>   {eachE.qty} </div>
    //                 <div>   Total:{eachE.price*eachE.qty}</div>
    //             </div>
    //         )
    //     })
    // }

    return (
        <div style={{display:'flex'}}>
            <div className='shoppingcart' style={{border:"2px solid grey", width:'55vw', backgroundColor:'forestgreen'}}>
                
                <div>Shopping cart </div>

                <div style={{display:'flex', justifyContent:'space-evenly',alignItems:'center',  width:'53vw',height:'7vh', margin:'1vw', backgroundColor:'white'}}>
                <div style={{width:'6vh', height:'6vh', backgroundColor:'lightskyblue', margin:"0.5vh 2vw"}}></div>
                <div><h5>Name</h5></div>
                <div><h5>Price</h5></div>
                <div><h5>Qty</h5></div>
                <div><h5>total</h5></div>
                <div><button>remove</button></div>

                {/* {showItems()} */}
                </div>
            
            </div>
            <div style={{backgroundColor:'white',marginLeft:'1vw', width:'23vw', height:'60vh', border:'2px solid gainsboro'}}>
                    <div style={{ width:'23vw'}}>
                        <h5 style={{float:'right', marginRight:'1vw'}}>Grand Total: $1000</h5>                  
                    </div>
                    <button style={{position:'absolute', bottom:'180px'}}>Proceed to check out</button>
            </div>

        </div>
    );
}

export default ShopingCart;