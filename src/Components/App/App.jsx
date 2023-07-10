import './App.css';
import Background from '../Background/Background';
import NameAnimation from '../NameAnimation/NameAnimation';
import { Divider, Flex } from '@chakra-ui/react';
import Nav from '../Nav/Nav';
import IntroContainer from '../IntroContainer/IntroContainer';
import MainContainer from '../MainContainer/MainContainer';
import LinkAnimationContainer from '../LinkAnimationsContainer/LinkAnimationsContainer';


function App() {
  return (
    <Flex gap={'3rem'} direction="column" minH="100vh"  color="brand.200">
      <Flex direction="row" align="center" justifyContent="space-between">
        <Nav />
      </Flex>
      <Flex flex="1" alignItems="center" justifyContent="center">
        <Flex justifyContent={'center'} alignContent={'center'}>
          <Background />
        </Flex>
        <Flex direction="column" w="100%">
          <Flex w="100%" justifyContent="center">
            <NameAnimation />
          </Flex>
          <Flex w="100%" justifyContent="space-between" p={'2rem'}>
            <IntroContainer />
            <LinkAnimationContainer />
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'} p={'2rem'}>
            <MainContainer />
            <IntroContainer />
          </Flex>
          <Flex w="100%" justifyContent="left" p={'2rem'}>
            <IntroContainer />
          </Flex>
          <Divider variant={'dashed'} borderColor={'brand.200'}/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
