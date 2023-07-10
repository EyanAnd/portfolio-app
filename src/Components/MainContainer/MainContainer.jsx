import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SiReact, SiChakraui, SiFramer, SiVisualstudiocode, SiGithub, SiJavascript } from 'react-icons/si';

export default function MainContainer() {
    const listItems = [
        { icon: SiReact, text: 'React' },
        { icon: SiChakraui, text: 'Chakra UI' },
        { icon: SiFramer, text: 'Framer Motion' },
        { icon: SiVisualstudiocode, text: 'VS Code' },
        { icon: SiGithub, text: 'GitHub' },
        { icon: SiJavascript, text: 'JavaScript' },
    ];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Box p={'2rem'} gap={'2rem'} flexDir={'column'} boxSize={'xl'}>
                    <Wrap spacing={5} alignContent={'center'} align={'center'}>
                        {listItems.map((item, index) => (
                            <WrapItem key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    drag
                                    dragConstraints={{
                                        top: -50,
                                        left: -50,
                                        right: 50,
                                        bottom: 50,
                                    }}
                                >
                                    <Flex gap={'2rem'} p={'2rem'} justifyContent={'space-evenly'} >
                                        <item.icon size={120} />
                                    </Flex>
                                </motion.div>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </motion.div>
        </AnimatePresence>
    );
}
