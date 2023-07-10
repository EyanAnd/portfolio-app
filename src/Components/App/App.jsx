import './App.css';
import Background from '../Background/Background';
import NameAnimation from '../NameAnimation/NameAnimation';
import { Divider, Flex } from '@chakra-ui/react';
import Nav from '../Nav/Nav';
import IntroContainer from '../IntroContainer/IntroContainer';
import MainContainer from '../MainContainer/MainContainer';
import LinkAnimationContainer from '../LinkAnimationsContainer/LinkAnimationsContainer';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import PastProjectIcons from '../PastProjectIcons/PastProjectIcons';
import Footer from '../Footer/Footer';


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
            <AboutMe />
          </Flex>
          <Flex w="100%" justifyContent="space-between" p={'2rem'}>
            <Projects />
            <PastProjectIcons />
          </Flex>
          <Divider borderColor={'brand.200'} variant={'dashed'} />
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
