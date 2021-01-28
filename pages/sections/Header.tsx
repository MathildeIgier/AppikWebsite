import React, { useState, useRef } from 'react'; // we need this to make JSX compile
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Box, Flex, TabList, Tab, TabPanels, TabPanel, Tabs } from "@chakra-ui/react"
import { ParticlesComponent } from '../components/Particles';



const DynamicComponent = dynamic(() => import('../components/Typewritter'), { ssr: false })


export const Header = () => {
    return <Flex p={5} flexDirection='column'>
        <Image src='/img/logo.svg' width='100' height='60'/>
        <Flex  
            h='50vh' 
            justifyContent='center' 
            alignItems='center' 
            textStyle="h1"
        >
           <DynamicComponent />
        </Flex>
        <Box position='absolute' h='50vh' w='100%'> 
            <ParticlesComponent />
        </Box>
    </Flex>
}