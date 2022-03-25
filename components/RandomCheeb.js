import {useState} from 'react';
import {Image} from '@chakra-ui/react';

export const RandomCheeb = () => {

    const getCheebIndex = () => {
        return Math.ceil(Math.random() * 12)
    }
    const [cheebIndex, setCheebIndex] = useState(getCheebIndex());

    return (
        <Image src={`/images/old/Cheeb${cheebIndex}.png`} alt="A Cheeb" onClick={() => setCheebIndex(getCheebIndex())}/>
    )
}