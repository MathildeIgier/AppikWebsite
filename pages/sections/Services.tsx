import React from 'react'; // we need this to make JSX compile
import {  Flex, Box, Text} from "@chakra-ui/react"
import {Title, Subtitle} from '../components/Title';
import {BubbleParticules} from '../components/Particles';
import { IoDesktopOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaReact } from 'react-icons/fa';
import PhoneSvg from '../../src/svg/phone';



export const Services = () => {
    return <Flex p={5} flexDirection='column'>
        <Title title='Services'/>
        <Box p={5}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box backgroundColor='blue.400' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='green.400' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <IoPhonePortraitOutline />
                    </Box>
                    <BubbleParticules />
                </Box>
                <Box flex='1' paddingLeft={8}>
                    <Subtitle title='Mobile application' />
                    <Text>We create modern mobile application to fit your business need. Thanks to the use of a state of the art technology the development is faster and cheaper to create awesom apps</Text>
                </Box>
            </Box>
        </Box>
        <Box p={5}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Subtitle title='Website' />
                    <Box>We like to develop custom website to make the user journey easy and efficient.</Box>
                </Box>
                <Box backgroundColor='blue.400' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='yellow.400' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <IoDesktopOutline />
                    </Box>
                    <BubbleParticules />
                </Box>
            </Box>
        </Box>
        <Box p={5}>
            <Subtitle title='Coaching' />
            <Box>We can train team in your company to ... ? Here are our programs:</Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' py={2}>
                <Box>
                    <Text color='green.400' fontWeight='bold'>Web</Text>
                    <Text>ReactJS, Redux, Redux Saga and Firebase - <Text as='span' color='green.400' fontWeight='bold'>BEGINNER</Text></Text>
                    <Text>Optimized used of ReactJS - <Text as='span' color='green.400' fontWeight='bold'>INTERMEDIATE</Text></Text>
                    <Text>HTML, CSS and JavaScript - <Text as='span' color='green.400' fontWeight='bold'>ALL LEVELS</Text></Text>
                </Box>
                <Box backgroundColor='blue.400' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='red.400' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <FaReact />
                    </Box>
                    <BubbleParticules />
                </Box>
                <Box>
                    <Text color='green.400' fontWeight='bold'>Mobile</Text>
                    <Text>React Native, Redux, Redux Saga and Firebase - <Text as='span' color='green.400' fontWeight='bold'>BEGINNER</Text></Text>
                    <Text>How to masterized React Native ? Animation, stores deployment - <Text as='span' color='green.400' fontWeight='bold'>INTERMEDIATE</Text></Text>
                </Box>
            </Box>
            
        </Box>
    </Flex>
}