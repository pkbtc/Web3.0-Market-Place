import React, { useState } from 'react'
import Web3Context from './Statecontext'
const Web3ContextProivder = ({children}) => {
    const [account,setAccount]=useState(null);
    const [provider,setProvider]=useState(null);
    const [contract,setContract]=useState(null);
    const [signer,setSigner]=useState(null);
  return (
    <Web3Context.Provider value={{account,setAccount,provider,setProvider,contract,setContract,signer,setSigner}}>{children}</Web3Context.Provider>
  )
}

export default Web3ContextProivder
