import { Divider, Flex, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";


export default function LinkAnimationContainer() {
    const soloProjectIcon =
        "M14.831,17c-.128,0-.256-.049-.354-.146-.195-.195-.195-.512,0-.707l3.083-3.083c.283-.283,.439-.66,.439-1.061s-.156-.777-.439-1.061l-3.088-3.088c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.088,3.088c.473,.472,.732,1.1,.732,1.768s-.26,1.295-.732,1.768l-3.083,3.083c-.098,.098-.226,.146-.354,.146Zm-5.308-.146c.195-.195,.195-.512,0-.707l-3.083-3.083c-.283-.283-.439-.66-.439-1.061s.156-.777,.439-1.061l3.088-3.088c.195-.195,.195-.512,0-.707s-.512-.195-.707,0l-3.088,3.088c-.472,.472-.732,1.1-.732,1.768s.26,1.295,.732,1.768l3.083,3.083c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146Zm14.477,2.646V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5ZM19.5,1c1.93,0,3.5,1.57,3.5,3.5v15c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15Z";

        const resumeIcon = "M156.162 0C140.21 0 124.257 6.56866 112.058 18.4548L25.1017 103.535C-8.36722 137.003 -8.36722 191.117 25.1017 224.898C58.5705 258.367 112.684 258.367 146.465 224.898L185.565 185.799L163.982 164.216L127.698 199.562L124.883 203.628C103.3 225.211 68.2671 225.211 46.6844 203.628C25.4145 182.358 26.04 147.951 46.6844 126.368L133.641 40.3503C145.84 28.1514 166.171 28.1514 178.683 40.3503C190.882 52.5493 190.256 71.9424 178.683 84.4542L100.485 161.714C97.3569 164.842 92.0394 164.842 88.5987 161.714C85.4707 158.586 85.4707 153.269 88.5987 149.828L90.4754 148.89L118.94 119.487L97.3569 97.9043L67.016 128.245C52.0019 143.259 52.0019 167.97 67.016 182.984C82.03 197.998 106.741 198.311 121.755 182.984L199.953 106.662C224.351 82.2646 224.351 42.8527 199.953 18.7676C187.754 6.56866 172.114 0.312793 155.849 0.312793L156.162 0Z";
    return (
        <>
            <Flex justifyContent={'flex-start'} align={'center'} gap={'4rem'} alignContent={'center'} p={"2rem"} flexDir={"column"} boxSize={"container.sm"}>
                <AnimatePresence>
                    <motion.div 
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.25, delay: 0.1 }}>
                    <Heading p={'1rem'} fontFamily={'body100'} noOfLines={1}>Capstone Project</Heading>
                    <Divider borderColor={'brand.200'} />
                    </motion.div>
                    <motion.a
                        href="https://github.com/EyanAnd/coffee-for-good-homebase"
                        target="_blank"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: 0.1 }}

                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={120}
                            height={120}
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="0.5"
                                stroke="#111111"
                                d={soloProjectIcon}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                            />
                        </motion.svg>

                    </motion.a>
                    <motion.div 
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.25, delay: 0.1 }}>
                    <Heading p={'1rem'} fontFamily={'body100'} noOfLines={1}>Check Out My Resume</Heading>
                    <Divider borderColor={'brand.200'} />
                    </motion.div>
                    <motion.a
                        href="https://github.com/EyanAnd/coffee-for-good-homebase"
                        target="_blank"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: 0.1 }}

                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 240 260"
                            width={120} 
                            height={120}
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="3"
                                stroke="#111111"
                                d={resumeIcon}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.svg>
                    </motion.a>
                </AnimatePresence>
            </Flex>
        </>
    );
}
