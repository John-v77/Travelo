import React, {useEffect, useState} from 'react';
import actions from '../api'
import './ItemDetails.css';

function ItemDetails(props) {
    console.log(props.match.params.id)
    const [item, setItem] = useState({})

    


    useEffect(() => {
        actions.searchItemById(props.match.params.id).then(res => {
            setItem(res.data)  
            console.log(item)  
        }).catch(console.error)
    }, [])


    // console.log('Prams ***********', props.match.params)
    return (
        <div className="Single-item-details">

            <div style={{width:"28vw", height:'55vh', backgroundColor:'green'}}></div> 
            <div><h1>Iphone</h1></div> 
            <div><h2>$300</h2></div> 
            <div style={{width:"28vw"}}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ratione eius quam mollitia eveniet perferendis eos voluptatem? Esse nisi quo repellendus minus suscipit sunt officiis debitis, nulla accusamus architecto et.</p></div> 
            <div><button>buy</button></div>
        </div>
    );
}

export default ItemDetails;