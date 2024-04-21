import React, { useState, useEffect } from 'react';
import { Contract, ethers } from 'ethers';
import ABI from '../components/Abi.json';
import Web3Context from '../context/Statecontext';
import { useContext } from 'react';
import './test.css';

const Products = () => {
    const { account, setAccount, provider, setProvider, signer, setSigner, contract, setContract } = useContext(Web3Context);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPro = async () => {
            try {
                console.log(account, provider, signer, contract);
                const con= new Contract("0xc0BB653c0934dfFe2E50d917B1edef340E2f721C", ABI, provider);
                
                const data=await con.getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (account && provider && signer && contract) {
            getPro();
        }
    }, []);

    return (
        <>
        <h1>Our Available Products</h1>
        <div className="product-container">
            {products.map((product, index) => (
                <div className="product-card" key={index}>
                    <img className="product-image" src={product[3]} alt={product[0]} />
                    <div className="product-details">
                        <h3 className="product-title">{product[0]}</h3>
                        <p className="product-description">{product[1]}</p>
                        <p className="product-price">{product[2]}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Products;
