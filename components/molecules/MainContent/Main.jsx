import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Text, Picture, Button, View } from '../../atoms'

const Header = () => (
  <View classNames="sectionOne">
    <Picture
      source={require('../../../assets/illustrations/ill-sectionBanner.svg')}
      imageName="bg"
      width="100%"
      position="absolute"
      zIndex="0"
      classNames="bgPict"
      backgroundSize="cover"
    />
    <View
      classNames="sectionOneWrap"
      zIndex="1"
      display="block"
      padding="80px 0"
      position="relative"
    >
      <Parallax y={[-150, 0]}>
        <Text classNames="sectionTitle" color="white" fontSize="62px" fontWeight="900" margin="0" textAlign="center">
          WEEKEND FROM HOME
        </Text>
      </Parallax>
      <Parallax y={[-130, -20]}>
        <Text classNames="sectionDesc" color="white" fontSize="21px" fontWeight="600" margin="20px 0 0 0" textAlign="center" fontStyle="italic">
          Stay active with a little workout.
        </Text>
      </Parallax>
      <Parallax y={[10, -10]}>
        <Picture
          source={require('../../../assets/illustrations/ill-robo1.png')}
          zIndex="1"
          width="180px"
          display="block"
          imageName="ic-robo"
          margin="60px auto 0"
        />
        <Button
          onClick={() => console.log("Masuk")}
          border="0"
          color="#000"
          width="230px"
          height="58px"
          margin="0 auto"
          display="block"
          fontSize="16px"
          fontWeight="400"
          position="relative"
          borderRadius="29px"
          className="goButton"
          backgroundColor="#FFF"
        >
          Let’s Go
        </Button>
      </Parallax>
    </View>
  </View>
)

export default Header
