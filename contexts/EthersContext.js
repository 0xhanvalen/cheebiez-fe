import { useState, useEffect, useContext, createContext } from "react";
import {ethers} from 'ethers';
import Web3Modal from "web3modal";
import {
    deriveChainId,
    deriveSelectedAddress,
    getProviderOptions,
  } from "../utils/web3modal.js";

export const EthersContext = createContext(null);

export const EthersContextFC = ({children}) => {
    const [address, setAddress] = useState(null);
    const [web3Modal, setWeb3Modal] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [ens, setENS] = useState(null);

    const connectApp = async () => {
        setIsUpdating(true);
        const providerOptions = getProviderOptions();
        const web3modal = new Web3Modal({providerOptions});

        const instance = await web3modal.connect();
        const tempProvider = new ethers.providers.Web3Provider(instance);
        const tempSigner = tempProvider.getSigner();
        const tempAddress = await tempSigner.getAddress();
        setWeb3Modal(web3modal);
        setProvider(tempProvider);
        setSigner(tempSigner);
        setAddress(tempAddress);
        setIsUpdating(false);
    };

    const disconnectApp = async () => {
        setIsUpdating(true);
        const defaultModal = new Web3Modal({
            providerOptions: getProviderOptions(),
            cacheProvider: true,
            theme: "light",
        })
        setWeb3Modal(defaultModal);
        setProvider(null);
        setSigner(null);
        setAddress(null);
        setIsUpdating(false);
    }

    return (
        <EthersContext.Provider
        value={{
            isUpdating,
            connectApp,
            disconnectApp,
            provider,
            signer,
            address,
            web3Modal,
            isUpdating,
        }}>{children}</EthersContext.Provider>
    )
}

export const useEthersContext = () => {
    const {
        isUpdating,
        connectApp,
        disconnectApp,
        provider,
        signer,
        address,
        web3Modal,
    } = useContext(EthersContext);
    return {
        isUpdating,
        connectApp,
        disconnectApp,
        provider,
        signer,
        address,
        web3Modal,
    }
}