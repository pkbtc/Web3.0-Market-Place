import React from 'react'
import { useState,useEffect } from 'react';
import {ethers} from 'ethers';
import ABI from '../components/Abi.json'


const Products = ({children}) => {
    const [account,setAccount]=useState(null);
    const [provider,setProvider]=useState(null);
    const [contract,setContract]=useState(null);
    const [signer,setSigner]=useState(null);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        Wallet();
    },[])
    const Wallet=async()=>{
        if(window.ethereum==null){
            alert("please install metamask");
        }
        else{
            const accounts=await window.ethereum.request({method:'eth_requestAccounts'});
            const selectedAccount=accounts[0];
            setAccount(selectedAccount);
            const provider=new ethers.BrowserProvider(window.ethereum);
            setProvider(provider);
            const signer=await provider.getSigner();
            setSigner(signer);
            const contractAddress="0xc0BB653c0934dfFe2E50d917B1edef340E2f721C";
            const contract=new ethers.Contract(contractAddress,ABI,signer);
            setContract(contract);
            console.log(account,provider,signer,contract);
            const data=await contract.getProducts();
            setProducts(data);
            console.log(products);
            console.log(products[0])

        }
    }
  return (
    <div>
      <button onClick={Wallet}>Connect Wallet</button>
      
    </div>
  )
}

export default Products
