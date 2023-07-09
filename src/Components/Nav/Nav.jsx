import { Link, IconButton, ButtonGroup, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Nav.css'

export default function Nav() {
  return (
    <>
      <Flex gap={'2rem'} justifyContent="space-between" >
        <Flex align="center" gap={2} justifyContent='flex-start'>
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
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as={Link}
                href="https://github.com/EyanAnd?tab=repositories"
                aria-label="Github"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </motion.div>
        </Flex>
      </Flex>
      <Flex gap={'2rem'} align={'center'}>
        <Flex p={6} align="center" >
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          ><Flex gap={'2rem'} >
              <Link fontFamily={'body100'} fontSize={'xl'}>About Me</Link>
              <Link fontFamily={'body100'} fontSize={'xl'}>Projects</Link>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
}
