import React from 'react'
import { useState,useContext } from 'react';
import Web3Context from '../context/Statecontext';

const Withdraw = () => {
    const {contract}=useContext(Web3Context);
    console.log(contract);
    const handlewithdraw=async()=>{
        try {
            const tx=await contract.withdraw();
            await tx.wait();
            console.log("withdrawl succesfull for the owner");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <button onClick={handlewithdraw}>Withdraw</button>
    </div>
  )
}

export default Withdraw
