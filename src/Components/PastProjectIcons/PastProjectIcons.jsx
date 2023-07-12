import { Divider, Flex, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";


export default function PastProjectIcons() {
    const movieSagas = [
        "M9 146.457V121.543C9 70.5691 9 45.0823 24.9416 28.6833C40.8834 12.2843 65.9813 11.5745 116.177 10.1547C139.963 9.48204 164.259 9 185.055 9C205.851 9 230.148 9.48204 253.933 10.1547C304.128 11.5745 329.227 12.2843 345.168 28.6833C361.11 45.0823 361.11 70.5691 361.11 121.543V146.457C361.11 197.43 361.11 222.917 345.168 239.315C329.227 255.715 304.13 256.424 253.935 257.845C230.148 258.518 205.851 259 185.055 259C164.259 259 139.962 258.518 116.175 257.845C65.9804 256.424 40.883 255.715 24.9414 239.315C9 222.917 9 197.43 9 146.457Z",
        "M220.266 134.001L158.647 169.212V98.7898L220.266 134.001Z"
    ]

    const joinedPath = movieSagas.join(" ");

    const feedback = "M10 250.132V37.7778C10 22.4365 22.4365 10 37.7778 10H232.222C247.564 10 260 22.4365 260 37.7778V176.667C260 192.008 247.564 204.444 232.222 204.444H78.9062C70.4678 204.444 62.4869 208.281 57.2154 214.869L24.8406 255.338C19.9196 261.489 10 258.01 10 250.132Z";
    return (
        <>
            <Flex id="projects" justifyContent={'flex-start'} align={'center'} gap={'4rem'} alignContent={'center'} p={"2rem"} flexDir={"column"}>
                <AnimatePresence>
                    <motion.div 
                     initial={{ opacity: 0, x: 400 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.25, delay: 0.1 }}>
                    <Heading p={'1rem'} fontFamily={'body100'}> Movie Sagas</Heading>
                    <Divider borderColor={'brand.200'} />
                    </motion.div>
                    <motion.a
                        href="https://github.com/EyanAnd/movie-sagas"
                        target="_blank"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: 0.1 }}

                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 400 280"
                            width={120}
                            height={120}
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="7"
                                stroke="#111111"
                                d={joinedPath}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                            />
                        </motion.svg>
                    </motion.a>
                    <motion.div 
                     initial={{ opacity: 0, x: 400 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.25, delay: 0.1 }}>
                    <Heading p={'1rem'} fontFamily={'body100'} >Feedback Loop</Heading>
                    <Divider borderColor={'brand.200'} />
                    </motion.div>
                    <motion.a
                        href="https://github.com/EyanAnd/redux-feedback-loop"
                        target="_blank"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, delay: 0.1 }}

                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 260 260"
                            width={120} 
                            height={120}
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="5"
                                stroke="#111111"
                                d={feedback}
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
