import { Box, Button, Center, Code, Divider, Flex, Heading, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CircleIcon from './CircleIcon'
import heroImg from '../Assets/heroimg.svg'

const HeroSection = () => {
  return (
    <Flex color='white' h='90vh' textAlign='center' flexDir='column' alignItems='center' justifyContent='center'>
        <Box >
        <Text fontWeight='black' >Hello, i am</Text>
        <Heading fontSize='2.5rem' my={3} >Narayan Thapa</Heading>
        <Text fontWeight='black'>Web Developer</Text>
        
        <HStack mt={10} spacing={5} >
            <Button size='md' colorScheme='blue' >Download CV</Button>
            <Button size='md' variant='outline' _hover={{bg: "none", border: '2px' , borderColor: 'blue.300'}}  >Hire Me</Button>
        </HStack>
        </Box>
       
        <Box marginTop='1rem'  display='flex' alignItems='flex-end' width='300px'  borderRadius='full' >
            <img  width='100%' src={heroImg} alt='hero img' />
        </Box>
    </Flex>
  )
}

export default HeroSection