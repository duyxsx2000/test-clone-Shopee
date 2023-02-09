
import  axios from'axios';
import React, { useContext, useState } from "react";
import { AppContext } from '../contex/AppContext';
import '../style/login.css'
import { Route, Link,Routes } from 'react-router-dom';
import Register from './Register';




function Login(){

   const [account,setAccount] = useState();
   const [password,setPassword] = useState()
   const {dataLogIn,setDataLogIn,resInPost,setResInPost} = useContext(AppContext)
   // console.log(account);
   // console.log(password);
   const dataAcc ={acc:account,pass:password}
   
    function login(event){
       event.preventDefault()
        console.log(dataAcc);
        axios.post('http://localhost:5000/data/account?q=5',dataAcc)
                .then(function (response) {
                    console.log(response.data);
                    const resData = response.data
                    setResInPost(resData)
                    if(resData){
                        setDataLogIn(1)
                    }   
                })
                .catch(function (error) {
                    console.log(error);
                });
        setAccount('')
        setPassword('')    
    }
   // console.log(resInPost);
    function logout(event){
        event.preventDefault()
        setResInPost({notification:'vui long dang nhap lai'})
        setDataLogIn()   
    }
   // console.log(resInPost);
    
    return(
        <div className="login">
            <form className='fromLogin'>
                <div>From Login</div>                   
                <input type='text'
                       value={account}
                       onChange={(e)=>{setAccount(e.target.value)}}
                       placeholder='Account'
                />
               

               
                <input type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder='Password'
                />
                
                <button className='button1' onClick={login}>login</button>
                <button className='button2' onClick={logout}>logout</button>
                <div className='xxx'><a href='http://localhost:3000/register'>Register Now</a></div>   
            </form>
            
            {/* {resInPost && resInPost.notification}
            {resInPost.data && <div>so du tai khaon cua ban la: {resInPost.data[0].taikhoan}VND</div>}
            {resInPost.data && <div>sdt cua ban la: {resInPost.data[0].sdt}SDT</div>} */}  
        </div>
    )

}

export default Login;