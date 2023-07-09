import './App.css';
import { AnimatePresence } from 'framer-motion';
import Background from '../Background/Background';
import NameAnimation from '../NameAnimation/NameAnimation';
import { Flex } from '@chakra-ui/react';
import Nav from '../Nav/Nav';
function App() {
  return (
    <Flex direction={'column'} minH={'500vh'} h={'auto'} bg="brand.100" color="brand.200">
     
      <Flex direction={'row'} alignContent={'center'} alignItems={'center'} justifyContent={'space-between'}>
        <Nav />
      </Flex>
      <Flex>
        <Flex position={'fixed'}
        top={0}
        right={0}
        left={0}
        bottom={0}>
          <Background />
        </Flex>
        <AnimatePresence>
          <NameAnimation />
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}

export default App;

