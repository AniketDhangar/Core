import React, { useState } from 'react'
import Logout from '../Logout';
import ConditionalLogout from './ConditionalLogout';
import ConditionalLogin from './ConditionalLogin';

function Condition() {
 const [islogged,setIslogged] =  useState(false);

//  if(islogged){
//     return <ConditionalLogout/>
//  }
//  else{
//     return <ConditionalLogin/>
//  }

 return(
    <div>
        {islogged ?  <ConditionalLogout/> :  <ConditionalLogin/>}
    </div>
 )
  
}

export default Condition