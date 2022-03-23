import {Image} from '@chakra-ui/react';

export const RandomCheeb = () => {

    const cheebIndex = Math.ceil(Math.random() * 12);

    return (
        <Image src={`/images/Cheeb${cheebIndex}.png`} alt="A Cheeb" />
    )
}