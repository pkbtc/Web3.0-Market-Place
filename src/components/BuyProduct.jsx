import React from 'react'
import { useContext } from 'react';
import Web3Context from '../context/Statecontext';

const BuyProduct = () => {
    const {account,setAccount,provider,setProvider,signer,setSigner,contract,setContract}=useContext(Web3Context);
    console.log(account,provider,signer,contract);
    const handleBuy=async(e)=>{
        e.preventDefault();
        const id=e.target[0].value;
        console.log(id);
    }
      return (
    <>
    <form onSubmit={handleBuy}>
    <input type='text' placeholder='enter the product id'/>
    <button type='submit'>Buy</button>
    </form>
    </>
  )
}

export default BuyProduct
