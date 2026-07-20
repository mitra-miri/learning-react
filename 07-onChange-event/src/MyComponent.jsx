import React,{useState} from "react";

function MyComponent(){
    const [name,setName] = useState("Guest")
    const [quantity,setQuantity] = useState(0)
    const [comment,setComment] = useState()
    const [payment,setPayment] = useState()
    const [shipping,setshipping] = useState()


    const handleNameChange = (event)=>{setName(event.target.value)}
    const handleQuantityChange = (event)=>{setQuantity(event.target.value)}
    const handleCommentChange = (event)=>{setComment(event.target.value)}
    const handlePaymentChange = (event)=>{setPayment(event.target.value)}
    const handleShippingChange = (event)=>{setshipping(event.target.value)}


    return(<div>
               <p>Name: {name}</p>  
               <input value={name} onChange={handleNameChange}></input> 
               <br></br> 
               <br></br>

               <p>Quantity: {quantity}</p>   
               <input value={quantity} type="number" onChange={handleQuantityChange}></input> 
               <br></br>
               <br></br>

               <p>Comment: {comment}</p> 
               <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
               <br></br>
               <br></br>

               <p>Payment: {payment}</p> 
               <select value={payment} onChange={handlePaymentChange}>
                    <option value="" >Select an option</option>
                    <option value="Visa" >Visa</option>
                    <option value="Mastercard" >Mastercard</option>
                    <option value="Giftcard" >Giftcard</option>
               </select>
               <br></br>
               <br></br>

               <p>Shipping: {shipping}</p> 
               <label>
                        <input type="radio" value="Pick Up" 
                               checked={shipping==="Pick Up"} 
                               onChange={handleShippingChange}>
                        </input>
                        Pick Up
               </label>
               <label>
                        <input type="radio" value="Delivery" 
                               checked={shipping==="Delivery"} 
                               onChange={handleShippingChange}>
                        </input>
                        Delivery
               </label>

           </div>

    );
}
export default MyComponent