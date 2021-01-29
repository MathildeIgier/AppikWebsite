import React from 'react'; // we need this to make JSX compile
import { Flex, Box, Textarea, Text, Input, Button } from "@chakra-ui/react"
import Title from '../components/Title'


export default () => {
    return <Flex p={5} flexDirection='column'>
        <Box py={8}>
            <Title title='Estimation'/>
        </Box>
       <Text>Let your contact and some information here. We will recontact you to make an accurate estimation of your project. It is free so enjoy the service!</Text>
       <Flex justifyContent='space-between' py={8}>
            <Input placeholder='Firstname' marginRight={8}/>
            <Input placeholder='Lastname' marginLeft={8}/>
       </Flex>
       <Input placeholder='Email' marginTop={4} marginBottom={8}/>
       <Text>Write about your project, it can be a list of functionnalities you wish to add</Text>
       <Textarea my={4}/>
            <Button colorScheme='blue' px={8} py={5}>Get estimate!</Button>
    </Flex>
}