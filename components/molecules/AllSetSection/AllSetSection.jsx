import React from 'react'
import { Text, Picture, View } from '../../atoms'

const Footer = () => (
  <View
    classNames="allSetSection"
    position="relative"
    backgroundColor="black"
  >
    <Text classNames="title">You’re all set.</Text>
    <Text
      width="619px"
      color="white"
      fontSize="18px"
      margin="0 auto"
      fontWeight="400"
      classNames="desc"
      textAlign="center"
      padding="0 0 203px 0"
    >
      The wise man therefore always holds in these matters to this principle of selection.
    </Text>
    <Picture
      source={require('../../../assets/illustrations/ill-robo3.png')}
      imageName="ic-profile"
      width="244px"
      bottom="0"
      position="absolute"
      float="left"
    />
  </View>
)

export default Footer
