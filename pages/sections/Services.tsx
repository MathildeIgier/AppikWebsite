import React from 'react'; // we need this to make JSX compile
import {  Flex, Box, Text, Badge} from "@chakra-ui/react"
import Title, { Subtitle} from '../components/Title';
import {BubbleParticules} from '../components/Particles';
import { IoDesktopOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaReact, FaBrain } from 'react-icons/fa';
import PhoneSvg from '../../src/svg/phone';



export default() => {
    return <Flex p={5} flexDirection='column'>
        <Title title='Services'/>

        {/* Applications Mobile */}
        <Box p={5}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box backgroundColor='blue.500' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='green.500' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <IoPhonePortraitOutline />
                    </Box>
                    <BubbleParticules />
                </Box>
                <Box flex='1' paddingLeft={8}>
                    <Subtitle title='Applications Mobile' />
                    <Text>Nous développons des applications <Text as='span' fontWeight='bold'>iOS et Android</Text> sur-mesure, performantes et intuitives. De la conception au déploiement sur les stores, nous gérons l'ensemble du processus.</Text>
                    <Flex mt={2} gap={2}>
                        <Badge colorScheme='green'>Swift</Badge>
                        <Badge colorScheme='green'>Kotlin</Badge>
                        <Badge colorScheme='blue'>React Native</Badge>
                    </Flex>
                </Box>
            </Box>
        </Box>

        {/* Applications Web */}
        <Box p={5}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box flex='1' paddingRight={8}>
                    <Subtitle title='Applications Web' />
                    <Text>Sites web et applications web modernes, <Text as='span' fontWeight='bold'>responsive et performants</Text>. APIs robustes et backends scalables pour supporter votre croissance.</Text>
                    <Flex mt={2} gap={2}>
                        <Badge colorScheme='blue'>React</Badge>
                        <Badge colorScheme='purple'>Next.js</Badge>
                        <Badge colorScheme='orange'>Node.js</Badge>
                    </Flex>
                </Box>
                <Box backgroundColor='blue.500' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='yellow.500' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <IoDesktopOutline />
                    </Box>
                    <BubbleParticules />
                </Box>
            </Box>
        </Box>

        {/* Intégration IA */}
        <Box p={5}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box backgroundColor='pink.500' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='white' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <FaBrain />
                    </Box>
                    <BubbleParticules />
                </Box>
                <Box flex='1' paddingLeft={8}>
                    <Flex alignItems='center' gap={2}>
                        <Subtitle title='Intégration IA' />
                        <Badge colorScheme='pink' fontSize='sm'>NOUVEAU</Badge>
                    </Flex>
                    <Text>Après 10 ans d'expertise en développement, nous intégrons désormais <Text as='span' fontWeight='bold'>l'intelligence artificielle</Text> dans vos applications : chatbots, automatisation, analyse de données, génération de contenu.</Text>
                    <Flex mt={2} gap={2}>
                        <Badge colorScheme='pink'>ChatGPT</Badge>
                        <Badge colorScheme='pink'>Claude</Badge>
                        <Badge colorScheme='pink'>LLM</Badge>
                    </Flex>
                </Box>
            </Box>
        </Box>

        {/* Formation */}
        <Box p={5}>
            <Subtitle title='Formation & Coaching' />
            <Text mb={4}>Nous formons vos équipes aux technologies modernes du web et mobile.</Text>
            <Box display='flex' justifyContent='space-between' alignItems='center' py={2}>
                <Box>
                    <Text color='green.500' fontWeight='bold'>Web</Text>
                    <Text>ReactJS, Redux, Firebase - <Text as='span' color='green.500' fontWeight='bold'>DÉBUTANT</Text></Text>
                    <Text>Optimisation ReactJS - <Text as='span' color='green.500' fontWeight='bold'>INTERMÉDIAIRE</Text></Text>
                    <Text>HTML, CSS, JavaScript - <Text as='span' color='green.500' fontWeight='bold'>TOUS NIVEAUX</Text></Text>
                </Box>
                <Box backgroundColor='blue.500' width='200px' height='200px' borderRadius='100px' position='relative'>
                    <Box color='red.500' position='absolute' top='57px' left='61px' fontSize={80} fontWeight='100'>
                        <FaReact />
                    </Box>
                    <BubbleParticules />
                </Box>
                <Box>
                    <Text color='green.500' fontWeight='bold'>Mobile</Text>
                    <Text>React Native, Redux, Firebase - <Text as='span' color='green.500' fontWeight='bold'>DÉBUTANT</Text></Text>
                    <Text>React Native avancé, animations, stores - <Text as='span' color='green.500' fontWeight='bold'>INTERMÉDIAIRE</Text></Text>
                </Box>
            </Box>
        </Box>
    </Flex>
}