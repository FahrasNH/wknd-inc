import React from 'react'
import { Text, View } from '../../atoms'
import ScrollAnimation from 'react-animate-on-scroll'

const ResourceSection = () => {
  const getInfoContent = require('./index.json')

  return (
    <View
      classNames="resourceSection"
      backgroundColor="black"
    >
      {getInfoContent.map(data => (
        <React.Fragment key={data.id}>
          <ScrollAnimation animateOnce animateIn='fadeInRightBig'>
            <Text classNames="title">
              {data.title}
            </Text>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn='fadeInLeftBig'>
            <Text
              width="619px"
              color="white"
              fontSize="18px"
              margin="0 auto"
              fontWeight="400"
              classNames="desc"
              textAlign="center"
              padding="0 0 67px 0"
            >
              {data.desc}
            </Text>
          </ScrollAnimation>
        </React.Fragment>
      ))}
    </View>
  )
}

export default ResourceSection
