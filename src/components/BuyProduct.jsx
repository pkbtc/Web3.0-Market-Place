import React, { useContext } from 'react';
import Web3Context from '../context/Statecontext';

const BuyProduct = () => {
    const { account, setAccount, provider, setProvider, signer, setSigner, contract, setContract } = useContext(Web3Context);
    console.log(account, provider, signer, contract);

    const handleBuy = async (e) => {
        e.preventDefault();
        try {
            const id = e.target[0].value;
           const tx=await contract.buy(id,{value:100000000000000});

          
            await tx.wait();
            console.log("Product purchase successful");
        } catch (error) {
            console.error("Error purchasing product:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleBuy}>
                <input type='text' placeholder='Enter the product id' />
                <button type='submit'>Buy</button>
            </form>
        </>
    );
};

export default BuyProduct;
