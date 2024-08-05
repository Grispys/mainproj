
function Checkout() {
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
       <p>$0.00</p>
    </div>
    
  )
}

export default Checkout
