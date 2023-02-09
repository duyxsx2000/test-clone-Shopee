
import React ,{useState,useEffect} from "react";
import axios from 'axios';
import '../style/post.css';
function Post() {

  const [dataName,setDataName] = useState("");
  const [dataPrice,setDataPrice] = useState('');
  const [dataAmount,setDataAmount] = useState('');
  const [dataImage,setDataImage] = useState('');
 
 
  const SetImage =(event)=>{
    const file = event.target.files[0]
    console.log(file);
    getBase64(file)
    //console.log(file);
  }

  const getBase64 = (file)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = (e)=>{
    //console.log(e.target.result); 
    setDataImage(e.target.result)
  }}
  
  function setName(event){
      setDataName(event.target.value)
      console.log(dataName,'name');
  };
  //console.log(dataName);

 function setPrice(event){
    setDataPrice(event.target.value)
    console.log(dataPrice,'sl');
  };

 function setAmount(event){
    setDataAmount(event.target.value)
    console.log(dataAmount,'gia');
 }
// console.log(dataName,'name');
// console.log(dataPrice,'sl');
// console.log(dataAmount,'gia');
// console.log(dataImage,'img');

  const newData = {
    name:dataName,
    gia:dataPrice,
    soluong:dataAmount,
    img:dataImage
  }
//console.log(newData,'newdata');

function postData(event){
  event.preventDefault()
  axios.post('http://localhost:5000/data/user',newData
  
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    setDataName("")
    setDataPrice("")
    setDataAmount("")
    setDataImage("")

}

  return(
       
       <div>
        <div>post</div>
        <form className="fromPost">
            
            <input type="text"  
                   value={dataName}
                   onChange={setName}
                   placeholder='NAME' />
            
           
            <input type="text" 
                   value={dataPrice}
                   onChange={setPrice}
                   placeholder='PRICE' />
            
            
            <input type="numble"
                   value={dataAmount}
                   onChange={setAmount}
                   placeholder='AMOUNT' />
            <div>      
              <label> uploand file image</label>
              <input type="file"
                    
                    onChange={SetImage}
                    placeholder='file image'   />
            </div> 
            <button className="postData" onClick={postData}>Thêm mặt hàng</button>
        </form>
        <img src={dataImage}></img> 
        <div> NAME: {newData.name}</div>
        <div> PRICE: {newData.gia}</div>
        <div> AMOUNT: {newData.soluong}</div>
       </div>
    )
}

export default Post