import { useContext } from 'react';
import { CartContext } from './CartContext';

// add all the prices of items in the shopping cart, add taxes, and spit out total/subtotal
const Checkout = ()=> {
  const { cartItems } = useContext(CartContext);
  let price = 0 
  cartItems.map((item) => (
    price += parseFloat(item.price)
  ))
  const taxRate = .15
  var taxes = price * taxRate
  var total = taxes + price
 
  // display everyting
  return (
    <div>
       <div className='checkout'>
         <form>
           <label for='email'>Email:</label><br/>
           <input type="email"/><br/>
           <label for='fname'>Name:</label><br/>
           <input type="text"/><br/>
           <label for='address'>Address</label><br/>
           <input type="text"/><br/>
           <label for='card'>Card Number:</label><br/>
           <input type="text"/><br/>
           <hr/>
           <button>Purchase</button>
         </form>
       </div>

       <h3>Subtotal:</h3>
       <p>${price.toFixed(2)}</p>
       <h3>Taxes:</h3>
       <p>${taxes.toFixed(2)}</p>
       <h3>Total:</h3>
       <p>${total.toFixed(2)}</p>
    </div>
    
  )
}

export default Checkout
