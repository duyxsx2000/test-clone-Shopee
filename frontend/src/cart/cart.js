import React, { useContext, useState } from "react"; 
import { AppContext } from "../contex/AppContext";
import '../style/cart.css'

import DataCart from "./cartContent";
import Login from "../loginS/login";
import { Link } from "react-router-dom";
import Bill from "./bill";


function Cart(){
  const {cartData,setCartData,dataContext,setDataContex,tongTien,setTongTien,dataLogIn} = useContext(AppContext)
  
  // const amountCartSl = amountCart.map()
  // const DataCart = dataContext.map(function(x){
  //     const [amountCart,setAmountCart] = useState(1)
   
    
  //   return(
  //       <div className="contentCart">
  //              <div>ten: {x.name} , gia: {x.gia}VND, sl: {x.soluong}</div>
  //              <div> <button onClick=''>+</button><button>-</button> </div>
  //           </div>
  //   ) 
  // })
  // console.log(DataCart);
  
  // function increase(gia,_id, name){
  //   console.log(_id, name);
  //   setTongTien(tongTien+gia)
  //   if (amountCart.hasOwnProperty(name)) {
  //       const obj = {...amountCart}
  //       obj[name] = { amount: obj[name].amount + 1 }
  //       setAmountCart(obj)
  //   } else {
  //       const obj = {...amountCart};
  //       obj[name] = {amount: 2 };
  //       setAmountCart(obj)
  //   }

  //   console.log(amountCart);


    
  

   
    
  // }
  
  

 
    return(
        <div className="body">
            <button onClick={()=>setCartData(false)}>x</button>
            <DataCart></DataCart>
            <div>
                <div>Tổng tiền: {tongTien}</div>
                <div  className="thanhtoan">
                <Link to='bill' className="thanhtoan1">PAY</Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;





