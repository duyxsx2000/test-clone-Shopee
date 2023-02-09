import React, { useContext, useState } from "react"
import { AppContext } from "../contex/AppContext"




function DataCart(){
    const {dataContext} = useContext(AppContext)
    console.log(dataContext);
    const {setTongTien,tongTien,amountCart,setAmountCart}= useContext(AppContext)
      
   

    function Xnxxxx(x){
        
        console.log(x);
        const gia = x.gia
        
        function increaseT(gia){ 
            
        setTongTien(tongTien+gia.gia)      
        
        // const name = gia.name

                const obj = {...amountCart};

        obj[gia.name] = {sl:amountCart[gia.name].sl+1};

        setAmountCart(obj)

        }
     
        function increaseG(gia){

            setTongTien(tongTien-gia.gia)
            const obj ={...amountCart};
            obj[gia.name] = {sl:amountCart[gia.name].sl-1}
            setAmountCart(obj)
        }
        

        return(
            <div> 
                <button onClick={() =>{increaseT(gia)}}>+</button>
                {amountCart[x.gia.name].sl}
                <button onClick={()=>{increaseG(gia)}}>-</button> 
           </div>
        )
        
    
    } 

    const DataCartV = dataContext.map(function(x){
    
       
        
       return ( <div className="contentCart">
       <div>Tên sản phẩm: {x.name},_Giá: {x.gia}VND,_số lượng: {x.soluong}</div>
       <Xnxxxx gia={x}/>
        
    </div>)
    })

           
        
     
     

   
    
    
    
   
    
    
   
    return( <div>
       {DataCartV}
       </div>
    )     
       
    
}
export default DataCart;










