import React from 'react'
import { useState } from 'react';
import {ethers} from 'ethers';
import ABI from '../components/Abi.json'
import Web3Context from '../context/Statecontext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Products from './Products';
const Addproducts = ({children}) => {
    const  navigate=useNavigate();
    const {account,setAccount,provider,setProvider,signer,setSigner,contract,setContract}=useContext(Web3Context);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productCost, setProductCost] = useState(0);
    const [productStock, setProductStock] = useState(0);
    const [productRating, setProductRating] = useState(0);
    const [productId, setProductId] = useState(3);
    const handleWallet=async()=>{
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

        }
    }
    const addProduct=async()=>{
        try {
            const tx = await contract.list(
                
                productName,
                productCategory,
                productImage,
                ethers.parseEther(productCost.toString()), // Convert cost to wei
                productRating,
                productStock
            );
            await tx.wait();
            console.log('Product listed successfully!');
            // Increment product ID for the next product
            setProductId(productId + 1);
            // Clear form fields after successful listing
            setProductName('');
            setProductCategory('');
            setProductImage('');
            setProductCost(0);
            setProductStock(0);
            setProductRating(0);
        } catch (error) {
         console.log(error);   
        }
    }
  return (
    <div>
    
    <button onClick={handleWallet}>Connect Wallet</button>
    <div>
            
    <h2>Add Product</h2>
    <div>
        <label>Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
    </div>
    <div>
        <label>Category:</label>
        <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
    </div>
    <div>
        <label>Image URL:</label>
        <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
    </div>
    <div>
        <label>Cost (ETH):</label>
        <input type="number" value={productCost} onChange={(e) => setProductCost(parseFloat(e.target.value))} />
    </div>
    <div>
        <label>Stock:</label>
        <input type="number" value={productStock} onChange={(e) => setProductStock(parseInt(e.target.value))} />
    </div>
    <div>
        <label>Rating:</label>
        <input type="number" value={productRating} onChange={(e) => setProductRating(parseInt(e.target.value))} />
    </div>
    <button onClick={addProduct}>Add Product</button>
</div>

    <button onClick={() => navigate('/buy')}>Buy</button>
    <button onClick={()=>navigate('/products')}>getProducts</button>
    </div>
  )
}

export default Addproducts
