import { Heading, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
    return (
        <Flex direction={{ base: 'column', sm: 'row' }} align={'center'} alignContent={'center'} justifyContent={'space-between'}>
            <AnimatePresence>
                <motion.div>
                    <Flex direction={'column'} gap={'2rem'} p={'1rem'} >
                        <Heading fontFamily={'body100'}>Contact</Heading>
                    </Flex>
                    <Flex dir="row" gap={'1rem'} p={'1rem'}>
                        <Text fontSize={'lg'} fontFamily={'body100'}>email: eyananderson@gmail.com</Text>
                    </Flex>
                    <Flex p={'1rem'} >
                        <Text>&copy; {new Date().getFullYear()} Eyan Anderson</Text>
                    </Flex>
                </motion.div>
            </AnimatePresence>
        </Flex>
    )
}