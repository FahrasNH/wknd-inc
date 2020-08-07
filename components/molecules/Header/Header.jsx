import React from 'react'
import { Text, Picture, View } from '../../atoms'

const Header = () => (
  <View
    classNames="backgroundHead"
    padding="17px 15.6%"
    backgroundColor="#FFF"
  >
    <Picture source={require('../../../assets/icons/ic-profile.png')} imageName="ic-profile" width="33px" />
    <View
      width="200px"
      margin="0 0 0 13px"
      position="absolute"
      display="inline-block"
      classNames="greetingWarp"
    >
      <Text classNames="greetingText" color="black" fontSize="12px" fontWeight="400" margin="0">Good Morning</Text>
      <Text classNames="greetingName" color="black" fontSize="16px" fontWeight="700" margin="0">Fellas</Text>
    </View>
  </View>
)

export default  Header
