import React, { useContext } from "react";
import { AppContext } from "../contex/AppContext";


export default function DetailItem(){
  const {dataDetail,setDataDetail,setDataContext,setTongTien,setAmountCart,dataContext,tongTien,amountCart} = useContext(AppContext)
  console.log(dataDetail);
  function AddToBasket(x){
    console.log(x.gia,'x')
    setDataContext(dataContext.concat(x))
    setTongTien(tongTien+x.gia)
    
    // them 1 key vo opjec --------------------------------------------------------------------------------------
    const zzzz={...amountCart};
    zzzz[x.name] = {sl:1}
    setAmountCart(zzzz)
    console.log(tongTien);
   }
    return(
        <div>
            <div>{dataDetail.name}
                  <img src={dataDetail.img}></img>

            </div>
            <button onClick={AddToBasket}>them vao gio hang</button>
        </div>
    )
}