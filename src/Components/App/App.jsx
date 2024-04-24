import './App.css';
import Background from '../Background/Background';
import NameAnimation from '../NameAnimation/NameAnimation';
import { Flex} from '@chakra-ui/react';
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
    <>
      <Background />
      <Flex gap={'4rem'} marginX='auto' direction='column' maxW={'container.xl'}>
        <Flex w={'100%'} direction={{ base: 'column', sm: 'row' }}>
          <Nav />
        </Flex>
        <Flex direction={{ base: 'column', sm: 'row' }}>
        <NameAnimation />
        </Flex>
        <Flex direction={{ base: 'column', sm: 'row' }}>
          <Flex flex={1}>
            <IntroContainer />
          </Flex>
          <Flex flex={1}>
            <LinkAnimationContainer />
          </Flex>
        </Flex>
        <Flex direction={{ base: 'column', sm: 'row-reverse' }}>
          <Flex flex={1}>
            <AboutMe />
          </Flex>
          <Flex flex={1}>
            <MainContainer />
          </Flex>
        </Flex>
        <Flex direction={{ base: 'column', sm: 'row' }}>
          <Flex flex={1}>
            <Projects />
          </Flex>
          <Flex flex={1}>
            <PastProjectIcons />
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  )

}

export default App;
