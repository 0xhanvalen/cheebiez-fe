import {useWallet} from '@raidguild/quiver';

export const ConnectWallet = () => {
    const {connectWallet, isCOnnecting, isConnected, disconnect, address} = useWallet();

}