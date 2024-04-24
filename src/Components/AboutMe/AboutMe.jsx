import { Flex, Box, Text, Heading, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <Flex p={'2rem'} gap={'3rem'} fontFamily={'body200'} bg={'brand.200'} color={'brand.300'}>
                <Box gap={'4rem'} w={'100%'} >
                    <Heading gap={'1rem'} p={'1rem'} fontFamily={'body100'} as='h2' >About Me</Heading>
                    <Divider size={'sm'} borderColor={'brand.300'} />
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>
                        I was born and raised in Fargo, ND. I have an adorable dog named Baker, I enjoy playing tennis, soccer and like the rest of the world have become quite addicted to pickle ball.
                    </Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>
                        With my educaiton history being in Greco-Roman history and psychology, software development seems like quite the pivot. And it sure was! The road was windy and bumpy before ending up at Emerging Digital Academy where I learned how to code. 
                        But I realized that I love to help people through software development. The idea of creating something through technology that can help people in their day to day was mindblowing to me. I knew I had to dive in and start learning more.
                    </Text>
                    <Text gap={'1rem'} p={'1rem'} fontFamily={'body100'} fontSize={'lg'}>
                        When I am not building fun projects or working in the office, I love to spend time at home with my wife.
                        We often read, play games, sing and play songs with each other. 
                        My wife and I own a coffee roasting company with some good friends of ours which has been such a rewarding and humbling experience.
                        Recently, I have been getting back into reading books a lot. I started the "Red Rising" series. If you haven't read it and you are a fan of
                        science fiction, I highly recommend it. 
                        I hope that you have gottena  good glimpse into who I am through this. If you have any other questions, please feel free to shoot me an email, I'd love to connect with you. 
                    </Text>
                </Box>
            </Flex>

        </motion.div>
    )
}