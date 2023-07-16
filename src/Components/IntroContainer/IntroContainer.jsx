import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import image from '../../images/portrait.jpg'

export default function IntroContainer() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Flex p={'2rem'} gap={'3rem'} fontFamily={'body100'} bg={'brand.200'} color={'brand.100'}>
                <Box gap={'4rem'} w={'100%'} >
                    <Image gap={'2rem'} p={'1rem'} src={image} boxSize={'2xs'} objectFit={'cover'} alt="intro-image" />
                    <Heading gap={'1rem'} p={'1rem'} fontFamily={'body100'} as='h2' >Welcome!</Heading>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>Here you can expect to find out a little more about me, as well as some of my
                        favorite projects I have worked on.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>Thank you so much for checking out my personal portfolio website.
                        This was a blast to make and I hope you enjoy!</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}> Sincerely, Eyan.</Text>
                </Box>
            </Flex>
        </motion.div>
    )
}