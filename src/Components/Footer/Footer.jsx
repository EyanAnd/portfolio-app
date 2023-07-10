import {  Heading, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
    return (
        <Flex align={'center'} alignContent={'center'} justifyContent={'space-between'}>
        <AnimatePresence>
            <motion.div>
                <Flex direction={'column'} gap={'2rem'} p={'2rem'} >
                <Heading fontFamily={'body100'}>Contact</Heading>
                </Flex>
                <Flex dir="'row" gap={'2rem'} p={'2rem'}>
                <Text fontSize={'lg'} fontFamily={'body100'}>email: eyananderson@gmail.com</Text>
                </Flex>
            </motion.div>
        </AnimatePresence>
        <Flex p={'2rem'} >
            <Text>&copy; {new Date().getFullYear()} Eyan Anderson</Text>
        </Flex>
        </Flex>
    )
}