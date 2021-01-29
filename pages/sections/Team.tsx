import React from 'react'; // we need this to make JSX compile
import { Box, Flex } from "@chakra-ui/react"
import ParticlesComponent, { BubbleParticules } from '../components/Particles';
import DynamicCard from '../components/DynamicCard';
import Title from '../components/Title';




export default () => {
    return <Flex py={5} flexDirection='column'>
        <Flex flexDirection='column' w='100%' backgroundColor='blue.500' py={16} px={5} position='relative' h={700} justifyContent='space-between'>
            <Box py={8} color='white'>     
                <Title title='Team'/>
            </Box>
            <Flex zIndex={2} justifyContent='space-around' position='relative' w='100%'>
                <DynamicCard 
                    title='Mathilde Igier'
                    subtitle='co-Founder of Appik'
                    text= 'Passionate about development, I like to create modern and easy to use mobile application and website. I like to share my knowledge in coding as a teacher.'
                />
                <DynamicCard 
                    title='Gaspard Chevassus'
                    subtitle='co-Founder of Appik'
                    text= 'I like to break other team member foot with Typescript'
                />
            </Flex>
            <Box position='absolute' w='100%' zIndex={1} top={0}> 
                <BubbleParticules num={1000}/>
            </Box>
        </Flex>
    </Flex>
}