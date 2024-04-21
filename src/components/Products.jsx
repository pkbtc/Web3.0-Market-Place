import React, { useState, useEffect } from 'react';
import { Contract, ethers } from 'ethers';
import ABI from '../components/Abi.json';
import Web3Context from '../context/Statecontext';
import { useContext } from 'react';

const Products = () => {
    const { account, setAccount, provider, setProvider, signer, setSigner, contract, setContract } = useContext(Web3Context);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPro = async () => {
            try {
                console.log(account, provider, signer, contract);
                const con= new Contract("0xc0BB653c0934dfFe2E50d917B1edef340E2f721C", ABI, provider);
                console.log("hit")
                const data=await con.getProducts();
                console.log("hello")
                console.log(data);
                console.log(con)

                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (account && provider && signer && contract) {
            getPro();
        }
    }, []);

    return (
        <div>
            {/* Render products here */}
            {products.map((product, index) => (
                <div key={index}>
                    {/* Render product details */}
                </div>
            ))}
        </div>
    );
};

export default Products;
