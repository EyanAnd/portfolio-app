import { Flex, Box, Text, Heading, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Flex p={'2rem'} gap={'3rem'} fontFamily={'body100'} bg={'brand.200'} color={'brand.100'}>
                <Box gap={'4rem'} w={'100%'} boxSize={'container.sm'}>
                    <Heading gap={'1rem'} p={'1rem'} fontFamily={'body100'} as='h2' >Past Projects</Heading>
                    <Divider size={'sm'} borderColor={'brand.100'} />
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>Here are some current projects that I have enjoyed making during my time at Emerging Digital Academy.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}><strong>The Movie Saga Project</strong> allows the user to see their movie collection
                    of movies they have seen or maybe want to see. As well as tag them with genres.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}><strong>The Feedback Loop Project</strong> is a form that allows the user
                    to log their answers to the questions, then see them in a database.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>I am planning on adding more to these projects. One 
                    of my favorite things about software development is the ability to learn about something new that could add useful functionality to something
                    you have built.</Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>So make sure to come back and see if they have changed! 😁</Text>
                </Box>
            </Flex>

        </motion.div>
    )
}