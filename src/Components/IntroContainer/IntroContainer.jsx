import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import image from '../../images/portrait.jpg'

export default function IntroContainer() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Flex p={'2rem'} gap={'3rem'} fontFamily={'body100'} bg={'brand.200'} color={'brand.300'}>
                <Box gap={'4rem'} w={'100%'} >
                    <Image gap={'2rem'} p={'1rem'} src={image} boxSize={'2xs'} objectFit={'cover'} alt="intro-image" />
                    <Heading gap={'1rem'} p={'1rem'} fontFamily={'body100'} as='h2' >Welcome!</Heading>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>
                        Hey! Thanks for stopping by! My name is Eyan and I am a software engineer based in Fargo, ND.
                    </Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>
                        Here you will find out a lot more about who I am and some projects I have worked on. Thanks for stopping by!
                    </Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}> Sincerely, Eyan.</Text>
                </Box>
            </Flex>
        </motion.div>
    )
}