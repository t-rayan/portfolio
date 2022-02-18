import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex justifyContent='space-between' h='8vh' py={4} color='white'>
        <Text>Thapa</Text>
        <Text>Dark</Text>
        </Flex>
  )
}

export default Header