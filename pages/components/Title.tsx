import React from 'react'; // we need this to make JSX compile
import { Box } from '@chakra-ui/react';



export const Title = ({title} : {title :string}) => 
    <Box textStyle="h2" textAlign='center'>{title}</Box>

export const Subtitle = ({title} : {title :string}) => 
    <Box textStyle="h3" fontWeight='bold'>{title}</Box>