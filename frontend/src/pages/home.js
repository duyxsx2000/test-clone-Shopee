import React,{useContext, useEffect,useState} from "react"
import { AppContext } from "../contex/AppContext";
import { Link } from "react-router-dom";
import Lock from "../lock/Lock";

import '../style/home.css'

function Home(props) {

   //console.log(props.data,'successfull connect data');
  const {dataContext,setDataContext,tongTien,setTongTien,setAmountCart,amountCart,setDataDetail,dataDetail} = useContext(AppContext)
  //console.log(dataContext);
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
    // console.log(dataContext);
  function detail(x){
    setDataDetail(x)
    console.log(x);
    console.log(dataDetail);
  }
  
  const ListData = props.data.map(function(x,index){
    return(
      <div key={index} className="contentCon1">
       <img className="img" src={x.img}></img>
       <div  className="name"> {x.name}</div>
       <div className="contentAmount">
          <div className="old"> {x.gia}.vnd</div>
          <div className="soluong"> sl:{x.soluong}</div>
       </div> 
       <div className="contentAdd">
          <button onClick={()=>AddToBasket(x)}>thêm vào giỏ hàng</button><br/>
          <Link className="linkk" to='/detail' onClick={()=>detail(x)}>chi tiet</Link>
       </div> 
      </div>  
    )
   });
   
  return(
  <div className="content">
    <h1>Gợi Ý Hôm Nay </h1>
    
    <Lock></Lock>
    
    <div className="contentCon">
     {ListData}
    </div>
  </div>
)
}

export default Home;


