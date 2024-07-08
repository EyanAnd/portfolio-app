import { Link, IconButton, ButtonGroup, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Nav.css'

export default function Nav() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Flex w={'100%'} gap={'2rem'} justifyContent={'space-between'} >
      <Flex align="center" gap={2}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ButtonGroup variant="tertiary" paddingTop="1rem">
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/eyanand/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="3.25rem" />}
            />
            <IconButton
              as={Link}
              href="https://github.com/EyanAnd?tab=repositories"
              aria-label="Github"
              icon={<FaGithub fontFamily='body100' fontSize="3.25rem" />}
            />
          </ButtonGroup>
        </motion.div>
      </Flex>
      <Flex p={6} gap={'2rem'} >
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        ><Flex gap={'2rem'} >
            <Link onClick={() => scrollToSection('about')} fontFamily={'body100'} fontSize={'xl'}>About Me</Link>
            {/* <Link onClick={() => scrollToSection('projects')} fontFamily={'body100'} fontSize={'xl'}>Projects</Link> */}
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
