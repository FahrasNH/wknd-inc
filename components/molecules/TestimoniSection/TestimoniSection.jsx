import React from 'react'
import SliderContent from '../SliderContent'
import { Text, View } from '../../atoms'

const TestimoniSection = () => (
  <View
    padding="0"
    margin="40px 0 0 0"
    backgroundColor="black"
    classNames="sectionTestimoni"
  >
    <Text
      top="-100px"
      width="188px"
      classNames="title"
      position="relative"
      margin="0 auto 30px"
      textShadow="0 20px 30px rgba(249, 131, 171, 0.7)"
    >
      Testimonial
    </Text>
    <SliderContent />
  </View>
)

export default TestimoniSection
