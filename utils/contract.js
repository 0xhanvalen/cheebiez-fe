
import {GC_ADDRESS, MN_ADDRESS, RB_ADDRESS} from './address';
import {CheebiezABI} from './abis/CheebiezABI';
import { ethers } from 'ethers';

export const CheebiezContract = async (provider, signer) => {
    let contractAddress;
    let network = await provider.getNetwork();
    let chainID = network.chainId;

    // if (chainID == "1") {
    //     contractAddress = MN_ADDRESS;
    // }
    
    // if (chainID == "100") {
    //     contractAddress = GC_ADDRESS;
    // }

    if (chainID == "4") {
        contractAddress = RB_ADDRESS;
    }

    if (typeof contractAddress == "undefined") {
        alert("You must change your chain");
        return null;
    }

    const read = new ethers.Contract(contractAddress, CheebiezABI, provider);
    const write = new ethers.Contract(contractAddress, CheebiezABI, signer);
    return {read, write};
}