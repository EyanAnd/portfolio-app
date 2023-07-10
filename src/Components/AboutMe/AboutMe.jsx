import { Flex, Box, Text, Heading, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Flex p={'2rem'} gap={'3rem'} fontFamily={'body100'} bg={'brand.200'} color={'brand.100'}>
                <Box gap={'4rem'} w={'100%'} boxSize={'container.sm'}>
                    <Heading gap={'1rem'} p={'1rem'} fontFamily={'body100'} as='h2' >About Me</Heading>
                    <Divider size={'sm'} borderColor={'brand.100'} />
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>I am a North Dakota Native and Future Full Stack Bootcamp
                    Graduate from Emerging Digital Academy. I decided to start learning how to code because I thought it would not only be a valuable skillset, but a way 
                    for me to express my creativity. Some technologies I am looking forward to learning after graduating include Python, Java as well as Svelte.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>I love discussing user first design and development as well as 
                    test driven development. As of now my favorite aspect of the stack has to be the front end. Creating Ways for the user to interact with the application
                    is very appealing to me.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>When I am not coding I am probably taking my dog on a walk, building custom keyboards,
                    playing tennis, soccer, or practicing jiu jitsu.</Text>
                </Box>
            </Flex>

        </motion.div>
    )
}