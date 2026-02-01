import React, { useState, useRef } from 'react'; // we need this to make JSX compile
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Box, Flex, Text, Button, Badge } from "@chakra-ui/react"
import ParticlesComponent from '../components/Particles';
import Typewritter from '../components/Typewritter';



/* const DynamicComponent = dynamic(() => import('../components/Typewritter'), { ssr: false })
 */

export default () => {
    return <Flex p={5} flexDirection='column' minH='100vh'>
        {/* Navigation */}
        <Flex justifyContent='space-between' alignItems='center' w='100%'>
            <Image src='/img/logo.svg' width='100' height='60'/>
            <Button
                colorScheme='pink'
                variant='outline'
                borderRadius='full'
                px={6}
            >
                Contact
            </Button>
        </Flex>

        {/* Hero Section */}
        <Flex
            flex={1}
            flexDirection='column'
            justifyContent='center'
            alignItems='flex-start'
            maxW='800px'
            py={16}
            zIndex={2}
        >
            {/* Swiss Badge */}
            <Text
                fontStyle='italic'
                color='gray.600'
                fontSize='lg'
                mb={4}
            >
                Swiss made in Lausanne 🇨🇭
            </Text>

            {/* Main Headline */}
            <Box textStyle="h1" mb={6}>
                <Text as='h1' fontSize={['3xl', '4xl', '5xl']} fontWeight='bold' lineHeight='1.2'>
                    Développement d'applications
                </Text>
                <Text as='span' fontSize={['3xl', '4xl', '5xl']} fontWeight='bold'>
                    iOS, Android & Web.
                </Text>
                <br />
                <Text
                    as='span'
                    fontSize={['3xl', '4xl', '5xl']}
                    fontWeight='bold'
                    position='relative'
                    _after={{
                        content: '""',
                        position: 'absolute',
                        bottom: '8px',
                        left: 0,
                        width: '100%',
                        height: '12px',
                        backgroundColor: 'pink.200',
                        zIndex: -1,
                    }}
                >
                    Désormais boosté par l'IA.
                </Text>
            </Box>

            {/* Subtitle */}
            <Text fontSize={['lg', 'xl']} color='gray.700' mb={8} maxW='600px'>
                Agence <Text as='span' fontWeight='bold'>fullstack</Text> à Lausanne.
                Conception, développement, déploiement.
                <br />
                De l'idée à l'App Store, <Text as='span' fontWeight='bold'>nous gérons tout</Text>.
            </Text>

            {/* Typewriter effect */}
            <Box mb={8} fontSize='xl' color='gray.500'>
                <Typewritter />
            </Box>

            {/* CTA Button */}
            <Button
                colorScheme='pink'
                size='lg'
                borderRadius='full'
                px={10}
                py={6}
                fontSize='lg'
            >
                Discutons de votre projet
            </Button>
        </Flex>

        {/* Particles Background */}
        <Box position='absolute' h='100vh' w='100%' top={0} left={0} zIndex={1}>
            <ParticlesComponent />
        </Box>
    </Flex>
}