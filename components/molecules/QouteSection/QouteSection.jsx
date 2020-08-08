import React from 'react'
import { Text, Picture, View } from '../../atoms'
import ScrollAnimation from 'react-animate-on-scroll'

const QouteSection = () => (
  <View classNames="qouteSection" id="qouteSection">
    <Picture source={require('../../../assets/illustrations/ill-robo2.png')} imageName="ic-profile" width="159px" float="right" position="relative" />
    <ScrollAnimation animateOnce animateIn='fadeInRightBig'>
      <Text
        color="black"
        width="620px"
        margin="0 auto"
        fontSize="21px"
        fontWeight="600"
        textAlign="right"
        lineHeight="1.52"
        classNames="quote"
        letterSpacing="-0.75px"
      >
        <span>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
      </Text>
      <Text
        color="#FFF"
        width="620px"
        fontSize="21px"
        fontWeight="600"
        textAlign="right"
        fontStyle="italic"
        margin="30px auto 0"
        classNames="quoteCreate"
      >
        -weekend team
      </Text>
    </ScrollAnimation>
    <Picture source={require('../../../assets/icons/ic-oval.svg')} imageName="ic-oval" width="90px" position="relative" margin="38px 0 0" left="20.7%"/>
  </View>
)

export default QouteSection
