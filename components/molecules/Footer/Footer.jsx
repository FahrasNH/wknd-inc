import React from 'react'
import { Text, View } from '../../atoms'

const Footer = () => (
  <View
    display="flex"
    position="relative"
    alignItems="center"
    padding="17px 15.6%"
    backgroundColor="#0b24fb"
    classNames="backgroundFooter"
    justifyContent="space-between"
  >
    <Text
      color="white"
      fontSize="16px"
      classNames="textFooter"
    >
      <span>wknd</span>@2020
    </Text>
    <Text
      color="white"
      fontSize="16px"
      padding="5px 20px"
      borderRadius="50px"
      classNames="textFooter"
      border="1px solid white"
    >
      alpha version 0.1
    </Text>
  </View>
)

export default Footer
