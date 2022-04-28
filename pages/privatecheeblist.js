import {Box} from '@chakra-ui/react';
import { PrivateCheeblist } from '../components/PrivateCheeblist/PrivateCheeblist';

export default function Page() {

    return (
        <>
        <Box sx={{background: `#269de9`, minHeight: `100vh`, display: `flex`, flexDirection: `column`, justifyContent: `center`}}>
            
            <PrivateCheeblist />
        </Box>
        </>
    )
}